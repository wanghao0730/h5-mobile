<template>
  <header class="search-value">
    <nut-searchbar placeholder="搜索更多" disabled @click-input="handleSearchClick">
      <template #leftin>
        <Search2 />
      </template>
    </nut-searchbar>
  </header>
  <section class="header-swiper">
    <nut-swiper :init-page="swiperList.page" :pagination-visible="true" pagination-color="#426543" auto-play="2000" touchable>
      <nut-swiper-item v-for="(item, index) in swiperList.list" :key="index">
        <img :src="item" />
      </nut-swiper-item>
    </nut-swiper>
  </section>
  <!-- 活动功能 -->
  <section class="fun-wrap">
    <div class="fun-list">
      <div class="fun-activity" v-for="(item, index) in activityList" :key="index">
        <component :is="item.component" width="30px" height="30px" :color="item.color" />
        <span class="act-name">{{ item.name }}</span>
      </div>
    </div>
  </section>
  <!-- 商品列表 -->
  <section class="store-wrap">
    <div class="store-title"> 商品列表 </div>
    <div class="feed">
      <div class="feed-item" v-for="i in 6" :key="i">
        <!-- 品牌图片 -->
        <div class="brand-img">
          <nut-image src="https://dcdn.it120.cc/2023/02/24/b85e466d-b1d2-4b2e-b12c-a98925ef2f63.jpg" />
        </div>
        <!-- 品牌内容 -->
        <div class="brand">
          <div class="brand-title"> 实物商品（购买时需填写收货地址，支持售后实物商品（购买时需填写收货地址，支持售后））</div>
          <div class="brand-price">
            <div class="price">
              <div class="price-current">
                <span class="price-symbol">￥</span>
                <span class="price-real">50</span>
              </div></div
            >
            <div class="buy">购买</div>
          </div></div
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup name="HomePage">
  import { Search2, Jimi40, Footprint, Order, StarN, Scan, Message, People } from '@nutui/icons-vue';
  interface ISwiper {
    page: number;
    list: string[];
  }
  const swiperList = reactive<ISwiper>({
    page: 0,
    list: [
      'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
      'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
      'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
      'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
    ],
  });

  const activityList = reactive([
    { name: '秒杀活动', component: Jimi40, color: '#913175' },
    { name: '每日拼团', component: Footprint, color: '#635985' },
    { name: '领卷中心', component: Order, color: '#609EA2' },
    { name: '积分商品', component: StarN, color: '#F2CD5C' },
    { name: '每日签到', component: Scan, color: '#B9F3E4' },
    { name: '生活家电', component: People, color: '#D61355' },
    { name: '手机数码', component: Message, color: '#F94A29' },
    { name: '砍价活动', component: Jimi40, color: '#F0A04B' },
  ]);
  //处理搜索内容的点击切换
  const handleSearchClick = () => {
    console.log('点击切换');
  };
</script>
<style lang="scss" scoped>
  .search-value {
    .nut-searchbar {
      padding: 25px 0;
    }
  }
  .header-swiper {
    .nut-swiper-item {
      line-height: 300px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .fun-wrap {
    margin-top: 35px;
    width: 100%;
    background-color: #ffffff;
    border-radius: 15px;
    .fun-list {
      display: flex;
      flex-wrap: wrap;
      .fun-activity {
        box-sizing: border-box;
        padding: 25px;
        @include center;
        flex: 0 0 25%;
        .act-name {
          display: inline-block;
          margin-top: 5px;
          font-size: 25px;
        }
      }
    }
  }
  // 商品列表
  .store-wrap {
    margin-top: 35px;
    .store-title {
      @include row-center;
      font-weight: 700;
      font-size: 35px;
      letter-spacing: 4px;
      position: relative;
    }
    .feed {
      padding: 15px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .feed-item {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex: 0 0 48%;
        padding: 10px 20px;
        border-radius: 10px;
        background-color: #ffffff;
        margin: 10px 5px;
        .brand-img > .nut-image > .nut-img {
          border-radius: 15px;
        }
      }
      .brand {
        padding: 10px 10px;
        .brand-title {
          box-sizing: border-box;
          font-size: 28px;
          @include line-clamp(2);
        }
        .brand-price {
          margin: 15px 0 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .price-symbol {
            color: var(--darkreader-text--vice-text-color);
            margin-right: 5px;
          }
          .price-real {
            font-size: 35px;
            color: var(--darkreader-text--vice-text-color);
          }
          .buy {
            border: 1px solid var(--darkreader-text--vice-text-color);
            width: 60px;
            height: 40px;
            padding: 3px 10px;
            line-height: 40px;
            text-align: center;
            border-radius: 5px;
            color: var(--darkreader-text--vice-text-color);
            font-size: 20px;
          }
        }
      }
    }
  }
</style>
