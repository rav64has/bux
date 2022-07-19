<template>
  <form class = "log" action=" " method="post">
        <label>Логин</label>
        <input type="text" name="login" placeholder="Введите свой логин">
        <label>Пароль</label>
        <input type="password" name="password" placeholder="Введите пароль">
        <button type="submit">Войти</button>
        <p>
            У вас нет аккаунта? - <a href="/reg">зарегистрируйтесь</a>!
        </p>
  </form>
</template>
<style scoped>
.log {
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


</style>