// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
new Vue({
  el: '#app2',
  data: {
    message: '안녕하세요 Vue!',
    test: 'pipeTEST 중'
  }
})

new Vue({
  el: '#app-2',
  data: {
    message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
  }
})

new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'JavaScript 배우기' },
      { text: 'Vue 배우기' },
      { text: '무언가 멋진 것을 만들기' }
    ]
  }
})

new Vue({
  el: '#app-5',
  data: {
    message: '안녕하세요! Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

new Vue({
  el: '#app-6',
  data: {
    message: '안녕하세요 Vue!'
  }
})

Vue.component('todo-item', {
  // 이제 todo-item 컴포넌트는 "prop" 이라고 하는
  // 사용자 정의 속성 같은 것을 입력받을 수 있습니다.
  // 이 prop은 todo라는 이름으로 정의했습니다.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: '채소' },
      { text: '치즈' },
      { text: '사람이 먹을 수 있는 다른 무언가' }
    ]
  }
})

new Vue({
  el: '#app-8',
  data: {
    people: [
      { name: 'john', age: 70 },
      { name: 'son', age: 17 },
      { name: 'mata', age: 23 },
      { name: 'ronaldo', age: 34 },
      { name: 'ebra', age: 52 },
      { name: 'messi', age: 40 },
      { name: 'bale', age: 12 },
      { name: 'maldiny', age: 10 }
    ]
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    }
  }
})
