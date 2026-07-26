| № | Вираз | Моя гіпотеза | Реальний результат | Пояснення |
|---|---|---|---|---|
| 1 | typeof 42 | Number | number | Here everything simple - 42 is a number, type number |
| 2 | typeof 42n | BigInt | bigint | Here everything simple - 42n is a BigInt, type BigInt |
| 3 | typeof 'hello' | String | string | Here everything simple - 'hello' is a string, type string |
| 4 | typeof true | Boolean | boolean | Here everything simple - true is a boolean, type boolean |
| 5 | typeof undefined | Undefined | undefined | Here everything simple - undefined is an undefined, type undefined |
| 6 | typeof null | Object | object | Old bug of Javascript where type null is an object, still not corrected because of back compability |
| 7 | typeof NaN | Number | number | Not A Number it's a number type |
| 8 | typeof Infinity | Number | number | Infinity is also a number |
| 9 | typeof Symbol('id') | Symbol | symbol | Here everything simple - Symbol is a type symbol |
| 10 | typeof {} | Object | object | Here everything simple - {} is a literal inicialization of an Object, is a type object |
| 11 | typeof [] | Object | object | Array is also an Object in JavaScript |
| 12 | typeof [1, 2, 3] | Object | object | Array is also an Object in JavaScript |
| 13 | typeof function() {} | Function | function | for convenience typeof Function returns function |
| 14 | typeof (() => {}) | Function | function | Array function is also function |
| 15 | typeof (2 + 2) | Number | number | two plus two equal 4 what is numbmer as well |
| 16 | typeof ('2' + 2) | String | string | string plus number equal string, because of string concatenation rule |
| 17 | typeof ('foo' - 'bar') | Number | number | string minus string will be a NaN(Not a number), NaN - it's a number |
| 18 | let x; typeof x | Undefined | undefined | Because x only initicilized without assignment that is why it's undefined |
| 19 | typeof nonExistentVariable | Undefined | undefined | All non existent varibales in js has type of undefined |
| 20 | typeof typeof 42 | String | string | typeof 42 returning string 'number', typeof 'number' it's a string |


### Підозрілі справи
# історія з typeof null:
    Історичний баг, null вважається обьєктом хоча насправді є окремим типом, невиправлено досі тому, що багато проектів в інтернеті використовують цей баг і виправлення зламає програми.
    Щоб перевірити на null краще перевіряти в строгому равенстві === null
# історія з typeof []: 
    для перевірки краще використовувати Array.isArray([]).
# історія з typeof NaN:
    Для перевірки NaN використовують функцію isNaN() та Number.isNaN(), різниця між ними в тому, що Number.isNan() не робить приведення типів, тобто фактично повертає true тільки для Number.isNaN(NaN).
# історія з typeof nonExistentVariable
    Не існуючі зміні можна перевірити за допомогою typeof nonExistentVariable === 'undefined'