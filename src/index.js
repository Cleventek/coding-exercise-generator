import $ from 'jquery';
import { expect } from 'chai';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {buildItem} from './buildItem';

window.jQuery = $;
window.$ = $;
window.expect = expect;

window.createExercises = (options) => {
    const {items} = options;
    const $container = $('<div class="container my-3"><div id="accordion_exercises" class="accordion" /></div>');
    const $accordion = $container.find('.accordion');

    $('body').append($container);

    items.map((item, idx) => {
        const $item = buildItem(item, idx);

        $accordion.append($item);
    });
};
