window.createExercises = (options) => {
    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };
    const {items} = options;
    const processValidation = (item, $itemContent, $answer) => {
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
                .text(message)
                .fadeIn();
        };
        const data = {
            validateIdx: 0,
        };

        $answer.find(triggerSelector)
            .on('click', (event) => {
                $mask.removeClass('d-none');

                if ($.isPlainObject(item.validate) && $.isFunction(item.validate.beforeValidate)) {
                    item.validate.beforeValidate($answer, {event, data});
                } else if ($.isArray(item.validate) && $.isFunction(item.validate[data.validateIdx].beforeValidate)) {
                    item.validate[data.validateIdx].beforeValidate($answer, {event, data});
                }
            })
            .on('click', debounce((event) => {
                $feedback.hide();

                if ($.isArray(item.validate)) {
                    const curValidation = item.validate[data.validateIdx];
                    let result = curValidation.validate($answer, {event, data});

                    if (result === true || ($.isPlainObject(result) && result.success)) {
                        data.validateIdx++;

                        if (data.validateIdx === item.validate.length) {
                            data.validateIdx = 0;
                            showFeedback('success', messages.success);
                        } else {
                            showFeedback('info', result?.message || `${messages.success}. Let's do the next step.`);
                        }
                    } else {
                        if ($.isPlainObject(result) && !result.success) {
                            showFeedback('error', result?.message || messages.error);
                        } else if (typeof result === 'string') {
                            showFeedback('error', result || messages.error);
                        } else {
                            showFeedback('error', messages.error);
                        }
                    }
                } else {
                    let validate;

                    if ($.isFunction(item.validate)) {
                        validate = item.validate;
                    } else if ($.isPlainObject(item.validate) && $.isFunction(item.validate.validate)) {
                        validate = item.validate.validate;
                    }

                    if (validate) {
                        const result = validate($answer, {event, data});

                        if (result === true) {
                            showFeedback('success', messages.success);
                        } else if (result === false) {
                            showFeedback('error', messages.error);
                        } else if (typeof result === 'string') {
                            showFeedback('error', result);
                        }
                    }
                }

                $mask.addClass('d-none');
            }, item.validateDelay || 10));
    };
    const make = (item, idx) => {
        const id = item.id || `exercise-${idx + 1}`;
        let $content = $(`#${id}`);

        $content = $content.length ? $content : $(`
            <div id="${id}" class="exercise">
                <div class="answer" data-trigger=".submit"/>
            </div>
        `);

        const $item = $(`
         <div class="accordion-item mt-4">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${id}">
                <span class="fs-3"><u>Exercise ${idx + 1}</u>: ${item.title}</span>
              </button>
            </h2>
            <div id="collapse-${id}" class="accordion-collapse collapse show">
              <div class="accordion-body">
                <div>${item.description}</div>
              </div>
            </div>
          </div>
        `);

        const $itemContent = $item.find('.accordion-body');

        if (item.note) {
            $itemContent.append(`
                <div class="alert alert-warning mt-3">
                    <span class="text-decoration-underline fst-italic me-2">Tips</span>
                    ${item.note}
                </div>
            `);
        }

        if (item.searchPhrases) {
            $itemContent.append(`
                <div class="alert alert-info mt-3 search-phrases">
                    <div class="text-muted fst-italic me-2">Use <b>Google</b> or <b>Open AI</b> to search for:</div>
                    <ol class="search-pharses m-0 mt-2" />
                </div>
            `);

            const $searchPhrases = $itemContent.find('.search-pharses');

            item.searchPhrases.map((pharse) => {
                $searchPhrases.append(`<li>${pharse}</li>`);
            });
        }

        if (!item.validate) {
            $itemContent.append(`
                <div class="alert alert-danger mt-3">Missing exercise validation</div>
            `);
        }

        $itemContent.append('<div class="fw-bold mt-3">Answer</div>')
        $content.addClass('border mt-2 p-2 bg-light');
        $content.appendTo($itemContent);

        $itemContent.append(`
            <div class="exercise-feedback alert mt-2" style="display: none;"></div>
        `);
        const $answer = $content.find('.answer');

        // Add mask to prevent multi clicks
        $answer.addClass('position-relative').append('<div class="mask bg-light opacity-25 d-none position-absolute top-0 bottom-0 start-0 end-0" style="z-index:9999;"/>');

        processValidation(item, $itemContent, $answer);

        return $item;
    }

    const $container = $('<div class="container my-3"><div id="accordion_exercises" class="accordion" /></div>');
    const $accordion = $container.find('.accordion');

    $('body').append($container);

    items.map((item, idx) => {
        const $item = make(item, idx);

        $accordion.append($item);
    })
};
