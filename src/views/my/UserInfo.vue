<template>
  <div>
    <van-nav-bar title="用户信息">
      <van-icon name="arrow-left" size="18px" slot="left" @click="$router.push('/my')"/>
    </van-nav-bar>
    <van-cell-group>
      <van-cell title="头像" size="large" center is-link to="/userIcon">
        <van-image round width="3rem" height="3rem" :src="userInfo.userIcon"/>
      </van-cell>
      <van-cell title="昵名" size="large" :value="userInfo.nickName" is-link
                @click="() => this.showEditNickName = true"/>
      <van-cell title="性别" size="large" :value="userInfo.sex" is-link
                @click="() => this.showEditSex = true"/>
      <van-cell title="手机号" size="large" :value="userInfo.phone" is-link/>
      <van-cell title="修改密码" size="large" to="/updatepassword" is-link/>
    </van-cell-group>
    <div class="center-btn">
      <van-button type="info" size="normal" @click="handlerLogout()">安&nbsp;全&nbsp;退&nbsp;出</van-button>
    </div>

    <van-dialog
      v-model="showEditNickName"
      title="设置昵名"
      show-cancel-button
    >
      <van-field :value="userInfo.nickName" border placeholder="请输入昵名" maxlength="10" :error-message="nickNameErrorMessage"/>
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
        nickNameErrorMessage: null,
        showEditSex: false,
        sexList,
        userInfo: this.$store.getters.getCurrentUserInfo
      }
    },
    methods: {
      sexOnSelectHandler(item) {
        this.userInfo.sex = item.name;
        this.showEditSex = false;
        this.$toast.success("修改成功")
      },
      handlerLogout() {
        this.$dialog.confirm({
          title: '退出提示',
          message: '确认退出吗？'
        }).then(() => {
          this.$router.push("/user/login")
        }).catch(() => {
        })
      }
    }
  }
</script>

<style scoped>

</style>
