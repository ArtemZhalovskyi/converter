"use strict"

//объявляем переменные
let input = document.getElementById('input');
let results = document.getElementById('results');
let inputType = document.getElementById('inputType');
let resultsType = document.getElementById('resultsType');
let inputTypeValue, resultsTypeValue;
//слушаем события
input.addEventListener('keyup', myResults)
inputType.addEventListener('change', myResults);
resultsType.addEventListener('change', myResults);

//запускаем функцию подсчёта
function myResults() {
//определяем значение переменных, данные с полей ввода
    inputTypeValue = inputType.value;
    resultsTypeValue = resultsType.value;
//конвертация
    if(inputTypeValue === 'Meter' && resultsTypeValue === 'Сentimeter'){
        results.value = Number(input.value) * 100;
    }
    else if(inputTypeValue === 'Meter' && resultsTypeValue === 'Inches'){
        results.value = Number(input.value) * 39.37;
    }
    else if(inputTypeValue === 'Meter' && resultsTypeValue === 'Feet'){
        results.value = Number(input.value) * 3.28;
    }
    else if(inputTypeValue === 'Сentimeter' && resultsTypeValue === 'Meter'){
        results.value = Number(input.value) / 100;
    }
    else if(inputTypeValue === 'Сentimeter' && resultsTypeValue === 'Inches'){
        results.value = Number(input.value) * 0.39;
    }
    else if(inputTypeValue === 'Сentimeter' && resultsTypeValue === 'Feet'){
        results.value = Number(input.value) * 0.032;
    }
    else if(inputTypeValue === 'Inches' && resultsTypeValue === 'Meter'){
        results.value = Number(input.value) * 0.025;
    }
    else if(inputTypeValue === 'Inches' && resultsTypeValue === 'Сentimeter'){
        results.value = Number(input.value) * 2.54;
    }
    else if(inputTypeValue === 'Inches' && resultsTypeValue === 'Feet'){
        results.value = Number(input.value) * 0.083;
    }
    else if(inputTypeValue === 'Feet' && resultsTypeValue === 'Meter'){
        results.value = Number(input.value) * 0.30;
    }
    else if(inputTypeValue === 'Feet' && resultsTypeValue === 'Сentimeter'){
        results.value = Number(input.value) * 30.48.toFixed(3);
    }
    else if(inputTypeValue === 'Feet' && resultsTypeValue === 'Inches'){
        results.value = Number(input.value) * 12;
    }
//добавляем равенство вводимых полей input = results
    if(inputTypeValue === 'Meter' && resultsTypeValue === 'Meter' || inputTypeValue === 'Сentimeter' && resultsTypeValue === 'Сentimeter' ||
        inputTypeValue === 'Inches' && resultsTypeValue === 'Inches' || inputTypeValue === 'Feet' && resultsTypeValue === 'Feet') {
        results.value = Number(input.value);
    }
}




