# React-магазин

Благодаря навигационной панели, в нашем магазине можно посмотреть как рандомную подборку товаров, так и подборки по категориям.

Всего категорий 4: jewelery, electronics, men's clothing, women's clothing.

Для получения товаров происходит запрос на тестовый API: https://fakestoreapi.com/products/category/<название категории>.

Каждый товар оформлен в виде карточки, на которой указано название товара, его фото и цена.
Использована техника Redux+Redux-Thunk для хранения списка товаров в store.

Каждый товар можно посмотреть по отдельности, перейдя по кнопке "Подробнее" на страничку конкретного товара. Есть кнопка "Добавить в корзину", а в навигационной панели предусмотрен переход в корзину.
На страничке корзины отображается список добавленных в нее товаров.

