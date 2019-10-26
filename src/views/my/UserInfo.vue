<template>
  <div>
    <van-nav-bar title="用户信息">
      <van-icon name="arrow-left" size="18px" slot="left" @click="$router.push('/my')"/>
    </van-nav-bar>
    <van-cell-group>
      <van-cell title="头像" center is-link to="/userIcon">
        <van-image round width="3rem" height="3rem" :src="userInfo.userIcon"/>
      </van-cell>
      <van-cell title="昵名" :value="userInfo.nickName" is-link
                @click="() => this.showEditNickName = true"/>
      <van-cell title="性别" :value="userInfo.sex" is-link
                @click="() => this.showEditSex = true"/>
      <van-cell title="手机号" :value="userInfo.phone" is-link/>
    </van-cell-group>

    <van-dialog
      v-model="showEditNickName"
      title="设置昵名"
      show-cancel-button
    >
      <van-field :value="userInfo.nickName" placeholder="请输入昵名" maxlength="10"/>
    </van-dialog>
    <van-action-sheet v-model="showEditSex" :actions="sexList" title="选择性别" @select="sexOnSelectHandler"/>
  </div>
</template>


<script>

  const sexList = [{
    name: '男'
  }, {
    name: '女'
  }];
  export default {
    name: "UserInfo",
    data() {
      return {
        showEditNickName: false,
        showEditSex: false,
        sexList,
        userInfo: this.$store.getters.getCurrentUserInfo
      }
    },
    methods: {
      sexOnSelectHandler(item) {
        this.userInfo.sex = item.name;
      }
    }
  }
</script>

<style scoped>

</style>
