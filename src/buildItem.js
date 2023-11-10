import $ from "jquery";
import processValidation from './validation';
import buildContent from './content';

export function buildItem(item, idx) {
    const id = item.id || `exercise-${idx + 1}`;
    const $description = buildContent(item.description);
    let $content = $(`#${id}`);

    $content = $content.length
        ? $content
        : $(`<div id="${id}" class="exercise"><div class="answer" data-trigger=".submit"/></div>`);

    const $item = $(`
         <div data-exercise="${idx + 1}" id="execersie--${idx + 1}" class="collapse mt-4 ${!idx ? 'show' : ''}">
            <h2 class="accordion-header">
                <span class="fs-3"><u>Exercise ${idx + 1}</u>: ${item.title}</span>
            </h2>
            <div id="exercise--${id}-body">
              <div class="accordion-body" />
            </div>
          </div>
        `);

    const $itemContent = $item.find('.accordion-body');

    if ($description && $description.length) {
        $itemContent.append($description);
    }

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

    const $instruction = buildContent(item.instruction);

    if ($instruction && $instruction.length) {
        const $alert = $(`<div class="alert alert-warning mt-3"><div class="fw-bold text-decoration-underline">Tips</div></div>`);

        $alert.append($instruction);
        $itemContent.append($alert);
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
