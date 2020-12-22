import MxSwiper from './swiper'
import MxSwiperItem from './swiper-item'
import MxDialog from './dialog'
import MxGrid from './grid'
import MxNavBar from './navbar'

const components = [
  MxSwiperItem,
  MxSwiper,
  MxDialog,
  MxGrid,
  MxNavBar
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// script引入时可以直接使用
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,

  MxSwiperItem,
  MxSwiper,
  MxDialog,
  MxGrid,
  MxNavBar
}
