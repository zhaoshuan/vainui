import Color from './src/color.vue'

Color.install = function (Vue) {
    Vue.component(Color.name, Color)
}

export default Color