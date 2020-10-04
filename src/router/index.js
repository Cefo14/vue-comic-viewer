import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/viewer',
    name: 'viewer',
    component: () => import('../views/Viewer'),
    beforeEnter(to, from, next) {
      const haveNoFiles = store.getters['files/haveNoFiles'];
      if (haveNoFiles) next({ name: 'upload' });
      next();
    },
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../views/UploadComic'),
  },
  {
    path: '/*',
    redirect: '/viewer',
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  base: process.env.VUE_APP_ROUTE,
});

const waitForStorageToBeReady = async (to, from, next) => {
  await store.restored;
  next();
};

router.beforeEach(waitForStorageToBeReady);

export default router;
