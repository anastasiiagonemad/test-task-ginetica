<script>
export default {
  name: 'Brand',
};
</script>

<template>
  <div class="brand">
    <div class="brand__title">
      <h4>Бренд</h4>
      <span>Очистить</span>
    </div>

    <div class="brand__search">
      <img src="../../assets/images/search.png" alt="icon" />
      <input type="text" placeholder="Поиск" />
    </div>

    <div class="brand__attributes">
      <div class="brand__attributes-item">
        <div><input type="checkbox" /> Атрибут</div>
        <div><span>3</span></div>
      </div>
      <div class="brand__attributes-item">
        <div><input type="checkbox" /> Атрибут</div>
        <div><span>3</span></div>
      </div>
      <div class="brand__attributes-item">
        <div><input type="checkbox" /> Атрибут</div>
        <div><span>3</span></div>
      </div>
      <div class="brand__attributes-item">
        <div><input type="checkbox" /> Атрибут</div>
        <div><span>3</span></div>
      </div>
      <div class="brand__attributes-item">
        <div><input type="checkbox" /> Атрибут</div>
        <div><span>3</span></div>
      </div>
      <div class="brand__attributes-item">
        <div><input type="checkbox" /> Атрибут</div>
        <div><span>3</span></div>
      </div>
      <div class="brand__attributes-item">
        <div><input type="checkbox" /> Атрибут</div>
        <div><span>3</span></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.brand {
  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      text-decoration: underline;
      color: #aaaaaa;
      cursor: pointer;
    }
  }

  &__search {
    position: relative;
    margin-bottom: 15px;

    img {
      position: absolute;
      width: 15px;
      top: 12px;
      left: 4px;
    }

    input {
      padding: 10px 12px;
      border-radius: 1px;
      border: 1px solid #d5d5d5;

      &::placeholder {
        padding-left: 10px;
      }
    }
  }

  &__attributes {
    &-item {
      display: flex;
      justify-content: space-between;
      line-height: 2;

      div {
        span {
          color: #aaaaaa;
        }
      }
    }
  }
}
</style>
