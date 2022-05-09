// Задание 3 - форма обратной связи
// В HTML есть разметка формы. Напиши скрипт который будет сохранять 
// значения полей в локальное хранилище когда пользователь что-то печатает.

// 1. Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище 
// объект с полями email и message, в которых сохраняй текущие значения полей формы. 
// Пусть ключом для хранилища будет строка "feedback-form-state".
// 2. При загрузке страницы проверяй состояние хранилища, и если там есть 
// сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть 
// пустыми.
// 3. При сабмите формы очищай хранилище и поля формы, а также выводи 
// объект с полями email, message и текущими их значениями в консоль.
// 4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. 
// Для этого добавь в проект и используй библиотеку lodash.throttle.

import throttle from "lodash.throttle";

const refs = {
    feedbackForm: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    textArea: document.querySelector(".feedback-form textarea"),
}

const state = {};

refs.feedbackForm.addEventListener('submit', (event) => {});

refs.textArea.addEventListener('input', handleSetStorageState);

refs.email.addEventListener('input', handleSetStorageState);

function handleSetStorageState(event) {
    state[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(state));
}
