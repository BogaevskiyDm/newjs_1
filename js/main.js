
console.log('Sample JavaScript #1 HW #15');
/*
 * #1
 *
 * Создайте переменные со значеиями
 */

var myNum = 10,
    myStr = 'строка',
    myBool = true,
    myArr = [1, 2, 3, 4, 5],
    myObj = {
        first: 'First Name',
        last: 'Last Name'
    };
console.log(myNum);
console.log(myStr);
console.log(myBool);
console.log(myArr);
console.log(myObj);
/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
/* */
var decimal2 = myNum.toFixed(2);

/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */

var i = 50;
console.log(++i);
console.log(i++);
console.log(i);

console.log(--i);
console.log(i--);
console.log(i);
/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

var myTest = 20;
myTest += myNum;
console.log(myTest);

myTest -= myNum;
console.log(myTest);

myTest *= myNum;
console.log(myTest);

myTest /= myNum;
console.log(myTest);

myTest %= myNum;
console.log(myTest);


/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

var myPi = Math.PI;
console.log(myPi);

var myRound = Math.round(89.279);
console.log(myRound);

var myRandom = Math.random() * 10;
console.log(myRandom);

var myPow = Math.pow(3, 5);
console.log(myPow);
/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */



var strObj = { str: 'Мама мыла раму, рама мыла маму' };
strObj.length = strObj.str.length;
console.log(strObj);

/*
 * #7
 *
 * Проверьте наличие текста '' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

var isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);


/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */

var strReplace = strObj.str.replace('Мама мыла раму, рама мыла маму', 'Мама моет раму, Рама держит маму');
console.log(strReplace);

/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */
var myString = { str: 'We are real developers' };
console.log(myString.str.toUpperCase());
console.log(myString.str.toLowerCase());

console.log('Sample JavaScript #2 HW #16');

/*
 * #1
 *
 * Создайте объект userObj, описывающий человека.
 *
 * Следующие поля обязательны:
 * firstName – любое имя, строка
 * lastName – любая фамилия, строка
 * age – любой возраст, число
 */
var userObj = {
    firstName: 'Roma',
    lastName: 'Dankov',
    age: 21,
    fullName() {
        return `${userObj.firstName} ${userObj.lastName}`;
    }
};

/*
 * #2
 *
 * Для объекта из п.1 создайте метод fullName, который будет возвращать полное имя,
 * состоящее из firstName и lastName, склеенных в строку через пробел.
 *
 * Например:
 * userObj.firstName ← 'Имя
 * userObj.lastName ← Фамилия'
 * userObj.fullName() → 'Имя Фамилия'.
 */


console.log(userObj.fullName());

/*
 * #3
 *x
 * Дана функция defUpperStr('My text'), которая возвращает текст, преобразованный в верхний регистр, т.е:
 * defUpperStr('My text') → 'MY TEXT'.
 *
 * Если функция вызывается без параметра defUpperStr(), она не должна возвращать undefined,
 * в этом случае требуется вернуть строку текста по умолчанию в верхнем регистре, т.е:
 * defUpperStr() → 'DEFAULT TEXT'.
 *
 * При выполнении задачи не используйте оператор if, требуется решение с логическим оператором ||.
 */

/* eslint-disable capitalized-comments */
function defUpperStr(str) {
    return (str || 'Default text').toUpperCase();
}
console.log(defUpperStr('My text')); // MY TEXT

console.log(defUpperStr()); // DEFAULT TEXT

/*
 * #4
 *
 * Создайте функцию evenFn(n), которая принимает параметром число – количество итераций цикла,
 * т.е. for 0..n. Функция должна вернуть массив, состоящий только из четных значений, генерируемых в цикле.
 *
 * Причем:
 * 0 не должен попадать в результирующий массив
 * цикл должен работать до n включительно
 * разрешен только оператор for
 *
 * Например:
 * evenFn(10) → [2, 4, 6, 8, 10]
 * evenFn(15) → [2, 4, 6, 8, 10, 12, 14]
 * evenFn(20) → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 */
function evenFn(n) {
    var myArr = [];
    for (let i = 1; i <= n; i++) if (i % 2 === 0) myArr.push(i);
    return myArr;
}

console.log(evenFn(10)); // [2, 4, 6, 8, 10]
console.log(evenFn(15)); // [2, 4, 6, 8, 10, 12, 14]
console.log(evenFn(20)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

/*
 * #5
 *
 * Создайте функцию weekFn(n), которая принимает номер дня недели, а возвращает его название.
 * Если вводится строка, любое дробное число или число вне диапазона 1..7 – функция должна вернуть null.
 *
 * Например:
 * 1 → 'Понедельник'
 * 2 → 'Вторник'
 * ...
 * 7 → 'Воскресенье'
 *
 * В реализации функции обязательно должны быть использованы операторы switch / case / default.
 */

// console.log(weekFn(1)); // 'Понедельник'

// console.log(weekFn(3)); // 'Среда'

// console.log(weekFn(7)); // 'Воскресенье'

// console.log(weekFn(9)); // null

// console.log(weekFn(1.5)); // null

// null
function weekFn(n) {
    if (n == 1) return ('Понедельник');
    else if (n == 2) return ('Вторник');
    else if (n == 3) return ('Среда');
    else if (n == 4) return ('Четверг');
    else if (n == 5) return ('Пятница');
    else if (n == 6) return ('Суббота');
    else if (n == 7) return ('Воскресенье');
    else return (null);
}
console.log(weekFn(1));
console.log(weekFn(2));
console.log(weekFn(7));
console.log(weekFn(3));
console.log(weekFn(5));
console.log(weekFn(1.5));
console.log(weekFn('Jorik'));

function weekFn(n) {
    let str = '';
    switch (n) {
        case 1: str = 'Понедельник';
            break;
        case 2: str = 'Вторник';
            break;
        case 3: str = 'Среда';
            break;
        case 4: str = 'Четверг';
            break;
        case 5: str = 'Пятница';
            break;
        case 6: str = 'Суббота';
            break;
        case 7: str = 'Воскресенье';
            break;
        default: str = null;
            break;
    }
    return str;
}
console.log(weekFn(1));
console.log(weekFn(6));
console.log(weekFn(7));
console.log(weekFn(5));
console.log(weekFn(4));
console.log(weekFn(1.5));
console.log(weekFn('Jorik'));
/*
 * #6
 *
 * создайте функцию ageClassification(n), которая будет в качестве параметра принимать любые числа
 * и возвращать строку согласно следующим условиям, n:
 *           менее 0 – null
 *             0..24 – 'детский возраст'
 *           24+..44 – 'молодой возраст'
 *           44+..65 – 'средний возраст'
 *           65+..75 – 'пожилой возраст'
 *           75+..90 – 'старческий возраст'
 *          90+..122 – 'долгожители'
 *         более 122 – null
 *
 * При выполнении задания допускается использовать только тернарный оператор ?.
 * Использование операторов if, switch – запрещено.
 */

// console.log('-1 :', ageClassification(-1)); // -1 : null

// console.log('5 :', ageClassification(5)); // 5 : детский возраст

// console.log('34 :', ageClassification(34)); // 34 : молодой возраст

// console.log('50 :', ageClassification(50)); // 50 : средний возраст

// console.log('65.1 :', ageClassification(65.1)); // 65.1 : пожилой возраст

// console.log('80 :', ageClassification(80)); // 80 : старческий возраст

// console.log('110 :', ageClassification(110)); // 110 : долгожители

// console.log('130 :', ageClassification(130)); // 130 : null





function ageClassification(age) {
    return age > 0 ? age > 24 ? age > 44 ? age > 65 ? age > 75 ? age > 90 ? age > 122 ? null : 'долгожители' : 'старческий возраст' : 'пожилой возраст' : 'средний возраст' : 'молодой возраст' : 'детский возраст' : null;
}

console.log('    -1 :', ageClassification(-1)); // -1 : null
console.log('     1 :', ageClassification(1)); // 1 : детский возраст
console.log('    24 :', ageClassification(24)); // 24 : детский возраст
console.log(' 24.01 :', ageClassification(24.01)); // 24.01 : молодой возраст
console.log('    44 :', ageClassification(44)); // 44 : молодой возраст
console.log(' 44.01 :', ageClassification(44.01)); // 44.01 : средний возраст
console.log('    65 :', ageClassification(65)); // 65 : средний возраст
console.log('  65.1 :', ageClassification(65.1)); // 65.1 : пожилой возраст
console.log('    75 :', ageClassification(75)); // 75 : пожилой возраст
console.log(' 75.01 :', ageClassification(75.01)); // 75.01 : старческий возраст
console.log('    90 :', ageClassification(90)); // 90 : старческий возраст
console.log(' 90.01 :', ageClassification(90.01)); // 90.01 : долгожители
console.log('   122 :', ageClassification(122)); // 122 : долгожители
console.log('122.01 :', ageClassification(122.01)); // 122.01 : null
console.log('   150 :', ageClassification(150)); // 150 : null
/*
* #7
*
* Создайте функцию oddFn(n), которая принимает параметром число – количество итераций цикла.
* Функция должна вернуть массив, состоящий только из нечетных значений, генерируемых в цикле.
*
* Причем:
* 0 не должен попадать в результирующий массив
* цикл должен работать до n включительно
* разрешен только оператор while
*
* Например:
* oddFn(10) → [1, 3, 5, 7, 9]
* oddFn(15) → [1, 3, 5, 7, 9, 11, 13, 15]
* oddFn(20) → [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
*/
function oddFn(n) {
    let arr = [];
    let i = 0;
    while (i++ < n) if (i % 2 == 1) arr.push(i);
    return arr;
}



console.log(oddFn(10)); // [1, 3, 5, 7, 9]

console.log(oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]

console.log(oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
/*
 * #8
 *
 * Создайте основную функцию mainFunc(a, b, func), которая принимает три параметра:
 * a – число
 * b - число
 * func –  обрабатывающая параметры a и b, возвратная (callback) функция
 *
 * Реализуйте проверку: если третьим параметром передается не функция, нужно вернуть false.
 *
 */
function mainFunc(a, b, cb) {
    if (cb && typeof cb === 'function') return cb(a, b);
    return false;
}
/*
 * реализуйте следующие функции, которые будут осуществлять механизм callback в основной функции,
 * возвращая ей результат собственного вычисления...
 * для возведения в степень и получения произвольного значения можете воспользоваться методами объекта Math.
 */

function cbRandom(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
console.log(mainFunc(2, 5, cbRandom));
// cbRandom(a, b) – вычисляет и возвращает произвольное целое число в диапазоне между a и b включительно.

function cbPow(a, b) {
    return Math.pow(a, b);
}
console.log(mainFunc(2, 5, cbPow));
// cbPow(a, b) – вычисляет и возвращает результат возведения числа a в степень b.

function cbAdd(a, b) {
    return a + b;
}
console.log(mainFunc(2, 5, cbAdd))
// cbAdd(a, b) – вычисляет и возвращает сумму двух чисел a и b.

/*
 * mainFunc() должна возвращать результат работы переданной ей возвратной функции, например:
 * mainFunc(2, 5, cbRandom) → случайно от 2 до 5 включительно
 * mainFunc(10, 30, cbRandom) → случайно 10..30 включительно
 * mainFunc(2, 5, cbPow) → 32
 * mainFunc(2, 5, cbAdd) → 7
 * mainFunc(2, 5, 'not a func') → false
 */

// console.log(mainFunc(2, 5, cbRandom)); // целые числа в диапазоне 2..5

// console.log(mainFunc(2, 5, cbPow)); // 32

// console.log(mainFunc(2, 5, cbAdd)); // 7

// console.log(mainFunc(2, 5, 'not a func')); // false
console.log('Sample JavaScript #3 HW #17');

/*
 * #1
 *
 * Создайте функцию counter(), которая должна реализовать счетчик с помощью замыкания:
 * функция может принимать число в качестве аргумента counter(n)
 * если число передано в функцию – счет начинается с указанного числа
 * если нет – то счет продолжается
 */

let counter = (function () {
    let count = 0;
    return function (num) {
        if (num !== undefined) count = num;
        return count++;
    }
}());

counter();
counter();
counter();
counter(100);
counter();
counter(500);
counter();
counter();


// console.log(counter()); // 0

// console.log(counter()); // 1

// console.log(counter(100)); // 100

// console.log(counter()); // 101

// console.log(counter(500)); // 500

// console.log(counter()); // 501

// console.log(counter(0)); // 0

// console.log(counter()); // 1

/*
 * #2
 *
 * Создайте функцию counting, которая должна реализовать три метода с помощью замыкания:
 * первоначальное значение счетчика – 0
 * counting.value() – возвращает значение счетчика
 * counting.value(n) – устанавливает значение счетчика, возвращает новое значение
 * counting.increment() – увеличивает значение счетчика на 1
 * counting.decrement() – уменьшает значение счетчика на 1
 */
let counting = (function () {
    let count = 0;
    return {
        value(num) {
            if (num !== undefined) count = num;
            return count;
        },
        increment() {
            count++;
        },
        decrement() {
            count--;
        }
    };
}());

console.log(counting.value()); // 0

counting.increment();

counting.increment();

counting.increment();

console.log(counting.value()); // 3

counting.decrement();

counting.decrement();

console.log(counting.value()); // 1

console.log(counting.value(100)); // 100

counting.decrement();

console.log(counting.value()); // 99

console.log(counting.value(200)); // 200

counting.increment();

console.log(counting.value()); // 201

/*
 * #3
 *
 * Создайте функцию myPow(a, b, myPrint). Внутри реализуйте рекурсию для подсчета результата возведения числа a в степень b.
 * функция myPrint(a, b, res) – глобальная функция, которая должна генерировать из параметров a, b, res строку вида 'a^b=res' и возвращать ее
 * myPrint() должна быть передана в myPow() как параметр и вызвана внутри как callback-функция
 * функция myPow() в качестве возвращаемого значения принимает результат myPrint()
 * Например:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 */

let myPrint = (a, b, res) => `${a}^${b}=${res}`;
function myPow(a, b, cb) {
    function cbPow(c, d) {
        if (d !== 1) return c *= cbPow(c, d - 1);
        return c;
    };
    return cb(a, b, cbPow(a, b));
}

console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8




/*
 * #4
 *
 * Создайте несколько однотипных объектов для описания автомобиля. Соблюдайте следующие правила, используйте следующие поля:
 * имя объекта car – обязательно и необходимое для тестирования, дальнейшее именование объектов – на ваше усмотрение
 * car.engine – объем двигателя, числовое поле
 * car.model – модель авто, строка
 * car.name – бренд авто, строка
 * car.year – год выпуска, число
 * car.used – строка для описания состояния авто, допускаются значения 'used' и 'new'
*/
let fullInfo = function () { return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`; }


let yearNow = new Date().getFullYear();
let car = {
    engine: 1800,
    model: 'Ford',
    name: 'Mustang',
    year: 2012,
    info: fullInfo,
    get used() {
        return this.year !== yearNow ? 'used' : 'new';
    },
    set used(value) {
        if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
};
let carAndrey = {
    engine: 2200,
    model: 'Lada',
    name: 'Granta',
    year: 2021,
    info: fullInfo,
    get used() {
        return yearNow - this.year ? 'used' : 'new';
    },
    set used(value) {
        if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
};
let carUra = {
    engine: 2000,
    model: 'Reno',
    name: 'Laguna III',
    year: 2018,
    info: fullInfo,
    get used() {
        return yearNow - this.year ? 'used' : 'new';
    },
    set used(value) {
        if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
};
let carDima = {
    engine: 3000,
    model: 'Toyota',
    name: 'Tundra',
    year: 2010,
    info: fullInfo,
    get used() {
        return yearNow - this.year ? 'used' : 'new';
    },
    set used(value) {
        if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
};

console.log(car.info());
car.used = 'new';
console.log(car.info());
car.used = 'used';
console.log(car.info());
console.log(carAndrey.info());
car.used = 'used';
console.log(carAndrey.info())
/*
* #5
*
* Для созданных ранее объектов определите метод info(), используя ключевое слово this.
* данный метод должен формировать и возвращать строку с полной информацией об автомобиле, например:
* Chevrolet Lacetti, 2000cc, year 2010, used
* Infinite FX50 AWD, 5000cc, year 2019, new
* пробелы, запятые, символы cc и текст – имеют значение и проверяются при тестировании кода
*
* #6
*
* Для созданных ранее объектов измените свойство used, используя аксессоры (геттер и сеттер).
* - используйте текущий год либо непосредственно в своем коде, либо с помощью глобальной переменной, например, yearNow
* - если год выпуска автомобиля отличается от текущего года, геттер used должен выводить текст 'used'
* - если год выпуска автомобиля совпадает с текущим годом, геттер used должен выводить текст 'new'
* - если сеттеру used присвоено значение 'new', при этом года выпуска автомобиля отличается от текущего года,
* - необходимо изменить год выпуска автомобиля, установив в качестве значения текущий год
* - если сеттеру used присвоено значение 'used', ничего делать не нужно
*

// let yearNow = new Date().getFullYear(); // получить текущий год как число

// console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2010, used

// car.used = 'new';

// console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- год изменен

// car.used = 'used';

// console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- изменения не выполняются

// console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new

// car.used = 'used';

// console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new -- изменения не выполняются

/*
* #7
* Создайте функцию myMax(arr), которая в качестве параметра принимает
* произвольный числовой массив и возвращает максимальное число из переданного ей массива.
* В реализации функции должен быть применен метод Math.max() и apply().
*/

let arr = [12, 23, 100, 34, 56, 9, 233];
let myMax = (a) => Math.max.apply(Math, a)

console.log(myMax(arr)); // 233



/*
 * #8
 *
 * Создайте функцию myMul(a, b), которая будет умножать числа а и b, возвращая результат.
 */

/*
 * создайте функции myDouble(n), которая принимает один параметр и  удваивает его.
 * Использовать умножение или другие математические операции внутри функции – запрещено, только bind() и myMul().
 * Функция возвращает результат вычисления.
 */
let myMul = (a, b) => a * b;
let myDouble = myMul.bind(null, 2);
let myTriple = myMul.bind(null, 3);

console.log(myDouble(3)); // = myMul(2, 3) = 6
console.log(myDouble(4)); // = myMul(2, 4) = 8
console.log(myDouble(5)); // = myMul(2, 5) = 10

// аналогичным образом создайте функцию myTriple(n), которая утраивает принимающий параметр, возвращая результат.

console.log(myTriple(3)); // = myMul(3, 3) = 9
console.log(myTriple(4)); // = myMul(3, 4) = 12
console.log(myTriple(5)); // = myMul(3, 5) = 15

/*
 * #9
 *
 * Постройте функцию myUniq(arr), которая будет принимать произвольный массив
 * повторяющихся примитивных значений (например, имена пользователей или числа ).
 * Функция должна вернуть коллекцию уникальных значений.
 * В реализации разрешено использование set.
 * Любые условные операторы – запрещены и объекты.
 */

let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];
let myUniq = (arr) => {
    let set = new Set();
    arr.forEach((val) => set.add(val));
    return set;
}
console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));