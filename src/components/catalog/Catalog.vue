<template>
  <div class="catalog__cards">
    <Card />
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Catalog',
  components: {
    Card,
  },
};
</script>

<style scoped lang="scss">
.catalog__cards {
  font-family: 'PT400', sans-serif;
  margin-bottom: 2rem;
}
</style>
