<script>
import Brand from './Brand.vue';
import CategoryName from './CategoryName.vue';
import Price from './Price.vue';
import Size from './Size.vue';

export default {
  name: 'Aside',
  components: {
    Brand,
    CategoryName,
    Price,
    Size,
  },
};
</script>

<template>
  <aside class="aside">
    <CategoryName />
    <Price />
    <Brand />
    <Size />
  </aside>
</template>

<style scoped>
.aside {
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0;
  padding: 0;
  font-family: 'PT400', sans-serif;
}
</style>
