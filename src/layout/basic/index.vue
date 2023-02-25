<template>
  <!-- <van-nav-bar :title="$t($route.meta.title)" :left-arrow="!tabbarVisible" @click-left="goBack" /> -->
  <div class="main-page" :class="{ tabbar: tabbarVisible, border: showBorder }">
    <RouterView v-slot="{ Component }" v-if="$route.meta.keepAlive">
      <keep-alive>
        <component :is="Component" :key="$route.path" />
      </keep-alive>
    </RouterView>
    <RouterView v-if="!$route.meta.keepAlive" :key="$route.path" />
  </div>
  <!-- unactive-color="#364636" active-color="#1989fa" -->
  <nut-tabbar class="tabbar-wrap" v-bind="navbarColor" bottom v-model="activeTab" v-show="tabbarVisible" @tab-switch="tabSwitch">
    <nut-tabbar-item v-for="item in tabItem" :key="item.key" :tab-title="$t(`tabbar.${item.key}`)" :icon="item.icon" />
  </nut-tabbar>
</template>

<script lang="ts" setup name="BasicLayoutPage">
  import { useRouter } from 'vue-router';
  import { Home, My, Category, Cart } from '@nutui/icons-vue';
  const tabItem = [
    { key: 'home', icon: Home },
    { key: 'category', icon: Category },
    { key: 'car', icon: Cart },
    { key: 'member', icon: My },
  ];

  const router = useRouter();

  const activeTab = ref(0);

  const tabbarVisible = ref(true);

  const showBorder = ref(true);

  //控制navbar的颜色
  const navbarColor = ref({
    unactiveColor: '#364636', //非选中情况下的颜色
    activeColor: '#ffaa00', //选中时候的颜色
  });
  watch(
    () => router,
    () => {
      //判断页面的路由是否当前tabbar的路径
      const judgeRoute = tabItem.some((item) => item.key === router.currentRoute.value.path.replace('/', ''));
      activeTab.value = tabItem.findIndex((item) => item.key === router.currentRoute.value.path.replace('/', ''));
      // 是否主页面如果不是则控制是否显示tabbar
      tabbarVisible.value = judgeRoute;
      showBorder.value = judgeRoute;
    },
    { deep: true, immediate: true },
  );
  /**
   * 点击tabbar的页面跳转
   * @param _item
   * @param index
   */
  const tabSwitch = (_item, index) => {
    console.log({ _item, index });
    switch (index) {
      case 0:
        router.push('/home');
        break;
      case 1:
        router.push('/category');
        break;
      case 2:
        router.push('/car');
        break;
      case 3:
        router.push('/member');
        break;
    }
    activeTab.value = index;
  };

  const goBack = () => {
    router.go(-1);
  };
</script>

<style scoped lang="scss">
  .nut-navbar {
    margin-bottom: 0;
  }
  .main-page {
    box-sizing: border-box;
    height: 100%;
  }

  .tabbar {
    padding-bottom: 100px;
  }

  .border {
    padding-left: 30px;
    padding-right: 30px;
  }
  .tabbar-wrap {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
  }
  // .main-page {
  //   box-sizing: border-box;
  //   height: calc(100vh - 92px);
  //   overflow-y: scroll;
  //   overflow-x: hidden;
  // }

  // .tabbar {
  //   height: calc(100vh - 92px);
  //   padding-bottom: 100px;
  // }

  // .border {
  //   padding-left: 30px;
  //   padding-right: 30px;
  // }
</style>
