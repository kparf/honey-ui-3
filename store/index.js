import createStore from 'storeon';
import header from './header';
import { initHandler } from './initHandler';

const defaultData = {
  header: {
    phone:[],
    address:[],
  }
}

export const initStore = (initData) => {
  const data = initData ? {...defaultData, ...initData } : defaultData;

  return createStore([
    header,
    initHandler(data),
  ]);
}