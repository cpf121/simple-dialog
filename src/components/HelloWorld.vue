<template>
  <div v-if="dialogVisible" class="modal" @click="handleclose">
    <div class="wrap">
      <div class="dialog" :style="{width:computeWidth}">
        <div class="head">
          <div class="title">
            <slot name="title">{{title}}</slot>
          </div>
          <div class="closeicon" @click="handleclose">x</div>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { watch,computed } from 'vue'

const props=defineProps({
  width:{
    type:Number,
    default:330
  },
  title:{
    type:String,
    default:"属性标题"
  },
  visible:{
    type:Boolean,
    default:false
  }
})
const emit = defineEmits(['update:visible','open','close'])
const dialogVisible=computed(()=>{
  return props.visible
})
const computeWidth=computed(()=>{
  if(typeof props.width=='number'){
    return props.width+"px"
  }else{
    return props.width
  }
})
const handleclose=()=>{
  emit('update:visible',false)
  emit('close')
}
watch(()=>props.visible,(val)=>{
  if(val){
    emit('open')
  }
})
</script>

<style lang="scss" scoped>
.modal{
  position: fixed;
  left: 0;
  top: 0px;
  width: 100%;
  height: 100%;
  /* opacity: .5; */
  background: rgba(0,0,0,.5); 
  z-index:100;
  .wrap{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index:101;
    display:flex;
    justify-content:center;
    align-items:center;
    .dialog{
      background-color:#FFF;
      border-radius: 4px;
      box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
      .head{
        height: 40px;
        padding: 5px 10px;
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        .closeicon{
          cursor: pointer;
          font-size: 20px;
          color: #999;
        }
      }
    }
  }
}
</style>
