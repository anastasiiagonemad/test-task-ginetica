<script setup>
import Header from './components/header/Header.vue';
import Aside from './components/aside/Aside.vue';
import Catalog from './components/catalog/Catalog.vue';
import HeaderMobile from './components/header/HeaderMobile.vue';
</script>

<template>
  <div id="App">
    <Header class="header" />
    <HeaderMobile class="header__mobile" />
    <Aside class="aside" />
    <Catalog class="catalog" />
  </div>
</template>

<style scoped lang="scss">
#App {
  display: grid;
  grid-template-areas:
    'header header header header'
    'aside catalog catalog catalog';
  gap: 2rem;
}
.header {
  grid-area: header;
}

.aside {
  grid-area: aside;
}

.catalog {
  grid-area: catalog;
}

.header__mobile {
  display: none;
}

@media screen and (max-width: 650px) {
  #App {
    grid-template-areas:
      'header'
      'catalog';
  }

  .aside {
    display: none;
  }
  .header {
    display: none;
  }
  .header__mobile {
    display: flex;
  }
}
</style>
