<template>
  <header class="header">
    <div class="header__logo">
      <img src="../../assets/images/logo.png" alt="icon" />
      <p>Логотип</p>
    </div>

    <div class="header__catalogue-btn">
      <button>Каталог</button>
    </div>

    <div class="header__search-input">
      <img src="../../assets/images/search.png" alt="icon" />
      <input type="text" placeholder="Поиск по 100 000 товаров" />
    </div>

    <div class="header__list-links">
      <ul>
        <li>Информация о компании</li>
        <li>Конаткты</li>
        <li>Полезные ссылки</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped lang="scss">
.header {
  display: grid;
  grid-template-columns: 5% 10% 5fr 3fr;
  align-items: center;
  place-items: center;
  justify-content: space-evenly;

  &__logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    p {
      font-family: 'Inter400', sans-serif;
    }
  }

  &__catalogue-btn {
    button {
      border: 1px solid #73aff4;
      padding: 8px 24px;
      background: none;
      border-radius: 8px;
      font-family: 'Inter500', sans-serif;
      cursor: pointer;
      &:hover {
        background-color: #73aff4;
        color: #ffff;
        transition: 0.3s ease-in;
      }
    }
  }

  &__search-input {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    input {
      border: 1px solid #73aff4;
      padding: 8px 24px;
      width: 100%;
      border-radius: 8px;
      font-family: 'Inter400', sans-serif;
      &:focus {
        border: 1px solid #73aff4;
      }
    }

    input::placeholder {
      color: #5a5a5a;
      padding-left: 10px;
      font-family: 'Inter400', sans-serif;
    }
    img {
      position: absolute;
      top: 9px;
      left: 8px;
      width: 15px;
    }
  }

  &__list-links {
    display: flex;
    justify-content: center;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
    li {
      list-style: none;
      color: #393939;
      font-family: 'Inter400', sans-serif;
      cursor: pointer;

      &:hover {
        color: #73aff4;
      }
    }
  }
}

@media screen and (max-width: 1440px) {
  .header {
    display: grid;
    grid-template-columns: 10% 15% 3fr 2fr;
    column-gap: 1rem;
    align-items: center;
    place-items: center;
    justify-content: space-evenly;
  }
}

@media screen and (max-width: 992px) {
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-items: center;
    place-items: center;
    justify-content: center;
  }
}

@media screen and (max-width: 650px) {
  .header {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    align-items: center;
    place-items: center;
    justify-content: center;
  }
}
</style>
