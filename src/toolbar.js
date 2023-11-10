export function buildToolbar(options) {
    const { items, $exercises } = options;
    const $toolbar = $(
        `<div class="d-flex mt-4 gap-3 justify-content-center">
            <button data-action="previous" class="btn btn-secondary">Previous</button>
            <select class="form-select w-auto"></select>
            <button data-action="next" class="btn btn-primary">Next</button>
        </div>`
    );
    const $select = $toolbar.find('select');

    items.forEach((item, idx) => {
        const $option = $(`<option />`);
        const text = $('<div />').text(item.title).text();

        $option.text(`Exercise ${idx + 1} of ${items.length} - ${text}`);
        $option.val(`${idx + 1}`);

        $select.append($option);
    });
    const goto = (exerciseNumber) => {
        $exercises
            .find(`[data-exercise]`)
            .removeClass('show');

        $exercises
            .find(`[data-exercise="${exerciseNumber}"]`)
            .addClass('show');

        $select.val(exerciseNumber);
    };

    $select.on('change', function () {
        const exerciseNumber = $select.val();

        goto(exerciseNumber);
    });

    $toolbar.find('[data-action]').on('click', function () {
        const $btn = $(this);
        const action = $btn.attr('data-action');
        const currentActiveExercise = parseInt(
            $exercises.find(`[data-exercise].show`).attr('data-exercise'),
            10
        );

        if (action === 'previous') {
            if (currentActiveExercise > 1) {
                goto(currentActiveExercise - 1);
            }
        } else if (action === 'next') {
            if (currentActiveExercise < items.length) {
                goto(currentActiveExercise + 1);
            }
        }
    });

    return {
        goto,
        $el: $toolbar
    }
}