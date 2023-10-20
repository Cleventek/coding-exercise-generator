window.exercises = {
    instruction: [
        '<h2>Function exercises</h2>',
        '<div>How to create a <code>function</code></div>',
        {
            type: 'code',
            content: `
function yourFunctionName(argument1, argument2) {
    // Your function code
    return result;
}`
        },
        '<div>How to call your <code>function</code></div>',
        {
            type: 'code',
            content: `let test1 = yourFunctionName('value 1', 'value 2');`
        },
    ],
    items: [
        {
            title: 'sayHello(x, y) function',
            description: [
                '<div>Create a function that will return <code>Hello {name}!</code></div>',
                {
                    type: 'list',
                    data: {
                        name: 'add',
                        arguments: {
                            type: 'list',
                            data: {
                                name: 'string'
                            }
                        },
                        return: 'a string <code>Hello {name}!</code>'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `sayHello('Alice'); // will return "Hello Alice!"`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'sayHello',
                    arguments: [
                        {
                            name: 'name',
                            defaultValue: 'Alice',
                        }
                    ],
                    return: 'string'
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const name = args[0].value;

                expect(result.value).to.equal(`Hello ${name}`);
            }
        },
        {
            title: 'add(x, y) function',
            description: [
                '<div>Create function to add 2 numbers</div>',
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
                        return: 'a number that is the total of <code>x + y</code>'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: 'add(10, 20); // will return 30'
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'add',
                    arguments: [
                        {
                            name: 'x',
                            defaultValue: 10,
                        },
                        {
                            name: 'y',
                            defaultValue: 20,
                        }
                    ],
                    return: 'string'
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const x = parseInt(args[0].value, 10);
                const y = parseInt(args[1].value, 10);
                const expectedResult = parseInt(result.value, 10);

                expect(x + y).to.equal(expectedResult);
            }
        },
        {
            title: 'getAverage(x, y) function',
            description: [
                '<div>Create function that takes 2 numbers and returns their average (sum of the two numbers divided by 2)</div>',
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
                        return: 'sum of <code>x + y</code> divided by 2 '
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: 'getAverage(10, 20); // will return 15'
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
                            defaultValue: 20,
                        }
                    ],
                    return: 'string'
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const x = parseInt(args[0].value, 10);
                const y = parseInt(args[1].value, 10);
                const expectedResult = parseInt(result.value, 10);

                expect((x + y) / 2).to.equal(expectedResult);
            }
        },
        {
            title: 'isGreaterThanTen(num) function',
            description: [
                '<div>Create function that takes a number and returns <code>true</code> if the number is greater than <code>10</code> and <code>false</code> otherwise</div>',
                {
                    type: 'list',
                    data: {
                        name: 'isGreaterThanTen',
                        arguments: {
                            type: 'list',
                            data: {
                                num: 'number',
                                y: 'number'
                            }
                        },
                        return: '<code>true</code> if <code>num</code> is greater than <code>10</code> and <code>false</code> otherwise'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: 'isGreaterThanTen(1000); // will return true'
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'isGreaterThanTen',
                    arguments: [
                        {
                            name: 'num',
                            defaultValue: 1000,
                        }
                    ],
                    return: 'string'
                }
            },
            test: ($answer, { data }) => {
                const { args } = data.fn;
                const num = parseInt(args[0].value, 10);

                expect(num > 10).to.equal(true);
            }
        },
        {
            title: 'getGrade(score) function',
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
            title: 'getSmallerNumber(x, y) function',
            description: [
                '<div>Create function that takes 2 numbers and returns the smaller number</div>',
                {
                    type: 'list',
                    data: {
                        name: 'getSmallerNumber',
                        arguments: {
                            type: 'list',
                            data: {
                                x: 'number',
                                y: 'number',
                            }
                        },
                        return: 'the smaller number between <code>x</code> and <code>y</code>'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: 'getSmallerNumber(135, 993); // will return 135'
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'getSmallerNumber',
                    arguments: [
                        {
                            name: 'x',
                            defaultValue: 135,
                        },
                        {
                            name: 'y',
                            defaultValue: 993,
                        }
                    ],
                    return: 'number'
                }
            },
            test: ($answer, { data }) => {
                const { args } = data.fn;
                const x = parseInt(args[0].value, 10);
                const y = parseInt(args[1].value, 10);
                const _getSmallerNumber = () => {
                    if (x < y) {
                        return x;
                    }

                    return y;
                };

                expect(_getSmallerNumber()).to.equal(parseInt(data.fn.result.value, 10));
            }
        },
        {
            title: 'getLength(sentence) function',
            description: [
                '<div>Create function that takes a string and returns the length of that string</div>',
                {
                    type: 'list',
                    data: {
                        name: 'getLength',
                        arguments: {
                            type: 'list',
                            data: {
                                sentence: 'string',
                            }
                        },
                        return: 'the number of characters (length) including the whitespace of <code>sentence</code></code>'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `getLength('I love weekend!'); // will return 15`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'getLength',
                    arguments: [
                        {
                            name: 'sentence',
                            defaultValue: 'I love weekend!',
                        }
                    ],
                    return: 'string'
                }
            },
            test: ($answer, { data }) => {
                const { args } = data.fn;
                const sentence = args[0].value;

                expect(sentence.length).to.equal(parseInt(data.fn.result.value, 10));
            }
        }
    ]
};
