import { getInitData } from '../api';

export const initialisation = (store) => {
  return new Promise((resolve, reject) => {
    const unsub = store.on('init/fetch-res', (state) => {
      unsub();
      resolve(state);
    });
    store.dispatch('init/fetch');
  });
}
