window.exercises = {
    items: [
        {
            title: 'Change text',
            description: `
                <div>When the button is clicked, use jQuery to change the text of the paragraph from <code>Original text</code> to <code>Text changed</code></div>
                `,
            searchPhrases: [
                'Set element text using jQuery'
            ],
            test: ($answer) => {
                expect($answer.find('.exercise-1-text').text()).to.equal('Text changed');
            }
        },
        {
            title: 'Hide and show',
            description: `
                <div>When the button is clicked, use jQuery to hide the image, and when clicked again, show the image.</div>
                `,
            searchPhrases: [
                'Check if element is visible using jQuery',
                'Hide element using jQuery',
                'Show element using jQuery',
            ],
            test: {
                before($answer, { data }) {
                    data.prevVisible = $answer.find('.exercise-2-img').is(':visible');
                },
                test($answer, { data }) {
                    const curVisible = $answer.find('.exercise-2-img').is(':visible');

                    if (data.prevVisible && !curVisible) {
                        return 'Great, the image is now invisible';
                    }

                    expect(data.prevVisible, 'default').to.not.equal(curVisible);
                }
            }
        },
        {
            title: 'Toggle element class',
            description: `
                <div>When the button is clicked, toggle its class in this order <code>btn-primary</code> > <code>btn-secondary</code> > <code>btn-danger</code> > <code>btn-warning</code> then go back to <code>btn-primary</code></div>
                `,
            test: {
                before($answer, { data }) {
                    const classes = event.currentTarget.classList;

                    for (const className of classes) {
                        if (className.indexOf('btn-') === 0) {
                            data.prevClassName = className;
                            break;
                        }
                    }
                },
                test($answer, { event, data }) {
                    const orders = ['btn-primary', 'btn-secondary', 'btn-danger', 'btn-warning'];
                    const $target = $(event.currentTarget);

                    if (data.prevClassName) {
                        let idx = orders.indexOf(data.prevClassName) + 1;

                        if (idx === orders.length) {
                            idx = 0;

                            return true;
                        }

                        const expectedClass = orders[idx];

                        expect($target.hasClass(expectedClass)).to.equal(true);

                        return `Great, the button has the correct <code>${expectedClass}</code>`;
                    } else {
                        expect(typeof data.prevClassName, 'default').to.equal('string');
                    }
                }
            }
        },
        {
            title: 'Simple event handling',
            description: `
                <div>Each time the buttons are clicked, use jQuery to increment or decrement the counter and update the counter's text.</div>
                `,
            test: {
                before($answer, { data }) {
                    data.prevCount = parseInt($answer.find('.exercise-4-counter').text().trim());
                },
                test($answer, { event, data }) {
                    const curCount = parseInt($answer.find('.exercise-4-counter').text().trim());

                    if (event.currentTarget.textContent.includes('Decrease')) {
                        expect(curCount).to.be.lt(data.prevCount);
                    } else if (event.currentTarget.textContent.includes('Increase')) {
                        expect(curCount).to.be.gt(data.prevCount);
                    }
                }
            }
        },
        {
            title: 'Slide toggle animation',
            description: `
                <div>Each time the button is clicked, toggle the slide animation of the <code>div</code> below.</div>
                `,
            searchPhrases: [
                'Slide animation using jQuery'
            ],
            testDelay: 500,
            test: {
                before($answer, { data }) {
                    data.prevVisible = $answer.find('.exercise-5-text').is(':visible');
                },
                test($answer, { data }) {
                    const curVisible = $answer.find('.exercise-5-text').is(':visible');

                    if (data.prevVisible && !curVisible) {
                        return 'Great, the paragraph is now invisible';
                    }

                    expect(data.prevVisible, 'default').to.not.equal(curVisible);
                }
            }
        },
        {
            title: 'Dropdown list',
            description: `
                <div>Each time the button is clicked, toggle the fade animation of the list <code>ul</code> next to that button. When the list is visible, the button text should be "Close" and when the list is invisible, the button text should be "Open"</div>
                `,
            searchPhrases: [
                'Fade animation using jQuery'
            ],
            testDelay: 500,
            test: {
                before($answer, {event, data}) {
                    const $btn = $(event.currentTarget);
                    const $list = $btn.next('ul');

                    data.items = data.items || [];

                    const matchedItem = data.items.filter((item) => {
                        return item.el === event.currentTarget;
                    })[0];

                    if (!matchedItem) {
                        data.items.push({
                            el: event.currentTarget,
                            prevVisible: $list.is(':visible')
                        });
                    } else {
                        matchedItem.prevVisible = $list.is(':visible');
                    }
                },
                test($answer, { event, data }) {
                    const $btn = $(event.currentTarget);
                    const $list = $btn.next('ul');
                    const matchedItem = data.items.filter((item) => {
                        return item.el === event.currentTarget;
                    })[0];
                    const curVisible = $list.is(':visible');

                    expect(matchedItem.prevVisible, 'The list visibility state is not correct').to.not.equal(curVisible);

                    const btnText = $btn.text();

                    if (curVisible) {
                        expect(btnText, 'The button text should be "Close"').to.equal('Close');
                    } else {
                        expect(btnText, 'The button text should be "Open"').to.equal('Open');
                    }
                }
            }
        },
        {
            title: 'For...loop to create elements',
            description: `
                <div>When the total <code>li</code> elements in the <code>ul</code> is less than 20.
                    <ol>
                        <li>The button text should be <code>Add new elements</code>.</li>
                        <li>When the button is clicked, append 4 <code>li</code> elements with the content "New item #number" to the <code>ul</code> list next to it.</li>
                    </ol>
                </div>
                <div>When the total <code>li</code> elements is greater or equal 20
                    <ol>
                        <li>the button text should change to <code>Destroy</code></li>
                        <li>When the button is clicked, we will remove all the <code>li</code> inside the <code>ul</code></li>                    
                    </ol>
                </div>
                `,
            searchPhrases: [
                'Append new element using jquery',
                'Remove element using jquery'
            ],
            test: {
                before($answer, { data }) {
                    data.prevCount = $answer.find('li').length;
                },
                test($answer, { event, data }) {
                    const count = $answer.find('li').length;

                    if (data.prevCount === 20 && count === 0) {
                        return true;
                    }

                    const btnText = $(event.currentTarget).text();

                    expect(count, 'Wrong, the number of <code>li</code> elements should not be more than 20')
                        .to.be.lte(20);

                    expect(data.prevCount + 4, 'The number of newly added <code>li</code> elements is not 4').to.equal(count);

                    if (data.prevCount + 4 < 20) {
                        expect(btnText).to.equal('Add new elements');
                    } else {
                        expect(btnText).to.equal('Destroy');
                    }

                    return `That's great, keep going!`;
                }
            }
        }
    ]
};
