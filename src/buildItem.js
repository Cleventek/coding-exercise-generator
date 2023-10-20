import $ from "jquery";
import processValidation from './validation';

export function buildItem(item, idx) {
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
