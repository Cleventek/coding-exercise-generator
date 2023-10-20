import $ from 'jquery';
import buildAnswer from './answer-generator';

const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

const formatValue = (value) => {
    if ($.isPlainObject(value) || $.isArray(value)) {
        value = JSON.stringify(value, null,  4);
    }

    if (typeof value === 'undefined' || value === null) {
        value = '';
    }

    return value;
}
const originalConsoleLog = console.log;

export default function processValidation(item, $itemContent, $answer) {
    const $feedback = $itemContent.find('.exercise-feedback');
    const triggerSelector = $answer.attr('data-trigger') || '.submit';
    const $mask = $answer.find('.mask');
    const messages = {
        success: 'Woo hoo! You get it right! Awesome',
        error: 'Oops! It does not look right! Try again :D'
    };
    const showFeedback = (type, message) => {
        let removedClasses = 'alert-success alert-info';

        if (type === 'info') {
            removedClasses = 'alert-danger alert-success';
        } else if (type === 'success') {
            removedClasses = 'alert-danger alert-info';
        }

        $feedback
            .removeClass(removedClasses)
            .addClass(`alert-${type === 'error' ? 'danger' : type}`)
            .html(message)
            .fadeIn();
    };
    const data = {};
    const prepareData = () => {
        if (item.data && item.data.type === 'function') {
            const $fnResult = $answer.find('[data-fn-result]');

            if ($fnResult.length) {
                data.fn = data.fn || { error: false };
                data.fn.execute = window[item.data.options.name];
                data.fn.args = [];

                $answer.find('[data-fn-input]').each(function () {
                    const $input = $(this);

                    data.fn.args.push({
                        $el: $input,
                        name: $input.attr('data-fn-input'),
                        value: $input.val().trim()
                    });
                });

                data.fn.result = {
                    $el: $fnResult,
                    name: 'result',
                    value: $fnResult.html().trim()
                };
            }
        }

        return data;
    };

    if (item.data) {
        const $answerData = buildAnswer(item.data, $answer, data);

        if ($answerData && $answerData.length) {
            $answer.append($answerData);
        }
    }

    $answer.find(triggerSelector)
        .on('click', (event) => {
            $mask.removeClass('d-none');

            prepareData();

            // Set result input value
            if (item.data && item.data.type === 'function' && $.isFunction(data.fn.execute)) {
                data.fn.error = false;

                const args = data.fn.args.map((arg) => {
                    try {
                        return JSON.parse(arg.value);
                    } catch (e) {}

                    return arg.value;
                });

                data.fn.result.$el.html('');

                try {
                    // Hijack console.log to print result
                    console.log = (...args) => {
                        originalConsoleLog.apply(console, args);

                        args.forEach((arg) => {
                            const argValue = formatValue(arg);

                            data.fn.result.$el.html(
                                data.fn.result.$el.html() +
                                `<div>${argValue.toString()}</div>`
                            )
                        });
                    };

                    let value = data.fn.execute(...args);

                    value = formatValue(value);

                    data.fn.result.$el.html(
                        data.fn.result.$el.html() + value.toString()
                    );
                } catch (e) {
                    data.fn.error = e.message;
                    data.fn.result.$el.html('ERROR');
                }

                console.log = originalConsoleLog;
            }

            if ($.isPlainObject(item.test) && $.isFunction(item.test.before)) {
                item.test.before($answer, { event, data });
            }

            window.__tempTestData = {
                $answer,
                options: {
                    event,
                    data
                },
            };
        })
        .on('click', debounce((event) => {
            $feedback.hide();

            let test;

            if ($.isPlainObject(item.test) && $.isFunction(item.test.test)) {
                test = item.test.test;
            } else if ($.isFunction(item.test)) {
                test = item.test;
            }

            prepareData();

            window.__tempTestData = {
                $answer,
                options: {
                    event,
                    data
                },
            };

            if ($.isFunction(test)) {
                try {
                    if (item.data && item.data.type === 'function') {
                        expect($.isFunction(data.fn.execute), `Oops! Have you created the function <code>${item.data.options.name}</code> ???`).to.equal(true);
                        expect(data.fn.error, data.fn.error).to.equal(false);
                        expect(data.fn.result.value, `Oops! Your function <code>${item.data.options.name}</code> does not <code>return</code> anything`).to.not.equal('');
                    }

                    const result = test($answer, { event, data });

                    if (result === true || typeof result === 'undefined') {
                        showFeedback('success', messages.success);
                    } else if (typeof result === 'string') {
                        showFeedback('info', result || `${messages.success}. Let's do the next step.`);
                    }
                } catch (e) {
                    const message = e.message;

                    showFeedback('error', message.indexOf('default:') === 0 ? messages.error : message);
                }

                if (item.data && item.data.type === 'function') {
                    data.fn.error = false;
                }
            } else {
                console.error(`test validation has not been setup for ${item.title}`);
            }

            $mask.addClass('d-none');
        }, item.testDelay || 10));
}
