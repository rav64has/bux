<template>
  <form class="reg" action="" method="post" enctype="multipart/form-data">
        <label>ФИО</label>
        <input type="text" name="full_name" placeholder="Введите свое полное имя">
        <label>Логин</label>
        <input type="text" name="login" placeholder="Введите свой логин">
        <label>Почта</label>
        <input type="email" name="email" placeholder="Введите адрес своей почты">
        <label>Изображение профиля</label>
        <input type="file" name="avatar">
        <label>Пароль</label>
        <input type="password" name="password" placeholder="Введите пароль">
        <label>Подтверждение пароля</label>
        <input type="password" name="password_confirm" placeholder="Подтвердите пароль">
        <button type="submit">Войти</button>
        <p>
            У вас уже есть аккаунт? - <a href="/login">авторизируйтесь</a>!
        </p>
  </form>
</template>
<style lang="css" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.reg {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Montserrat, sans-serif;
}

a {
    color: #7c9ab7;
    font-weight: bold;
    text-decoration: none;
}

p {
    margin: 10px 0;
}

form {
    display: flex;
    flex-direction: column;
    width: 400px;
}

input {
    margin: 10px 0;
    padding: 10px;
    border: unset;
    border-bottom: 2px solid #e3e3e3;
    outline: none;
}

button {
    padding: 10px;
    background: #e3e3e3;
    border: unset;
    cursor: pointer;
}

.msg {
    border: 2px solid #ffa908;
    border-radius: 3px;
    padding: 10px;
    text-align: center;
    font-weight: bold;
}

.logout {
    color: #b7625c;
}
</style>