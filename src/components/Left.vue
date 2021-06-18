<template>
  <ul>
    <li
      v-for="(item, index) in links"
      :key="'links' + index"
    >
      <a
        @click.prevent="go(item.page)"
        href="#"
      >{{item.title}}</a>
    </li>
  </ul>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const go = function (page) {
  if(!page){
    alert('暂未开发')
    return
  }
  router.push({
    name: page
  });
};
const links = [
  {
    title: '提示',
    page: 'alert'
  },
  {
    title: '徽章',
    page: ''
  },
  {
    title: '按钮',
    page: ''
  },
  {
    title: '按钮组',
    page: ''
  },
  {
    title: '卡片',
    page: ''
  },
  {
    title: '轮播效果',
    page: ''
  },
  {
    title: '折叠面板',
    page: ''
  },
  {
    title: '下拉菜单',
    page: ''
  },
  {
    title: '表单',
    page: ''
  },
  {
    title: '输入框',
    page: ''
  },
  {
    title: 'Hero大屏幕',
    page: ''
  },
  {
    title: '列表组',
    page: ''
  },
  {
    title: '弹出模态框',
    page: ''
  },
  {
    title: '滑动门',
    page: ''
  },
  {
    title: '导航栏',
    page: ''
  },
  {
    title: '分页',
    page: ''
  },
  {
    title: 'POP提示',
    page: ''
  },
  {
    title: '进度条',
    page: ''
  },
  {
    title: '滚动监听',
    page: ''
  },
  {
    title: '提示冒泡',
    page: ''
  }
];
</script>
<style lang="scss" scoped>
$dark: #343a40;

ul {
  float: left; 
  list-style: none;
  margin: 0;
  padding: 0;
  width: 220px;
  height: calc(100% - 80px);
  overflow-y: auto;
  background-color: #f5f5f5;
  li {
    overflow-y: auto;
    a {
      padding: 10px 20px;
      display: block;
      color: $dark;
      transition: transform 200ms;
      text-decoration: none;
      &:hover {
        background-color: $dark;
        color: #fff;
      }
    }
  }
}
</style>