import localforage from 'localforage';
import vuexPersist from './vuex-persist';

const supportSQL = (
  localforage.supports(localforage.INDEXEDDB)
  || localforage.supports(localforage.WEBSQL)
);

export default [
  ...(supportSQL ? [vuexPersist.plugin] : []),
];
