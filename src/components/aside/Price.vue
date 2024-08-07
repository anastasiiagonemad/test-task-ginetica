<script>
export default {
  name: 'Price',
};
</script>

<template>
  <div class="price">
    <h4>Цена</h4>
    <div class="price__form">
      <input type="text" placeholder="от" />
      <span> - </span>
      <input type="text" placeholder="от" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.price {
  h4 {
    text-align: center;
  }
  &__form {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    input {
      padding: 10px 8px;
      border: 1px solid #d5d5d5;
      border-radius: 4px;
    }
    span {
      color: #d5d5d5;
    }
  }
}
</style>
