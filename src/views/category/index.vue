<template>
  <section> hello i am category </section>
</template>

<script setup name="DemoPage">
  import { i18n } from '/@/i18n';
  // import { useI18n } from 'vue-i18n';
  // const { locale } = useI18n();
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';
  section {
    .title {
      font-size: 40px;
      margin-bottom: 40px;
      font-weight: 500;
      display: inline-block;
    }
    &:nth-child(n) {
      .title {
        margin-top: 20px;
      }
    }
    &:first-child {
      .title {
        margin-top: 0;
      }
    }

    ::v-deep(.var-space) {
      margin-bottom: 10px !important;
    }
  }
  .demo {
    > :nth-child(n) {
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
</style>
