<template>
  <header class="header__mobile">
    <img class="icon-arrow" src="../../assets/images/arrow.png" alt="icon" />
    <input type="text" placeholder="Запрос" />
    <img class="icon-remove" src="../../assets/images/remove.png" alt="icon" />
    <button>Найти</button>
  </header>
</template>

<script>
export default {
  name: 'HeaderMobile',
};
</script>

<style scoped lang="scss">
.header__mobile {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon-arrow {
    cursor: pointer;
    width: 15px;
  }

  input {
    border: none;
    border-bottom: 1px solid #aaaa;
    width: 100%;
    margin-left: 1rem;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }

  .icon-remove {
    position: absolute;
    right: 120px;
    cursor: pointer;
  }

  button {
    border: none;
    padding: 12px 16px;
    background-color: #7397f5;
    border-radius: 5px;
    color: #ffff;
    margin-right: 10px;
    cursor: pointer;
    transition: background 0.5s ease-in;

    &:hover {
      background: linear-gradient(to top, #7397f5, #bfcff6);
    }
  }
}
</style>
