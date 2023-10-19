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
    const { items } = options;
    const make = (item, idx) => {
        const id = item.id || `exercise-${idx + 1}`;
        let $content = $(`#${id}`);

        $content = $content.length ? $content : $(`
            <div id="${id}" class="exercise">
                <div class="answer" data-trigger=".submit"/>
            </div>
        `);

        const $item = $(`
         <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${id}">
                <span class="fs-3">${item.title}</span>
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

        if (item.type === 'html') {
            $itemContent.append(`
                <div class="alert alert-warning mt-3"><span class="text-decoration-underline fst-italic me-2">Tips</span>This exercise requires you to modify the HTML of <b>${id} - answer element</b></div>
            `);
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
        const $feedback = $itemContent.find('.exercise-feedback');
        const $answer = $content.find('.answer');
        const triggerSelector = $answer.attr('data-trigger') || '.submit';

        $answer.find(triggerSelector).on('click', debounce(() => {
            const result = item.validate($answer);

            $feedback.hide();

            if (result) {
                $feedback
                    .removeClass('alert-danger')
                    .addClass('alert-success')
                    .text('Woo hoo! You get it right! Awesome')
                    .fadeIn();
            } else {
                $feedback
                    .removeClass('alert-success')
                    .addClass('alert-danger')
                    .text('Oops! It does not look right! Try again :D')
                    .fadeIn();
            }
        }, 200));

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
