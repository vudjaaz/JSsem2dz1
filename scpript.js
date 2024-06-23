// const blockEl = document.querySelector('#block');
// console.log(blockEl);
// const pEl = document.querySelector('p.www');
// console.log(pEl);
// // const pEl2 = document.querySelectorAll('.www');
// // console.log(pEl2[1]);
// const pEl2 = document.querySelectorAll('.www')[1];
// console.log(pEl2);




// // Дан тег <a class="link" href="#">link text html</a>
// // Вам необходимо поменять текст внутри ссылки на “link text js”
// // Заменить href, на значение https://developer.mozilla.org/ru/
// // Дан тег <img class="photo" src="" alt="">
// // Вам необходимо с помощью js поменять значение src на любое изображение из интернета



// const linkEl = document.querySelector('.link');
// linkEl.textContent = 'link text js';
// linkEl.href = 'https://developer.mozilla.org/ru/';
// console.log(linkEl);

// const imgEl = document.querySelector('.photo');
// imgEl.src = 'https://get.wallhere.com/photo/2500x1669-px-aurorae-landscape-nature-night-Norway-sky-stars-stones-water-1342633.jpg';
// console.log(imgEl);



// // Дан тег <div class="content"></div>
// // Создайте новый элемент p
// // Добавьте в него текст “Новый текстовый элемент”
// // Добавьте созданный элемент внутри <div class="content"></div>
// // Удалите добавленный узел 



// const divEl = document.querySelector('.content');
// const parEl = document.createElement('p');
// parEl.textContent = 'Новый текстовый элемент';
// divEl.appendChild(parEl);
// parEl.remove();


// // Создать элемент button, добавить в блок <div class="content"></div>
// // При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку


// const newButtonEl = document.createElement('button');
// newButtonEl.textContent = 'Клик';
// divEl.appendChild(newButtonEl);

// let count = 0;
// newButtonEl.onclick = function () {
//     count++;
//     console.log(`Нажато ${count} раз`);
// }



// // Дан тег <div class="content"></div> 
// // Создайте с помощью javascript новый элемент button
// // Добавьте текст для кнопки “Отправить”
// // При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

// const newButtonEl2 = document.createElement('button');
// newButtonEl2.textContent = 'Отправить';
// divEl.appendChild(newButtonEl2);
// newButtonEl2.onclick = function () {
//     newButtonEl2.textContent = 'Текст отправлен';
// }



// ДЗ



// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.


const superLinkEl = document.querySelector('#super_link');
console.log(superLinkEl);


// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".


const cardLinkEl = document.querySelectorAll('.card-link');
cardLinkEl.forEach(element => {
    element.textContent = 'ссылка';
});
console.log(cardLinkEl);


// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.


const bodyEl = document.querySelector('.card-body');
const linkFromBodyEl = bodyEl.querySelectorAll('.card-link');
console.log(linkFromBodyEl);


// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data - number со значением 50 и вывести его в консоль.


const dataNumberEl = document.querySelectorAll('[data-number = "50"]');
// console.log(dataNumberEl);
dataNumberEl.forEach(element => {
    console.log(element);
});


// 5. Выведите содержимое тега title в консоль.


const titleEl = document.querySelector('.card-title').innerHTML;
console.log(titleEl);


// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.


const parentTitleEl = document.querySelector('.card-title');
const parentEl = parentTitleEl.parentNode;
console.log(parentEl);


// 7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".


const parEl = document.createElement('p');
parEl.textContent = 'Привет';
const cardEl = document.querySelector('.card');
cardEl.prepend(parEl);
console.log(cardEl);



// 8. Удалите тег h6 на странице.


const removeEl = document.querySelector('h6');
removeEl.remove();
console.log(cardEl);