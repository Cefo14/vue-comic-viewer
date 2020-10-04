import VuexPersistence from 'vuex-persist';
import localforage from 'localforage';

const vuexLocal = new VuexPersistence({
  storage: localforage,
  asyncStorage: true,
});

export default vuexLocal;
