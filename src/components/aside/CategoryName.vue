<script>
export default {
  name: 'CategoryName',
};
</script>

<template>
  <div class="category-name">
    <ul>
      <li>
        <span>Название категории</span>
        <span>3</span>
      </li>
      <li>
        <span>Название категории</span>
        <span>3</span>
      </li>
      <li>
        <span>Название категории</span>
        <span>3</span>
      </li>
      <li>
        <span>Название категории</span>
        <span>3</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.category-name {
  width: 100%;

  li {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding: 10px;
    cursor: pointer;

    span:nth-child(2) {
      color: #aaaaaa;
    }
  }
  li:first-child {
    margin-bottom: 1rem;
    padding: 0px;
    cursor: inherit;

    span:first-child {
      margin-left: -3rem;
    }
    span:last-child {
      margin-right: 0.7rem;
    }
  }

  li:first-child:hover {
    background: none;
  }

  li:hover {
    background-color: #e2efff;
  }
}
</style>
