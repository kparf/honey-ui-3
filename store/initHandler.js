import { getInitData } from '../api';

export const initHandler = initData => store => {
  store.on('@init', () => initData);

  store.on('init/fetch-res', (state, newState) => newState);

  store.on('init/fetch', async (state) => {
    const data = await getInitData();
    store.dispatch('init/fetch-res', data);
  });
}

