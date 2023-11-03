window.exercises = {
    items: [
        {
            title: 'introduceMySelf(name, age) function',
            description: [
                '<div>Create a function that will return <code>I am {name}! I am {age} years old!</code></div>',
                {
                    type: 'list',
                    data: {
                        name: 'introduceMySelf',
                        arguments: {
                            type: 'list',
                            data: {
                                name: 'string',
                                age: 'number'
                            }
                        },
                        return: 'a string <code>I am {name}! I am {age} years old!</code>'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `introduceMySelf('Alice', 10); // will return "I am Alice! I am 10 years old!"`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'introduceMySelf',
                    arguments: [
                        {
                            name: 'name',
                            defaultValue: 'Alice',
                        },
                        {
                            name: 'age',
                            defaultValue: 10,
                        }
                    ],
                    return: 'string'
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const name = args[0].value;
                const age = args[1].value;

                expect(result.value).to.equal(`I am ${name}! I am ${age} years old!`);
            }
        },
        {
            title: 'multiply(x, y) function',
            description: [
                '<div>Create function to that multiply 2 numbers</div>',
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
                        return: 'a number that is the result of <code>x * y</code>'
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: 'multiply(10, 20); // will return 200'
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'multiply',
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

                expect(x * y).to.equal(expectedResult);
            }
        },
        {
            title: 'checkExamResult(score) function',
            description: [
                '<div>Create a function to check if a student passed or failed an exam based on their score.</div>',
                {
                    type: 'list',
                    data: {
                        name: 'checkExamResult',
                        arguments: {
                            type: 'list',
                            data: {
                                score: 'number'
                            }
                        },
                        return: {
                            type: 'list',
                            data: [
                                '<code>Pass</code>: if score is more than or equal 50',
                                '<code>Fail</code>: if score is less than 50'
                            ]
                        }
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: 'checkExamResult(65); // will return "Pass"'
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'checkExamResult',
                    arguments: [
                        {
                            name: 'score',
                            defaultValue: 65,
                        }
                    ],
                    return: 'string'
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const score = parseInt(args[0].value, 10);

                if (score >= 50) {
                    expect(result.value).to.equal('Pass');
                } else {
                    expect(result.value).to.equal('Fail');
                }
            }
        },

        {
            title: 'printNumbers(number) function',
            description: [
                '<div>Create a function to prints numbers from 1 to a given number.</div>',
                {
                    type: 'list',
                    data: {
                        name: 'printNumbers',
                        arguments: {
                            type: 'list',
                            data: {
                                score: 'number'
                            }
                        },
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `printNumbers(5);
// will print
// 1
// 2
// 3
// 4
// 5`
                }
            ],
            instruction: [
                '<div>Use <code>for...</code> loop</div> to do this exercise',
            ],
            data: {
                type: 'function',
                options: {
                    name: 'printNumbers',
                    arguments: [
                        {
                            name: 'number',
                            defaultValue: 5,
                        }
                    ]
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const number = parseInt(args[0].value, 10);
                const $results = result.$el.find('div');

                expect($results.length, `Your numbers need to printed from <code>1</code> to <code>${number}</code>`).to.equal(number);

                $results.each(function (index) {
                    const value = $(this).text().trim();

                    expect(value).to.equal((index + 1).toString());
                });
            }
        },

        {
            title: 'printNames(names) function',
            description: [
                '<div>Create a function to prints all values in of the array <code>names</code>.</div>',
                {
                    type: 'list',
                    data: {
                        name: 'printNames',
                        arguments: {
                            type: 'list',
                            data: {
                                names: 'array'
                            }
                        },
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `printNames(['Henry', 'Naomi', 'Sarah', 'Lucas', 'Raymond']);
// will print
// Henry
// Naomi
// Sarah
// Lucas
// Raymond`
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
                    name: 'printNames',
                    arguments: [
                        {
                            name: 'names',
                            rows: 7,
                            defaultValue: ['Henry', 'Naomi', 'Sarah', 'Lucas', 'Raymond'],
                        }
                    ]
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const names = JSON.parse(args[0].value);

                expect($.isArray(names), 'names is not a valid array').to.equal(true);

                const $results = result.$el.find('div');

                expect($results.length, `The number of name you print need to be <code>${names.length}</code>`).to.equal(names.length);

                names.forEach((name, idx) => {
                    expect($results.eq(idx).text().trim()).to.equal(name);
                });
            }
        },
        {
            title: 'findAnimalIndex(animals, animalName) function',
            description: [
                '<div>Create a function that receive an array <code>animals</code> and a string <code>animalName</code></div>',
                '<div>This function will search and return the index of the <code>animalName</code> inside the <code>animals</code> array if found. If not, return <code>Not found</code></div>',
                {
                    type: 'list',
                    data: {
                        name: 'findAnimalIndex',
                        arguments: {
                            type: 'list',
                            data: {
                                animals: 'array',
                                animalName: 'array'
                            }
                        },
                        returns: {
                            type: 'list',
                            data: [
                                'The <code>index</code> of the <code>animalName</code> in the array <code>animals</code>',
                                '<code>Not found</code> if the <code>animalName</code> does not exist in the array <code>animals</code>',
                            ]
                        }
                    }
                },
                {
                    type: 'code',
                    title: 'Example code',
                    content: `findAnimalIndex(['Elephant', 'Lion', 'Eagle'], 'Lion'); // returns 1`
                }
            ],
            instruction: [
                '<div>To loop through an array, you can use <code>for...</code> loop</div>',
                {
                    type: 'code',
                    content: `for (let i = 0; i < animals.length; i++) { ... }`
                }
            ],
            data: {
                type: 'function',
                options: {
                    name: 'findAnimalIndex',
                    arguments: [
                        {
                            name: 'animals',
                            rows: 5,
                            defaultValue: ['Elephant', 'Lion', 'Eagle'],
                        },
                        {
                            name: 'animalName',
                            defaultValue: 'Lion',
                        }
                    ],
                    return: 'number | string'
                }
            },
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const animals = JSON.parse(args[0].value);

                expect($.isArray(animals), 'animals is not a valid array').to.equal(true);

                const animalName = args[1].value;
                const idx = animals.indexOf(animalName);

                if (idx >= 0) {
                    expect(parseInt(result.value, 10)).to.equal(idx);
                } else {
                    expect(result.value).to.equal('Not found');
                }
            }
        },

        {
            title: 'sum(numbers) function',
            description: [
                '<div>Create a function to calculates the sum of all numbers in an array',
                {
                    type: 'list',
                    data: {
                        name: 'sum',
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
                    content: `sum([1, 3, 5]); // returns 9`
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
                    name: 'sum',
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
            title: 'getArrayAverage(numbers) function',
            description: [
                '<div>Create a function to calculates the average of all numbers in an array',
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
            instruction: [
                'You can get the total number of items in array by using <code>.length</code>. For example: <code>numbers.length</code>',
                'Bonus point if you can re-use <code>sum</code> function created above to do this exercise'
            ],
            test: ($answer, { data }) => {
                const { args, result } = data.fn;
                const numbers = JSON.parse(args[0].value);

                expect($.isArray(numbers), 'numbers is not a valid array').to.equal(true);

                const expectedResult = parseInt(result.value, 10);
                const total = numbers.reduce((total, currentValue) => total + currentValue, 0);

                expect(total / numbers.length, 'Your return value is not correct').to.equal(expectedResult);
            }
        },
    ]
};
