<template>
  <h2>示例</h2>
  <p>警报是一组颜色控件（共八个颜色样式），可用于任何长度的文本，以及可选的关闭按钮，系统提供8个可用的正确的样式（如，type="success"）</p>
  <i-alert type="primary">A simple primary alert—check it out!</i-alert>
  <i-alert type="secondary">A simple secondary alert—check it out!</i-alert>
  <i-alert type="success">A simple success alert—check it out!</i-alert>
  <i-alert type="danger">A simple danger alert—check it out!</i-alert>
  <i-alert type="warning">A simple warning alert—check it out!</i-alert>
  <i-alert type="info">A simple info alert—check it out!</i-alert>
  <i-alert type="light">A simple light alert—check it out!</i-alert>
  <i-alert type="dark">A simple dark alert—check it out!</i-alert>

  <pre v-highlightjs="code1"><code class="html"></code></pre>
  <hr />
  <h2>链接颜色</h2>
  <p>链接会被自动加上 .alert-link 类，将会为带颜色的警告文本框中的链接加上合适的颜色（BootStrap已经内置了相应的颜色解决方案，会自动对应有一个优化后的链接颜色方案）。</p>
  <i-alert type="primary">
    This is a primary alert with
    <a href="#">an example link</a>. Give it a click if you like.
  </i-alert>
  <i-alert type="secondary">
    This is a secondary alert with
    <a href="#">an example link</a>. Give it a click if you like.
  </i-alert>
  <i-alert type="success">
    This is a success alert with
    <a href="#">an example link</a>. Give it a click if you like.
  </i-alert>
  <i-alert type="danger">
    This is a danger alert with
    <a href="#">an example link</a>. Give it a click if you like.
  </i-alert>
  <i-alert type="warning">
    This is a warning alert with
    <a href="#">an example link</a>. Give it a click if you like.
  </i-alert>
  <i-alert type="info">
    This is a info alert with
    <a href="#">an example link</a>. Give it a click if you like.
  </i-alert>
  <i-alert type="light">
    This is a light alert with
    <a href="#">an example link</a>. Give it a click if you like.
  </i-alert>
  <i-alert type="dark">
    This is a dark alert with
    <a href="#">an example link</a>. Give it a click if you like.
  </i-alert>

  <pre v-highlightjs="code2"><code class="html"></code></pre>
</template>
<script setup>
import IAlert from '../libs/alert/index.vue';
const code1 = `
    <i-alert type="primary">A simple primary alert—check it out!</i-alert>
    <i-alert type="secondary">A simple secondary alert—check it out!</i-alert>
    <i-alert type="success">A simple success alert—check it out!</i-alert>
    <i-alert type="danger">A simple danger alert—check it out!</i-alert>
    <i-alert type="warning">A simple warning alert—check it out!</i-alert>
    <i-alert type="info">A simple info alert—check it out!</i-alert>
    <i-alert type="light">A simple light alert—check it out!</i-alert>
    <i-alert type="dark">A simple dark alert—check it out!</i-alert>
`;
const code2 = `
  <i-alert type="primary">
    This is a primary alert with
    <a href="#">an example link</a>. Give it a click if you like.
  </i-alert>
  <i-alert type="secondary">
    This is a secondary alert with
    <a href="#">an example link</a>. Give it a click if you like.
  </i-alert>
  <i-alert type="success">
    This is a success alert with
    <a href="#">an example link</a>. Give it a click if you like.
  </i-alert>
  <i-alert type="danger">
    This is a danger alert with
    <a href="#">an example link</a>. Give it a click if you like.
  </i-alert>
  <i-alert type="warning">
    This is a warning alert with
    <a href="#">an example link</a>. Give it a click if you like.
  </i-alert>
  <i-alert type="info">
    This is a info alert with
    <a href="#">an example link</a>. Give it a click if you like.
  </i-alert>
  <i-alert type="light">
    This is a light alert with
    <a href="#">an example link</a>. Give it a click if you like.
  </i-alert>
  <i-alert type="dark">
    This is a dark alert with
    <a href="#">an example link</a>. Give it a click if you like.
  </i-alert>
`;
</script>