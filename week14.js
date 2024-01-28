//Шаги выполнения:

//1. Создайте пустой массив с именем `grades` и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию `Math.random()`.
const grades=new Array(12).fill().map(() => Math.floor(Math.random() * 100) + 1);
let step1 = document.querySelector('#step1');
step1.innerHTML="Оценки 12 студентов: "+grades;
console.log(grades);
//2. Рассчитайте и выведите средний балл студентов, используя методы массивов.
const [firstNum, secondNum, thirdNum, fourthNum, fifthNum, sixthNum, seventhNum, eighthNum, ninthNum, tenthNum, eleventhNum, twelfthNum]=grades;
const average=(firstNum+secondNum+thirdNum+fourthNum+fifthNum+sixthNum+seventhNum+eighthNum+ninthNum+tenthNum+eleventhNum+twelfthNum)/grades.length;
console.log(average);
let step2 = document.querySelector('#step2');
step2.innerHTML="Средний балл студентов: "+average;
//3. Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
let max=Math.max(...grades);
console.log(max);
let step3 = document.querySelector('#step3');
step3.innerHTML="Максимальный балл: "+max;
//4. Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
let min=Math.min(...grades);
console.log(max);
let step4 = document.querySelector('#step4');
step4.innerHTML="Минимальный балл: "+min;
//5. Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
const positiveGrades=grades.filter(function(grade){
    return grade>=60;
});
console.log(positiveGrades.length);
const restGrades=grades.length-positiveGrades.length;
console.log(restGrades);
let step5 = document.querySelector('#step5');
step5.innerHTML="Количество студентов, получивших положительную оценку: "+positiveGrades.length+". "+"Оставшиеся оценки: "+restGrades;
//6. Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
const negativeGrades=grades.filter(function(grade2){
    return grade2<60;
});
console.log(negativeGrades.length);
let step6 = document.querySelector('#step6');
step6.innerHTML="Количество студентов, получивших отрицательную оценку: "+negativeGrades.length;
//7. Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
    //- Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
    //- Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
    //- Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
    //- Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
    //- Если оценка ниже 20, преобразуйте её в "E"

    const AGrades=grades.filter(function(gradeA){
        return gradeA>=80;
    });
    ;
    console.log(AGrades);
    const AGradesArray=AGrades.map(function(item){
        return item.innerHTML="A";
    });
    console.log(AGradesArray);
    const BGrades=grades.filter(function(gradeB){
        return gradeB >=60 && gradeB < 80 ;
    });
    ;
    console.log(BGrades);
    const BGradesArray=BGrades.map(function(item){
        return item.innerHTML="B";
    });
    console.log(BGradesArray);
    const CGrades=grades.filter(function(gradeC){
        return gradeC >=40 && gradeC < 59 ;
    });
    ;
    console.log(CGrades);
    const CGradesArray=CGrades.map(function(item){
        return item.innerHTML="C";
    });
    console.log(CGradesArray);
    const DGrades=grades.filter(function(gradeD){
        return gradeD >=20 && gradeD < 39 ;
    });
    ;
    console.log(DGrades);
    const DGradesArray=DGrades.map(function(item){
        return item.innerHTML="D";
    });
    console.log(DGradesArray);
    const EGrades=grades.filter(function(gradeE){
        return gradeE<20;
    });
    ;
    console.log(EGrades);
    const EGradesArray=EGrades.map(function(item){
        return item.innerHTML="E";
    });
    console.log(EGradesArray);

    let arr=[...AGradesArray, ...BGradesArray, ...CGradesArray, ...DGradesArray, ...EGradesArray];
    console.log(arr);
    let step7 = document.querySelector('#step7');
    step7.innerHTML="Оценки, преобразованные в буквенный формат: "+arr;