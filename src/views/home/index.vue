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
        <component :is="item.component" width="25px" height="25px" :color="item.color" />
        <span class="act-name">{{ item.name }}</span>
      </div>
    </div>
  </section>
  <!-- 商品列表 -->
  <section class="store-wrap">
    <div class="store-title"> 商品列表 </div>
    <div class="feed" v-if="Object.keys(feedList).length > 0">
      <div class="feed-col" v-for="item in feedList" :key="item.id">
        <div class="feed-item">
          <!-- 品牌图片 -->
          <div class="brand-img">
            <nut-image :src="item.img" />
          </div>
          <!-- 品牌内容 -->
          <div class="brand">
            <div class="brand-title"> {{ item.title }}</div>
            <div class="brand-price">
              <div class="price">
                <div class="price-current">
                  <span class="price-symbol">￥</span>
                  <span class="price-real">{{ item.currentPrice }}</span>
                </div>
                <div class="price-origin">{{ item.originPrice }}</div>
              </div>
              <div class="buy">购买</div>
            </div></div
          >
        </div></div
      >
    </div>
  </section>
</template>

<script lang="ts" setup name="HomePage">
  import { Search2, Jimi40, Footprint, Order, StarN, Scan, Message, People } from '@nutui/icons-vue';
  import { storeList } from '/@/api/home';
  interface ISwiper {
    page: number;
    list: string[];
  }
  //判断是否还有更多
  // const hasMore = ref<boolean>(true);
  //请求后的数组列表
  const feedList = ref<any[]>([]);
  //记录请求的次数
  let reqCount = ref<number>(1);
  const swiperList = reactive<ISwiper>({
    page: 0,
    list: [
      'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
      'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
      'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
      'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
    ],
  });

  const activityList = shallowRef([
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

  //处理网络请求
  const reqStore = async () => {
    console.log('到底继续请求');
    const res = await storeList();
    feedList.value.push(...res.data.value.result);
    console.log(feedList.value);
  };

  /**
   * 监听页面滚动位置距离
   */

  onMounted(() => {
    reqStore();
    window.addEventListener(
      'scroll',
      () => {
        //获取视口的高度
        const windowHeight = window.screen.height;
        //获取页面的可视高度
        const clientHeight = document.body.clientHeight;
        //获取页面滚动距离
        const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        // console.log({ windowHeight, clientHeight, scrollTop: Math.ceil(scrollTop) });
        //这里就直接判断超过5就不在请求了
        if (windowHeight + Math.ceil(scrollTop) >= clientHeight && reqCount.value < 5) {
          //请求数据
          reqCount.value++;
          reqStore();
        }
      },
      true,
    );
  });
  //页面卸载清除事件
  onBeforeUnmount(() => {
    // window.removeEventListener('scroll');
  });
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
      .feed-col {
        width: 50%;
        padding: 10px;
        margin-bottom: 10px;
        box-sizing: border-box;
        .feed-item {
          padding: 15px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          .brand-img > .nut-image > .nut-img {
            border-radius: 15px !important;
          }
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
          .price {
            display: flex;
            .price-current {
              .price-symbol {
                color: var(--darkreader-text--vice-text-color);
                margin-right: 5px;
                font-size: 18px;
              }
              .price-real {
                font-size: 40px;
                color: var(--darkreader-text--vice-text-color);
              }
            }
            .price-origin {
              @include center;
              margin-left: 10px;
              font-size: 20px;
              color: #969799;
              text-decoration: line-through;
            }
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
