import $ from 'jquery';

const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

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

    $answer.find(triggerSelector)
        .on('click', (event) => {
            $mask.removeClass('d-none');

            if ($.isPlainObject(item.test) && $.isFunction(item.test.before)) {
                item.test.before($answer, {event, data});
            }
        })
        .on('click', debounce((event) => {
            $feedback.hide();

            let test;

            if ($.isPlainObject(item.test) && $.isFunction(item.test.test)) {
                test = item.test.test;
            } else if ($.isFunction(item.test)) {
                test = item.test;
            }

            if ($.isFunction(test)) {
                try {
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
            } else {
                console.log(`test validation has not been setup for ${item.title}`);
            }

            $mask.addClass('d-none');
        }, item.testDelay || 10));
}
