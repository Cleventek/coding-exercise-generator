window.exercises = {
    instruction: [
        '<h2>Javascript practice</h2>',
        '<div>Change the <code>window.currentActiveExercise</code> to quickly jump to the exercise you are working with.</div>',
        '<div>For example <code>window.currentActiveExercise = 3;</code> will jump you to exercise 3</div>'
    ],
    items: [
        {
            title: 'Easy - greetMe(name, country) function',
            description: [
                '<div>Create a function that will return a greeting string using the provided name and country</div>',
                {
                    type: 'list',
                    data: {
                        name: 'greetMe',
                        arguments: {
                            type: 'list',
                            data: {
                                name: 'string',
                                country: 'string'
                            }
                        },
                        return: 'a string'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `greetMe('Alice', 'Wonderland'); // will return "Hello, my name is Alice, I am from Wonderland!"`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'greetMe',
                    arguments: [
                        {
                            name: 'name',
                            defaultValue: 'Frankenstein',
                        },
                        {
                            name: 'country',
                            defaultValue: 'Fantasyland',
                        }
                    ],
                    return: 'string'
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const name = args[0].value;
                const country = args[1].value;

                expect(result.value).to.equal(`Hello, my name is ${name}, I am from ${country}!`);
            }
        },

        {
            title: 'Easy - getSentenceLength(sentence) function',
            description: [
                '<div>Create a function that will return a string indicating the length of the provided sentence</div>',
                {
                    type: 'list',
                    data: {
                        name: 'getSentenceLength',
                        arguments: {
                            type: 'list',
                            data: {
                                sentence: 'string'
                            }
                        },
                        return: 'a string'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `getSentenceLength('Hello, World!'); // could return "Hello, World! has 13 characters"`
                }
            ],
            searchPhrases: [
                'Get string length using Javascript'
            ],
            data: {
                type: 'function',
                options: {
                    name: 'getSentenceLength',
                    arguments: [
                        {
                            name: 'sentence',
                            defaultValue: 'Lorem ipsum dolor sit amet',
                        }
                    ],
                    return: 'string'
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const sentence = args[0].value;
                const expectedString = `${sentence} has ${sentence.length} characters`;

                expect(result.value).to.equal(expectedString);
            }
        },

        {
            title: 'Easy - add(x, y) function',
            description: [
                '<div>Create a function that will return the sum of x and y</div>',
                {
                    type: 'list',
                    data: {
                        name: 'add',
                        arguments: {
                            type: 'list',
                            data: {
                                x: 'number',
                                y: 'number'
                            }
                        },
                        return: 'a number'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `add(8, 3); // will return 11`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'add',
                    arguments: [
                        {
                            name: 'x',
                            defaultValue: 8,
                        },
                        {
                            name: 'y',
                            defaultValue: 3,
                        }
                    ],
                    return: 'number'
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const x = +args[0].value;
                const y = +args[1].value;

                expect(+result.value).to.equal(x + y);
            }
        },

        {
            title: 'Easy - minus(x, y) function',
            description: [
                '<div>Create a function that will return the result of subtracting y from x</div>',
                {
                    type: 'list',
                    data: {
                        name: 'minus',
                        arguments: {
                            type: 'list',
                            data: {
                                x: 'number',
                                y: 'number'
                            }
                        },
                        return: 'a number'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `minus(10, 5); // will return 5`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'minus',
                    arguments: [
                        {
                            name: 'x',
                            defaultValue: 10,
                        },
                        {
                            name: 'y',
                            defaultValue: 5,
                        }
                    ],
                    return: 'number'
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const x = +args[0].value;
                const y = +args[1].value;

                expect(+result.value).to.equal(x - y);
            }
        },

        {
            title: 'Easy - multiply(x, y) function',
            description: [
                '<div>Create a function that will return the product of x and y</div>',
                {
                    type: 'list',
                    data: {
                        name: 'multiply',
                        arguments: {
                            type: 'list',
                            data: {
                                x: 'number',
                                y: 'number'
                            }
                        },
                        return: 'a number'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `multiply(6, 4); // will return 24`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'multiply',
                    arguments: [
                        {
                            name: 'x',
                            defaultValue: 6,
                        },
                        {
                            name: 'y',
                            defaultValue: 4,
                        }
                    ],
                    return: 'number'
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const x = +args[0].value;
                const y = +args[1].value;

                expect(+result.value).to.equal(x * y);
            }
        },

        {
            title: 'Easy - divide(x, y) function',
            description: [
                '<div>Create a function that will return the result of dividing x by y</div>',
                {
                    type: 'list',
                    data: {
                        name: 'divide',
                        arguments: {
                            type: 'list',
                            data: {
                                x: 'number',
                                y: 'number'
                            }
                        },
                        return: 'a number'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `divide(20, 4); // will return 5`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'divide',
                    arguments: [
                        {
                            name: 'x',
                            defaultValue: 20,
                        },
                        {
                            name: 'y',
                            defaultValue: 4,
                        }
                    ],
                    return: 'number'
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const x = +args[0].value;
                const y = +args[1].value;

                expect(+result.value).to.equal(x / y);
            }
        },
        {
            title: 'Easy - getAverage(x, y) function',
            description: [
                '<div>Create a function that will return the average of two numbers</div>',
                '<div class="alert alert-danger">You are required to reuse function <code>add</code> above when doing this exercise</div>',
                {
                    type: 'list',
                    data: {
                        name: 'getAverage',
                        arguments: {
                            type: 'list',
                            data: {
                                x: 'number',
                                y: 'number'
                            }
                        },
                        return: 'a number'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `getAverage(5, 10); // could return 7.5`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'getAverage',
                    arguments: [
                        {
                            name: 'x',
                            defaultValue: 10,
                        },
                        {
                            name: 'y',
                            defaultValue: 4,
                        }
                    ],
                    return: 'number'
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const x = +args[0].value;
                const y = +args[1].value;

                const getAverageAsString = window.getAverage.toString();
                const isAddCalled = /add\s*\(\s*[^\s,]+\s*,\s*[^\s,]+\s*\)/.test(getAverageAsString);

                expect(isAddCalled, 'Have you reuse <code>add</code> function inside <code>getAverage</code> yet?').to.equal(true);

                const expectedAverage = (x + y) / 2;

                expect(+result.value).to.equal(expectedAverage);
            }
        },

        {
            title: 'Easy - addThenDivide(x, y, z) function',
            description: [
                '<div>Create a function that will return the result of adding x and y, then dividing the sum by z</div>',
                '<div class="alert alert-danger">You are required to reuse functions <code>add</code> and <code>divide</code> above when doing this exercise</div>',
                {
                    type: 'list',
                    data: {
                        name: 'addThenDivide',
                        arguments: {
                            type: 'list',
                            data: {
                                x: 'number',
                                y: 'number',
                                z: 'number'
                            }
                        },
                        return: 'a number'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `addThenDivide(4, 10, 2); // could return 7`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'addThenDivide',
                    arguments: [
                        {
                            name: 'x',
                            defaultValue: 4,
                        },
                        {
                            name: 'y',
                            defaultValue: 10,
                        },
                        {
                            name: 'z',
                            defaultValue: 2,
                        }
                    ],
                    return: 'number'
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const x = +args[0].value;
                const y = +args[1].value;
                const z = +args[2].value;
                const expectedValue = (x + y) / z;

                const addThenDivide = window.addThenDivide.toString();
                const isAddCalled = /add\s*\(\s*[^\s,]+\s*,\s*[^\s,]+\s*\)/.test(addThenDivide);

                expect(isAddCalled, 'Have you reuse <code>add</code> function inside <code>addThenDivide</code> yet?').to.equal(true);

                const isDivideCalled = /devide\s*\(\s*[^\s,]+\s*,\s*[^\s,]+\s*\)/.test(addThenDivide);

                expect(isDivideCalled, 'Have you reuse <code>divide</code> function inside <code>addThenDivide</code> yet?').to.equal(true);

                expect(result.value).to.equal(expectedValue);
            }
        },

        {
            title: 'Easy - getGrade(score) function',
            description: [
                '<div>Create function that takes a number and a grade <code>A, B, C, D, F</code></div>',
                {
                    type: 'list',
                    data: {
                        name: 'getGrade',
                        arguments: {
                            type: 'list',
                            data: {
                                score: 'number',
                            }
                        },
                        return: {
                            type: 'list',
                            data: {
                                A: '<code>score</code> is larger or equal 90',
                                B: '<code>score</code> is larger or equal 80 but less than 90',
                                C: '<code>score</code> is larger or equal 70 but less than 80',
                                D: '<code>score</code> is larger or equal 60 but less than 70',
                                E: '<code>score</code> is larger or equal 50 but less than 60',
                                F: '<code>score</code> is less than 50',
                            }
                        }
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: 'getGrade(75); // will return "C"'
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'getGrade',
                    arguments: [
                        {
                            name: 'score',
                            defaultValue: 75,
                        }
                    ],
                    return: 'string'
                }
            },
            test: ($answer, { data }) => {
                const { args } = data.fn;
                const score = parseInt(args[0].value, 10);
                const _getGrade = () => {
                    if (score >= 90) {
                        return 'A'
                    } else if (score >= 80 && score < 90) {
                        return 'B'
                    } else if (score >= 70 && score < 80) {
                        return 'C'
                    } else if (score >= 60 && score < 70) {
                        return 'D'
                    } else if (score >= 50 && score < 60) {
                        return 'E'
                    } else {
                        return 'F'
                    }
                };

                expect(_getGrade()).to.equal(data.fn.result.value);
            }
        },
        {
            title: 'Easy - printNameRepeatedly(name) function',
            description: [
                '<div>Create a function that takes a name and uses a loop to print <code>I am {name}</code> <b>5</b> times using <code>console.log</code></div>',
                {
                    type: 'list',
                    data: {
                        name: 'printNameRepeatedly',
                        arguments: {
                            type: 'list',
                            data: {
                                name: 'string'
                            }
                        }
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `printNameRepeatedly('Frankenstein'); // will print\n// I am Frankenstein\n// I am Frankenstein\n// I am Frankenstein\n// I am Frankenstein\n// I am Frankenstein`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'printNameRepeatedly',
                    arguments: [
                        {
                            name: 'name',
                            defaultValue: 'Frankenstein',
                        }
                    ],
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const name = args[0].value;
                const $results = result.$el.find('div');

                expect($results.length, `The number of times you print need to be <code>5</code>`).to.equal(5);

                $results.each(function () {
                    expect($(this).text().trim()).to.equal()
                });
            }
        },
        {
            title: 'Easy - printNumbers(numbers) function',
            description: [
                '<div>Create a function that takes an array of numbers and prints each number line by line using console.log</div>',
                {
                    type: 'list',
                    data: {
                        name: 'printNumber',
                        arguments: {
                            type: 'list',
                            data: {
                                numbers: 'array'
                            }
                        },
                        return: 'undefined'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `printNumbers([1, 2, 3]); // will print\n// 1\n// 2\n// 3`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'printNumbers',
                    arguments: [
                        {
                            name: 'numbers',
                            rows: 6,
                            defaultValue: [1, 6, 10, 200]
                        }
                    ]
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const numbers = JSON.parse(args[0].value);

                expect($.isArray(numbers), 'numbers is not a valid array').to.equal(true);

                const $results = result.$el.find('div');

                expect($results.length, `The number of number you print need to be <code>${numbers.length}</code>`).to.equal(numbers.length);

                numbers.forEach((number, idx) => {
                    expect(+$results.eq(idx).text().trim()).to.equal(number);
                });
            }
        },
        {
            title: 'Easy - printFavouriteGames(games) function',
            description: [
                '<div>Create a function that takes an array of games and prints <code>{number}. I love {game}!</code> for each game line by line using <code>console.log</code></div>',
                {
                    type: 'list',
                    data: {
                        name: 'printFavouriteGames',
                        arguments: {
                            type: 'list',
                            data: {
                                games: 'array'
                            }
                        },
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `printFavouriteGames(['Roblox', 'Zelda', 'Alone in the dark']); // could print\n//1. I love Roblox!\n//2. I love Zelda!\n//3. I love Alone in the dark!`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'printFavouriteGames',
                    arguments: [
                        {
                            name: 'games',
                            rows: 6,
                            defaultValue: ['Roblox', 'Zelda', 'Alone in the dark'],
                        }
                    ]
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const games = JSON.parse(args[0].value);

                expect($.isArray(games), 'games is not a valid array').to.equal(true);

                const $results = result.$el.find('div');

                expect($results.length, `The number of game you print need to be <code>${games.length}</code>`).to.equal(games.length);

                games.forEach((game, idx) => {
                    expect($results.eq(idx).text().trim()).to.equal(`${idx + 1}. I love ${game}!`);
                });
            }
        },
        {
            title: 'Medium - getSongNamesLength(songs) function',
            description: [
                '<div>Create a function that takes an array of <code>songs</code> and prints each <code>song</code> along with its length using <code>console.log</code></div>',
                '<div class="alert alert-danger">You are required to reuse function <code>getSentenceLength</code> above when doing this exercise</div>',
                {
                    type: 'list',
                    data: {
                        name: 'getSongNamesLength',
                        arguments: {
                            type: 'list',
                            data: {
                                songs: 'array'
                            }
                        }
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `getSongNamesLength(['Im sexy and I know it', 'I want it that way']); // will print\n// Im sexy and I know it has 21 characters\n// I want it that way has 18 characters`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'getSongNamesLength',
                    arguments: [
                        {
                            name: 'songs',
                            rows: 7,
                            defaultValue: [
                                'Im sexy and I know it',
                                'I want it that way'
                            ],
                        }
                    ]
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const arr = JSON.parse(args[0].value);

                expect($.isArray(arr), '<code>songs</code> is not a valid array').to.equal(true);

                const getSongNamesLengthString = window.getSongNamesLength.toString();
                const isFnCalled = /getSentenceLength\s*\(\s*[^\s,]+\s*\)/.test(getSongNamesLengthString);

                expect(isFnCalled, 'Have you reuse <code>getSentenceLength</code> function inside <code>getSongNamesLength</code> yet?').to.equal(true);

                const $results = result.$el.find('div');

                expect($results.length, `The number of song names you print need to be <code>${arr.length}</code>`).to.equal(arr.length);

                arr.forEach((song, idx) => {
                    expect($results.eq(idx).text().trim()).to.equal(`${song} has ${song.length} characters`);
                });
            }
        },
        {
            title: 'Medium - getNumbersLargerThanTen(numbers) function',
            description: [
                '<div>Create a function that takes an array of numbers and returns a new array containing numbers larger than 10</div>',
                {
                    type: 'list',
                    data: {
                        name: 'getNumbersLargerThanTen',
                        arguments: {
                            type: 'list',
                            data: {
                                numbers: 'array'
                            }
                        },
                        return: 'array'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `getNumbersLargerThanTen([5, 12, 8, 15, 3]); // returns [12, 15]`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'getNumbersLargerThanTen',
                    arguments: [
                        {
                            name: 'numbers',
                            defaultValue: [5, 12, 8, 15, 3],
                        }
                    ],
                    return: 'array'
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const numbers = JSON.parse(args[0].value);

                // Check if the returned array contains numbers larger than 10
                const expectedResult = numbers.filter(num => num > 10);
                expect(result.value).to.eql(expectedResult);
            }
        },
        {
            title: 'Medium - multiplicationTable(number) function',
            description: [
                '<div>Create function that takes a number and <code>console.log</code> the multiplication table of that number</div>',
                {
                    type: 'list',
                    data: {
                        name: 'multiplicationTable',
                        arguments: {
                            type: 'list',
                            data: {
                                number: 'number',
                            }
                        }
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `multiplicationTable(3); // will print
// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9
// 3 * 4 = 12
// 3 * 5 = 15
// 3 * 6 = 18
// 3 * 7 = 21
// 3 * 8 = 24
// 3 * 9 = 27
`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'multiplicationTable',
                    arguments: [
                        {
                            name: 'number',
                            defaultValue: 3,
                        }
                    ],
                }
            },
            test: ($answer, {data}) => {
                const {args, result} = data.fn;
                const number = parseInt(args[0].value, 10);
                const $results = result.$el.find('div');

                expect($results.length, `Your multiple table needs to print from <code>${number} * 1</code> to <code>${number} * 9</code>`).to.equal(9);

                $results.each(function (index) {
                    const value = $(this).html().trim();
                    const idx = index + 1;

                    expect(value).to.equal(`${number} * ${idx} = ${number * idx}`);
                });
            }
        },

        {
            title: 'Medium - getArraySum(numbers) function',
            description: [
                '<div>Create a function to calculates the total of all numbers in an array',
                {
                    type: 'list',
                    data: {
                        name: 'getArraySum',
                        arguments: {
                            type: 'list',
                            data: {
                                numbers: 'array'
                            }
                        },
                        returns: 'The total of all numbers in the array'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `getArraySum([1, 3, 5]); // returns 9`
                }
            ],
            instruction: [
                '<div>To loop through an array, you can use <code>for...</code> loop</div>',
                {
                    type: 'code',
                    content: `for (let i = 0; i < numbers.length; i++) { ... }`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'getArraySum',
                    arguments: [
                        {
                            name: 'numbers',
                            rows: 5,
                            defaultValue: [1, 3, 5],
                        }
                    ]
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const numbers = JSON.parse(args[0].value);

                expect($.isArray(numbers), 'numbers is not a valid array').to.equal(true);

                const expectedResult = parseInt(result.value, 10);
                const actualResult = numbers.reduce((total, currentValue) => total + currentValue, 0);

                expect(actualResult, 'Your return value is not correct').to.equal(expectedResult);
            }
        },

        {
            title: 'Medium - getArrayAverage(numbers) function',
            description: [
                '<div>Create a function to calculates the average of all numbers in an array',
                '<div class="alert alert-danger">You are required to reuse function <code>getArraySum</code> above when doing this exercise</div>',
                {
                    type: 'list',
                    data: {
                        name: 'getArrayAverage',
                        arguments: {
                            type: 'list',
                            data: {
                                numbers: 'array'
                            }
                        },
                        returns: 'The average of all numbers in the array'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `getArrayAverage([1, 3, 5]); // returns 3 and this is how we calculate (1 + 3 + 5) / 3`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'getArrayAverage',
                    arguments: [
                        {
                            name: 'numbers',
                            rows: 5,
                            defaultValue: [1, 3, 5],
                        }
                    ]
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const numbers = JSON.parse(args[0].value);

                expect($.isArray(numbers), 'numbers is not a valid array').to.equal(true);

                const getArrayAverageString = window.getArrayAverage.toString();
                const isFnCalled = /getArraySum\s*\(\s*[^\s,]+\s*,\s*[^\s,]+\s*\)/.test(getArrayAverageString);

                expect(isFnCalled, 'Have you reuse <code>getArraySum</code> function inside <code>getArrayAverage</code> yet?').to.equal(true);

                const expectedResult = parseInt(result.value, 10);
                const total = numbers.reduce((total, currentValue) => total + currentValue, 0);

                expect(total / numbers.length, 'Your return value is not correct').to.equal(expectedResult);
            }
        }
    ]
};
