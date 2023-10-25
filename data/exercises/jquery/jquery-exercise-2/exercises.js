window.exercises = {
    instruction: [
        '<h2>Tips</h2>',
        '<div>Change the <code>window.currentActiveExercise</code> to quickly jump to the exercise you are working with.</div>',
        '<div>For example <code>window.currentActiveExercise = 3;</code> will jump you to exercise 3</div>'
    ],
    items: [
        {
            title: 'Bootstrap modal',
            description: [
                `<div>Clicking the <code>Open modal</code> button will open a Bootstrap modal with following requirements</div>`,
                {
                    type: 'list',
                    data: {
                        id: 'The Modal html will have <code>id="exercise-1-modal"</code>',
                        title: 'My first modal',
                        content: `<code>This is Bootstrap modal</code>`,
                        footer: `contains a <code>Close modal</code> button.`,
                        behaviors: {
                            type: 'list',
                            data: {
                                'clicking outside the Modal': 'SHOULD NOT close the modal',
                                'clicking <code>Close modal</code> button': 'Close the modal'
                            }
                        }
                    }
                }
            ],
            searchPhrases: [
                'Bootstrap 5 Modal',
                'Bootstrap 5 Modal static backdrop'
            ],
            testDelay: 500,
            test($answer, {event}) {
                const $btn = $(event.currentTarget);
                const action = $btn.text().trim().toLowerCase();

                if (action === 'open modal') {
                    expect($('#exercise-1-modal').is(':visible'), 'The modal is still invisible').to.equal(true);

                    return `Now let's check if clicking <code>Close modal</code> will close the modal or not`;
                } else if (action === 'close modal') {
                    expect($('#exercise-1-modal').is(':visible'), 'The modal is still visible').to.equal(false);
                }
            }
        },
        {
            title: 'Append items list and highlight even or odd numbers',
            description: [
                `<div>This exercise has 2 major requirements</div>`,
                `<div><b>Requirement 1:</b></div>`,
                {
                    type: 'list',
                    data: [
                        'Loop and create 20 <code>div</code> elements inside <code>.exercise-2-container</code> element. Each new <code>div</code> has the following requirements',
                        {
                            type: 'list',
                            data: {
                                content: '<code>Item [number]</code>. Note that <code>[number]</code> Start from 1 and end at 20. For example: <code>Item 1</code>, <code>Item 2</code>...',
                                class: {
                                    type: 'list',
                                    data: [
                                        'Use Bootstrap class to add the following style to each <code>div</code>. 1px border, white background, center text',
                                        'For <code>div</code> element that has odd number content (Item 1, Item 3, Item 5...), add class <code>exercise-2-item-odd</code>',
                                        'For <code>div</code> element that has even number content (Item 2, Item 4, Item 6...), add class <code>exercise-2-item-even</code> '
                                    ]
                                }
                            }
                        }
                    ]
                },
                `<div><b>Requirement 2:</b></div>`,
                {
                    type: 'list',
                    data: {
                        'Clicking <code>Highlight even numbers</code>': 'Will add class <code>bg-primary text-white</code> to all <code>div</code> having even number content (Item 2, Item 4, Item 6...)',
                        'Clicking <code>Highlight odd numbers</code>': 'Will add class <code>bg-primary text-white</code> to all <code>div</code> having odd number content (Item 2, Item 4, Item 6...)'
                    }
                },
            ],
            searchPhrases: [
                'Append new elements using jQuery',
                'Add class to elements using jQuery',
                'Remove class from elements using jQuery'
            ],
            test($answer, {event}) {
                const action = $(event.currentTarget).text().trim();

                expect($('.exercise-2-container').children().length, '<code>.exercise-2-container</code> needs to have 20 children').to.be.equal(20);

                if (action.includes('even')) {
                    expect($('.exercise-2-item-even').hasClass('bg-primary text-white'), '<code>.exercise-2-item-even</code> does not have the required classes').to.equal(true);
                } else if (action.includes('odd')) {
                    expect($('.exercise-2-item-odd').hasClass('bg-primary text-white'), '<code>.exercise-2-item-odd</code> does not have the required classes').to.equal(true);
                } else {
                    return false;
                }
            }
        },
        {
            title: 'Create data table dynamically',
            description: [
                '<div>Create a variable named <code>exercise3Data</code> to store the <code>array</code> list below</div>',
                {
                    type: 'code',
                    content: [
                        {
                            name: 'Jack Vo',
                            age: 38,
                            gender: 'M',
                        },
                        {
                            name: 'Yum T.',
                        },
                        {
                            name: 'Alice K.',
                            age: 26,
                            gender: 'F',
                        },
                        {
                            name: 'Valentino Hughes',
                            age: 41,
                            gender: 'M',
                        },
                        {
                            name: 'Alica Keys',
                            gender: 'F'
                        }
                    ]
                },
                '<div>When clicking the button <code>Create table</code>, we will loop through the <code>exercise3Data</code> and append a Bootstrap table like below to the container <code>.exercise-3-container</code></div>',
                {
                    type: 'list',
                    data: {
                        'Header title': 'will be # (the order of the item), Name, Age, Gender',
                        'Undefined value': 'If any field value is not set (undefined) like the age and gender of the 2nd item "Yum T." we will set the text of that table cell as "Undefined"'
                    }
                },
                `
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Jack Vo</td>
      <td>38</td>
      <td>M</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Yum T</td>
      <td>Undefined</td>
      <td>Undefined</td>
    </tr>
  </tbody>
</table> ...`
            ],
            searchPhrases: [
                'Table Bootstrap 5',
                'Append new elements using jQuery',
                'Check undefined data type using jQuery'
            ],
            test($answer) {
            }
        },
        {
            title: 'Move element using jQuery animate',
            description: [
                '<div>This exercise is to move the <code>.exercise-4-target</code> box in the correct direction using <code>jQuery animate</code></div>',
                '<div>Belows are the requirements for each buttons</div>',
                {
                    type: 'list',
                    data: {
                        'Left': 'Clicking the button will move the box to the left by <code>10px</code>. If the box is at the left edge of the container, clicking this button will do nothing.',
                        'Right': 'Clicking the button will move the box to the right by <code>10px</code>. If the box is at the right edge of the container, clicking this button will do nothing.',
                        'Left edge': 'Clicking the button will move the box all the way to the left edge of the container. If the box is at the left edge of the container, clicking this button will do nothing.',
                        'Right edge': 'Clicking the button will move the box all the way to the right edge of the container. If the box is at the right edge of the container, clicking this button will do nothing.',
                        'Right edge then Left edge': 'Clicking the button will move the box all the way to the right edge of the container then go all way back to the left edge of the container',
                    },
                }
            ],
            searchPhrases: [
                'Animate element position using jQuery'
            ],
            test($answer, {event}) {
            }
        },
        {
            title: 'Dynamic image gallery using Bootstrap and jQuery',
            description: [
                `<div>This exercise has 2 major requirements</div>`,
                `<div class="mt-2"><b>Requirement 1:</b></div>`,
                `<div>Create a variable <code>exercise5Data</code> and store the array of image links below</div>`,
                `<div>When clicking the <code>Create gallery</code> button, loop through the array variable <code>exercise5Data</code> and append to the container <code>.exercise-5-container container</code> an <code>img</code> element having:</div>`,
                {
                    type: 'list',
                    data: {
                        class: '<code>img-thumbnail m-2</code>',
                        src: 'The image URL at the current index',
                        width: '200'
                    }
                },
                {
                    type: 'code',
                    content: [
                        'https://www.flowercity.com.au/images/products/medium/3lriy5a8u7.jpg',
                        'https://www.yates.com.au/media/plants/flowers-and-ornamentals/flowers/pr-tn-flowers-sunflower.jpg',
                        'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/discover-the-secret-language-of-flowers-2022-thumbnail.jpeg',
                        'https://hips.hearstapps.com/hmg-prod/images/types-of-garden-flowers-purple-allium-1674847068.jpeg',
                        'https://images.pexels.com/photos/850359/pexels-photo-850359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                        'https://bloombarflowers.com/cdn/shop/files/unnamed_24.png',
                        'https://www.flowersforeveryone.com.au/images/wp-content/uploads/2015/01/Weird-Flower-3.jpg'
                    ]
                },
                `<div class="mt-2"><b>Requirement 2:</b></div>`,
                `<div>Clicking <code>img</code> will open a Bootstrap modal with following requirements</div>`,
                {
                    type: 'list',
                    data: {
                        id: 'The Modal html will have <code>id="exercise-5-modal"</code>',
                        title: 'My image gallery modal',
                        content: {
                            type: 'list',
                            data: [
                                'An <code>img</code> in the middle of the modal content. This <code>img</code> will have <code>src</code> set to the selected image that we have just clicked.',
                                'A <code>div</code> to display the selected image url as text. This <code>div</code> will have its text center.'
                            ]
                        },
                        footer: `contains a <code>Close</code> button.`,
                        behaviors: {
                            type: 'list',
                            data: {
                                'clicking outside the Modal': 'SHOULD NOT close the modal',
                                'clicking <code>Close</code> button in the footer': 'Close the current opened modal'
                            }
                        }
                    }
                },
            ],
            searchPhrases: [
                'Set img width height html',
                'Open bootstrap 5 modal using javascript'
            ],
            test($answer, {event}) {
            }
        }
    ]
};
