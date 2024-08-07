<script>
export default {
  name: 'Size',
};
</script>

<template>
  <div class="size">
    <div class="size__title">
      <h4>Размер</h4>
    </div>

    <div class="size__attributes">
      <div class="size__attributes-item">
        <div><input type="checkbox" /> Атрибут</div>
        <div><span>3</span></div>
      </div>
      <div class="size__attributes-item">
        <div><input type="checkbox" /> Атрибут</div>
        <div><span>3</span></div>
      </div>
      <div class="size__attributes-item">
        <div><input type="checkbox" /> Атрибут</div>
        <div><span>3</span></div>
      </div>
      <div class="size__attributes-item">
        <div><input type="checkbox" /> Атрибут</div>
        <div><span>3</span></div>
      </div>
      <div class="size__attributes-item">
        <div><input type="checkbox" /> Атрибут</div>
        <div><span>3</span></div>
      </div>
      <div class="size__attributes-item">
        <div><input type="checkbox" /> Атрибут</div>
        <div><span>3</span></div>
      </div>
      <div class="size__attributes-item">
        <div><input type="checkbox" /> Атрибут</div>
        <div><span>3</span></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.size {
  &__title {
    text-align: center;
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
