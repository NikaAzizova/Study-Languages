<div>Pet-проект на React JS, SCSS</div>

<div>
<div>1.Скопировать репозиторий локально</div>
<div>2.Запустить команду npm install</div>
<div>3.Запустить приложение npm run dev</div>
</div>
<hr>
<h2>Файловая структура</h2>
<br>
<h3>App</h3>

<p>В папке app хранится маршрутизация (страницы).Каждая страница расположена в отдельной папке в папке Pages. Папки со страницами называются со заглавной буквы в *Camelcase. Файл страницы называется именем папки с заглавной буквы. н/п: папка Row, файл Row.jsx </p>
<div>
<br>
<h3>Components</h3>

<p>В папке components хранятся компоненты. Каждый компонент расположен в отдельной папке. Папки с компонентами называются с заглавной буквы в CamelCase. Файл компонента называется также как и папка, файл со стилями имеет модульный подход module.scss.</p>
<br>
<h3>Store</h3>

<p>В папке Store импортируем configureStore из reduxjs/toolkit, и используем reducer</p>
<br><br>

<h3>Assets</h3>

<p>в папке assets содержатся изображения стрелок, лого, картинка иностранных языков</p>
<br>
<h3>Words</h3>

<p>В папке Words прописываем основной код Redux, чтобы получить данный из Api, отправить данные, редактировать и удалить. Для fetch запроса используется библиотека axiox</p>

<h3>Комментирование</h3>

<p>!!! Если вы собираетесь оставить комментарий, сначала подумайте, можно ли что-то изменить в коде, чтобы его не писать (например, назвать переменную или функцию так, чтобы всем было понятно ее назначение и не пришлось бы объяснять в комментарии).</p>
<div>
<div><li>комментарий пишем на русском с заглавной буквы</li></div>
<div><li>поясняющий комментарий должен быть емким (кратким и понятным)</li></div>
<div><li>комментарий в местах, где планируется доработка или рефакторинг должен начинаться с ‘TODO:’ (например // TODO: добавить отправку данных на бэкенд)</li></div>
</div>

<h3>Нейминг</h3>
<br>
<div>
<p>Наименование переменных, функций и компонентов должно четко описывать назначение (функционал) этого элемента.</p>
<div><li>функции выполняют только одну цель, которая отражена в их названии</li></div>
<div><li>сокращения допустимы в пределах читаемости (не стоит сокращать название до одних согласных или других нечитаемых сочетаний букв)</li></div>
<div><li>нежелательно использование цифр в названиях</li></div>
<div><li>недопустимы названия из одной буквы</li></div>
</div>
<br>
