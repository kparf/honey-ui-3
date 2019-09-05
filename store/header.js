import { getHeaderData } from '../api';

export default initialHeader => store => {

  store.on('header/fetch-req', (state) => {
    return {
      header: {
        fetching: true,
      }
    }
  });

  store.on('header/fetch-res', (state, header) => {
    return {
      header: {
        ...header,
        fetching: false,
      }
    }
  })

  store.on('header/fetch', async (state) => {
    store.dispatch('header/fetch-req');
    const header = await getHeaderData();
    store.dispatch('header/fetch-res', header);
  });
}