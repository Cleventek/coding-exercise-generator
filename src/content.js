import $ from 'jquery';

const build = (contentItem, $parent) => {
    if (typeof contentItem === 'string') {
        $parent.append(contentItem);
    } else if ($.isPlainObject(contentItem) && contentItem.type) {
        const $contentItem = factory[contentItem.type](contentItem);

        $parent.append($contentItem);
    }
};
const factory = {
    list: (contentItem) => {
        const tag = contentItem.tag || 'ul';
        const $list = $(`<${tag} />`);

        if ($.isPlainObject(contentItem.data)) {
            for (const [key, value] of Object.entries(contentItem.data)) {
                const $li = $('<li />');

                $li.append(`<span class="text-decoration-underline fw-bold me-2">${key}:</span>`);

                build(value, $li);

                $list.append($li);
            }
        } else if ($.isArray(contentItem.data)) {
            contentItem.data.forEach((value) => {
                const $li = $('<li />');

                build(value, $li);

                $list.append($li);
            });
        }


        return $list;
    },
    code: (contentItem) => {
        const content = $.isPlainObject(contentItem.constructor) || $.isArray(contentItem.content)
            ? JSON.stringify(contentItem.content, null, 4)
            : contentItem.content;

        const $content = $(`<div class="mt-2 p-3 alert alert-dark pb-0"><pre><code>${content}</code></pre></div>`);

        if (contentItem.title) {
            $content.prepend(`<div class="fw-bold mb-1">${contentItem.title}</div>`)
        }

        return $content;
    },
}

export default function buildContent(content) {
    const $content = $('<div />');

    if (typeof content === 'string') {
        $content.html(content);

        return $content;
    }

    if ($.isArray(content)) {
        content.forEach((contentItem) => {
            build(contentItem, $content);
        });

        return $content;
    }
}