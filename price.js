let btn = document.querySelector('#btn')
let price = document.querySelector('#price');

btn.addEventListener('click', () => {
    let count = 0
    if (document.getElementById('1.1').checked) {
        count+=75
    }else if (document.getElementById('1.2').checked) {
        count+=50
    }else if (document.getElementById('1.3').checked) {
        count+=35
    } else {
        alert('Тип покрытия двери не выбран!')
    }
    if (document.getElementById('2.1').checked) {
        count+=0
    }else if (document.getElementById('2.2').checked) {
        count+=50
    } else {
        alert('Тип петель не выбран!')
    }
    if (document.getElementById('3.2').checked || document.getElementById('3.3').checked) {
        count+=20
    }else if (document.getElementById('3.1').checked) {
        count+=0
    } else {
        alert('Тип замка не выбран не выбран!')
    }
    if (document.getElementById('4.2').checked) {
        count+=25
    }else if (document.getElementById('4.3').checked) {
        count+=35
    }else if (document.getElementById('4.4').checked) {
        count+=65
    }else if (document.getElementById('4.1').checked) {
        count+=0
    } else {
        alert('Добор не выбран!')
    }
    count+=document.getElementById('5.1').value*15
    if (document.getElementById('6.1').checked) {
        count+=10
    }else if (document.getElementById('6.2').checked) {
        count+=0
    } else {
        alert('Тип крепежа не выбран!')
    }
    if (document.getElementById('7.3').checked) {
        count+=35
    }else if (document.getElementById('7.1').checked || document.getElementById('7.2').checked) {
        count+=0
    } else {
        alert('Тип крепления наличников не выбран!')
    }

    price.innerHTML = 'Итого: ' + count + ' рублей'
})