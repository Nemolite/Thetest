Пояснение к выполненному тестовому заданию.

- Функция prepare_xml() - предназначена для передачи данных из формы на сервер используя AJAX (строка 85 script.js расскомментировать). Работоспособность была проверена на OpenServer. (обрабочик controller.php)

(Выполнение кода можно посмотреть http://jstest.uxp.ru/)

- Функция prepare_websocket() - для передачи данных черз веб-сокет (строка 85 script) . Для проверки работоспособности нужно запустить серевер командой node server.js. (Перварительно необходимо установить ws -> https://github.com/websockets/ws)

- Функция out_data() - для вывода данных полученных через AJAX

- Функции valid_input(), valid_age() - для валидации полей формы.

- Функция transport_from_server() - для обновления баланса через веб-сокет.

- Функция ajax_transport_from_server() - для обновления баланса через AJAX

При выполнении задания были использованы следующие материалы, книги и статьи

1.Д.Фленаганю.JavaScript. Подробное руководство, 6-изд. https://www.ozon.ru/context/detail/id/19677670/

2.Современный учебник Javascript. https://learn.javascript.ru/

3.Mozilla Developer Network. https://developer.mozilla.org/en-US/

4.https://www.w3schools.com/default.asp




