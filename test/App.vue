<template>
<div>
  <mx-nav-bar></mx-nav-bar>
  <mx-swiper>
    <mx-swiper-item>
      <slot>
        <img src="https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg" alt="">
      </slot>
    </mx-swiper-item>
    <mx-swiper-item>
      <slot>
        <img src="https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg" alt="">
      </slot>
    </mx-swiper-item> 
  </mx-swiper>
  <mx-dialog :dialogVisible.sync="dialogVisible">
      <slot>22</slot>
  </mx-dialog>
  <mx-grid>
    <slot>
      <div>22</div>
      <div>33</div>
      <div>44</div>
    </slot>
  </mx-grid>
</div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      dialogVisible: true
    }
  }
}
</script>

<style scoped>
</style>
