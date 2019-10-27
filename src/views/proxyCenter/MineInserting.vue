<template>
  <div class="my-inserting">
    <van-nav-bar title="我的下线">
      <van-icon name="arrow-left" size="18px" slot="left" @click="$router.push('/proxy')"/>
    </van-nav-bar>
    <van-row>
      <van-col span="6">
        <van-dropdown-menu>
          <van-dropdown-item v-model="sortOption" :options="sortOptions"/>
        </van-dropdown-menu>
      </van-col>
      <van-col span="16" style="float: right;">
        <van-search placeholder="请输入搜索关键词" show-action/>
      </van-col>
    </van-row>

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad">
      <van-row v-for="item in list" :key="item.id">
        <van-col span="18"><span class="title">用户名: </span> {{ item.userName }}</van-col>
        <van-col span="10"><span class="title">手机号: </span><span>{{ item.phone }}</span></van-col>
        <van-col span="8"><span class="title">待遇: </span>{{ item.treatment}}</van-col>
        <van-col span="18"><span class="title">注册时间: </span>{{ item.registerDate }}</van-col>
      </van-row>
    </van-list>
  </div>
</template>

<script>
  const sortOptions = [
    {text: '默认排序', value: 'a'},
    {text: '注册时间', value: 'b'},
    {text: '下线待遇', value: 'c'}
  ]
  /*我的下线*/
  export default {
    name: "MineInserting",
    data() {
      return {
        loading: false,
        finished: false,
        list: [],
        sortOptions,
        sortOption: sortOptions[0].value
      }
    },
    methods: {
      onLoad() {
        const size = this.list.length;
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push({
              id: i + size,
              userName: "user-" + (i + size),
              phone: '18888888888',
              treatment: '1.8%',
              registerDate: '2019-10-26 10:10:10'
            });
          }
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      }
    }
  }
</script>

<style lang="less" scoped>
  .my-inserting {
    background: #f5f6f8;

    .van-row {
      background: white;
      margin: 10px 0;
      overflow-x: hidden;

      .van-col {
        line-height: 30px;
        margin-left: 10px;

        .title {
          color: #9c9c9c;
        }
      }
    }
  }
</style>
