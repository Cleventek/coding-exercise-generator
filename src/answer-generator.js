import $ from 'jquery';

function getTextareaProps(name, rows) {
    return `
        rows="${rows || 1}"
        placeholder=${name || ''}
        class="form-control d-inline-block w-auto"
    `;
}

export default function buildAnswer(generatorOptions, $answer, validationData) {
    const $content = $('<div />');
    const { type, options } = generatorOptions;

    if (type === 'function') {
        $content.append(`
            <div class="p-3">
                <div class="mb-3 text-decoration-underline">Your method</div>
                <code class="d-flex flex-wrap align-content-stretch align-items-center fs-5 mb-2 gap-1">
                    <div>${options.name}(</div>
                    ${options.arguments.map((arg) => {
                        return `<textarea data-fn-input="${arg.name}" ${getTextareaProps(arg.name, options.row)}>${arg.defaultValue || ''}</textarea>`;            
                    })}
                    <div/>)</div>
                    <div class="ps-2 text-dark fs-6">returns</div>
                    <textarea data-fn-result="result" readonly ${getTextareaProps('Result', options.row)}></textarea>
                </code>
                <button class="btn btn-primary submit px-4">Submit</button>
            </div>
        `);
    }

    $answer.find('[data-arg-input]').on('change', function () {
        const $input = $(this);
        const name = $input.attr('data-arg-input');

        validationData.fn = validationData.fn || {};

        validationData.fn[name] = {
            $el: $input,
            value: $input.val()
        };
    });

    return $content;
}