// 이 파일은 라우터의 경로를 설정해주는 녀석이다.
import Vue from 'vue'
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ExampleView from '../views/ExampleView.vue';
import HiddenView from '../views/HiddenView.vue';
import BoardView from '../views/BoardView.vue';
import BoardDetailView from '../views/BoardDetailView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',  //url
    name: 'home',  // 현재 component의 고유 name, unique해야함. 키와 같이 사용.
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // 이런식으로 import할 수도 있는거졍
  },
  {
    path: '/example',  //url
    name: 'example',  // 현재 component의 고유 name, unique해야함. 키와 같이 사용.
    component: ExampleView
  },
  {
    path: '/hidden',  //url
    name: 'hidden',  // 현재 component의 고유 name, unique해야함. 키와 같이 사용.
    component: HiddenView
  },
  {
    path: '/board',  //url
    name: 'board',  // 현재 component의 고유 name, unique해야함. 키와 같이 사용.
    component: BoardView
  },
  {
    path: '/board/:key',  // key값을 가지고 오고싶다면 -> :key을 붙여준다.
    name: 'boardDetailView',  // 현재 component의 고유 name, unique해야함. 키와 같이 사용.
    component: BoardDetailView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 네비게이션 가드
// beforeEach  - 라우터 이동 전
// 넘어가기 전에 돌기 댸문에 next()로 막을 수 있다. 
// router.beforeEach((to, from, next) => {
//   console.log('============= beforeEach start =============');
//   console.log('to' , to);
//   console.log('from', from);
//   console.log('============= beforeEach end =============');
//    next();
// });

// 네비게이션 가드
// afterEach  - 라우터 이동 후
/*router.afterEach((to, from) => {
  console.log('============= afterEach start =============');
  console.log('to' , to);
  console.log('from', from);
  console.log('============= afterEach end =============');
});*/

export default router
