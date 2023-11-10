import $ from 'jquery';
import { expect } from 'chai';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './jquery.bindFirst';
import {buildItem} from './buildItem';
import buildContent from './content';
import {buildToolbar} from "./toolbar";

window.jQuery = $;
window.$ = $;
window.expect = expect;

window.createExercises = (options) => {
    const {items, instruction} = options;
    const $container = $(
        `<div class="container my-3">
            <div id="exercises" />
        </div>`);
    const $exercises = $container.find('#exercises');
    const toolbar = buildToolbar({
        ...options,
        $exercises,
    });

    $container.prepend(toolbar.$el);

    const $instruction = buildContent(instruction);

    if ($instruction && $instruction.length) {
        $container.prepend($instruction);
    }

    $('body').append($container);

    items.map((item, idx) => {
        const $item = buildItem(item, idx);

        $exercises.append($item);
    });

    setTimeout(() => {
        if (
            typeof window.currentActiveExercise !== 'undefined' &&
            window.currentActiveExercise > 0 && window.currentActiveExercise <= options.items.length
        ) {
            toolbar.goto(window.currentActiveExercise);
        }
    }, 500);
};

setTimeout(() => {
    if (typeof window.exercises !== 'undefined') {
        window.createExercises(window.exercises);
    }
}, 10);

