<template>
  <div>
    <van-notice-bar background="#ecf9ff"
                    :text="notice.title"
                    left-icon="volume-o" @click="$router.push(`/notice/${notice.id}`)"
    />
    <div class="btn-working">{{ workerStatus }}</div>
    <div class="btn-refresh" @click="refreshHandler">{{ refreshStatus }}</div>
  </div>
</template>

<script>
  export default {
    name: "OrderCenterIndex",
    data() {
      return {
        workerStatus: '接单中',
        refreshStatus: '刷新',
        notice: {
          id: 0,
          title: '属性设置元素的垂直对齐方式。说明该属性定义行内元素的基线相对于该元素所在行的基线的垂直对齐。'
        }
      }
    },
    methods: {
      refreshHandler() {
        this.$toast.success("刷新成功")
      }
    }
  }
</script>

<style scoped>
  .btn-working {
    background: #1989fa;
    color: white;
    position: fixed;
    bottom: 70px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    text-align: center;
    line-height: 60px;
    font-weight: 700;
    left: 20px;
  }

  .btn-refresh {
    position: fixed;
    bottom: 70px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    text-align: center;
    line-height: 60px;
    font-weight: 700;
    color: #fff;
    right: 20px;
    background: #1989fa;
  }
</style>
