<template>
  <div class="notice">
    <van-nav-bar title="消息">
      <van-icon name="arrow-left" size="18px" slot="left" @click="$router.go(-1)"/>
    </van-nav-bar>
    <van-row>
      <van-col span="6">
        <van-dropdown-menu>
          <van-dropdown-item v-model="sortOption" :options="sortOptions"/>
        </van-dropdown-menu>
      </van-col>
      <van-col span="16" style="float: right;">
        <van-search placeholder="请输入标题搜索" show-action/>
      </van-col>
    </van-row>

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad">
      <van-row v-for="item in list" :key="item.id" @click="$router.push(`notice/${item.id}` )">
        <van-col span="22"><span class="title">标题: </span> {{ item.title }}</van-col>
        <van-col span="22"><span class="title">发布时间: </span>{{ item.publishDate }}</van-col>
        <van-col span="22"><span class="title">内容: </span>{{ item.content}}</van-col>
      </van-row>
    </van-list>
  </div>
</template>

<script>
  const sortOptions = [
    {text: '默认排序', value: 'a'},
    {text: '发布时间', value: 'b'}
  ]
  /* 通知 */
  export default {
    name: "Notice",
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
              title: "title-" + (i + size),
              publishDate: '2019-10-26 10:10:10',
              content: `content - ${size + i}... `
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
  .notice {
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
