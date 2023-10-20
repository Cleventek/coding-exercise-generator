import $ from 'jquery';
import { expect } from 'chai';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {buildItem} from './buildItem';
import buildContent from "./content";

window.jQuery = $;
window.$ = $;
window.expect = expect;

window.createExercises = (options) => {
    const {items, instruction} = options;
    const $container = $('<div class="container my-3"><div id="accordion_exercises" class="accordion" /></div>');
    const $accordion = $container.find('.accordion');
    const $instruction = buildContent(instruction);

    if ($instruction && $instruction.length) {
        $container.prepend($instruction);
    }

    $('body').append($container);

    items.map((item, idx) => {
        const $item = buildItem(item, idx);

        $accordion.append($item);
    });
};

setTimeout(() => {
    if (typeof window.exercises !== 'undefined') {
        window.createExercises(window.exercises);
    }
}, 10);

