<template>
<transition name="dialog-fade">
  <div v-if="dialogVisible" >
    <div class="cover" @click="handleClose" @after-enter="afterEnter" @after-leave="afterLeave"></div>
    <div class="inner" :style="{width: width, height: height}">
      <slot></slot>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'MxDialog',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    width: {
      width: String,
      default: "80%"
    },
    height: {
      width: String,
      default: "20%"
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:dialogVisible',false)
    },
    afterEnter () {
      this.$emit('opened')
    },
    afterLeave () {
      this.$emit('closed')
    }
  }
}
</script>

<style scoped>
.cover {
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color:#000;
  opacity: 0.2;
}
.inner{
  position: fixed;
  z-index: 1001;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 10px;
  background-color:#FFF;
}

.dialog-fade-enter-active {
  transition: opacity .4s;
}

.dialog-fade-leave-active {
  transition: opacity .4s;
}

.dialog-fade-enter, .dialog-fade-leave-to {
  opacity: 0;
}

</style>
