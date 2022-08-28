<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import SimpleDialog from './components/HelloWorld.vue'

const visible=ref(false)
const width=ref(300)
const title=ref("属性标题")
const onClose=()=>{
  console.log("我关了")
}
const onOpen=()=>{
  console.log("我开了")
}
</script>

<template>
  <button type="text" @click="visible=true">点击打开 Dialog</button>
  <simple-dialog v-model:visible.sync="visible"
    :width="width"
    :title="title"
    @close="onClose"
    @open="onOpen">
      <template #title>
        <span>插槽标题</span>
      </template>
      <div>我是内容</div>
  </simple-dialog>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
