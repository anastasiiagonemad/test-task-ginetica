<template>
  <div class="product">
    <div v-for="item in products" :key="item.id" class="product__card">
      <div class="product__card-image">
        <div class="product__card-image_sticker">
          <p>Хит продаж</p>
          <img src="../../assets/images/fire.png" alt="icon" />
        </div>
        <div class="product__card-image_sale">
          <p>-25 %</p>
        </div>
        <div class="product__card-image_img">
          <img :src="item.image" :alt="item.title" />
        </div>
      </div>

      <div class="product__card-title">
        <h4>{{ item.title }}</h4>
      </div>

      <div class="product__card-description">
        <p>{{ item.description }}</p>
      </div>

      <div class="product__card-price">
        <h4>{{ Math.floor(item.price * 98).toLocaleString() }} руб.</h4>
        <span>
          {{ Math.floor(item.price * 1.25 * 98).toLocaleString() }} руб.
        </span>
      </div>

      <div class="product__card-buy-btn">
        <button>Купить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { productBase } from './base';

export default {
  name: 'Card',
  data() {
    return {
      products: [],
    };
  },
  created() {
    productBase
      .then((data) => {
        this.products = data.map((item) => ({
          ...item,
          description: this.description(item.description),
        }));
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных', error);
      });
  },
  methods: {
    description(description, length = 30) {
      if (description.length > length) {
        return description.substring(0, length) + '...';
      }
      return description;
    },
  },
};
</script>

<style scoped lang="scss">
.product {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;

  &__card {
    display: grid;
    place-items: start;
    align-items: start;
    &-image {
      text-align: center;
      position: relative;

      &_sticker {
        position: absolute;
        display: flex;
        align-items: center;
        top: -20px;
        gap: 0.5rem;
      }
      &_sale {
        position: absolute;
        bottom: 0;

        p {
          background-color: #7397f5;
          padding: 6px 10px;
          border-radius: 4px;
          color: white;
        }
      }
      &_img {
        padding: 1rem;

        img {
          width: 100px;
          height: 150px;
          object-position: center;
          object-fit: contain;
        }
      }
    }

    &-title {
      h4 {
        color: #aaaaaa;
      }
    }

    &-price {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      h4 {
        color: #333333;
      }
      span {
        color: #aaaaaa;
        text-decoration: line-through;
        font-size: 12px;
      }
    }

    &-buy-btn {
      button {
        padding: 12px 16px;
        background: none;
        border: 1px solid #7397f5;
        border-radius: 4px;
        color: #7397f5;
        cursor: pointer;
      }

      button:hover {
        transition: 0.3s ease-in;
        background-color: #7397f5;
        color: #ffff;
      }
    }
  }
}

@media screen and (max-width: 1440px) {
  .product {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 1100px) {
  .product {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
