<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-row align="middle">
          <el-col :span="4">
            <div style="display: flex;align-items: center;margin-left: -20px;">
              <el-image
                style="height: 80px;width: 200px;"
                @click="Expand"
                src="https://www.logosc.cn/uploads/output/2022/02/15/b72cefa7c774751453c33e9401f58f44.jpg"
              />
            </div>
          </el-col>
          <el-col :span="16"><h2>后台管理系统</h2></el-col>
          <el-col :span="4">
            <div class="right-conent-box">
              <el-popover
                :width="170"
                popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
              >
                <template #reference>
                  <el-avatar
                    src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
                  />
                </template>
                <template #default>
                  <div style="display: flex; flex-direction: column">
                    <div class="user-conent">
                      <el-avatar
                        :size="55"
                        src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
                      />
                      <div class="person-info">
                        <div class="nickname">张三丰</div>
                        <div class="serviceteam">服务站站长</div>
                      </div>
                    </div>
                    <div class="user-operate">
                      <div><el-button text>更改密码</el-button></div>
                      <div><el-button text>个人设置</el-button></div>
                      <div><el-button text>更换头像</el-button></div>
                      <div>
                        <el-button text @click="Outlogin">退出登录</el-button>
                      </div>
                    </div>
                  </div>
                </template>
              </el-popover>
              <div class="person-info">
                <div class="nickname">管理员</div>
                <div class="serviceteam" style="color: #ecf5ff">服务站站长</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px" >
          <el-menu
            active-text-color="#0072e6"
            background-color="#001529"
            class="el-menu-vertical-demo"
            default-active="0"
            text-color="#fff"
            :collapse="isCollapse"
            router
          >
            <!-- router 开启路由模式 -->
            <el-menu-item
              :index="item.path"
              v-for="item in MenuList"
              :key="item.path"
            >
              <!-- icon -->
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <!-- 设置路由出口 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "HomeView",
  setup(props, ctx) {
    const router = useRouter();
    const MenuList = router.getRoutes().filter((v) => v.meta.isShow);
    console.log("路由菜单", router.getRoutes(), "----过滤后的菜单", MenuList);
    const isCollapse = ref(false);
    // 退出登录
    const Outlogin = () => {
      router.push("/login");
    };
    // 收起展开
    const Expand = () => {
      isCollapse.value = !isCollapse.value;
    };
    return {
      isCollapse,
      MenuList,
      Expand,
      Outlogin,
    };
  },
});
</script>
<style lang="scss" scoped>
// 用户信息的样式
.user-conent {
  display: flex;
  align-items: center;
}
.person-info {
  margin-left: 8px;
  display: flex;
  gap: 4px;
  flex-direction: column;
  cursor: pointer;
  .nickname {
    font-size: 16px;
    color: #1d2129;
    font-weight: 550;
  }
  .serviceteam {
    font-size: 12px;
    color: #86909c;
    word-wrap: break-word;
    word-break: normal;
  }
}
.user-operate {
  border-top: 1px solid #e8ebee;
  margin-top: 10px;
}

.el-header {
  height: 80px;
  background: linear-gradient(to right, #0059b3 0%, #2886dd 100%);
  .right-conent-box {
    display: flex;
    align-items: center;
    margin-left: 120px;
  }
  h2 {
    text-align: center;
    color: white;
    cursor: pointer;
  }
}
.el-aside {
  .el-menu {
    height: calc(100vh - 80px);
  }
}
</style>
