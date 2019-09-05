import fetch from 'isomorphic-unfetch';

export const getHeaderData = async () => {
  const res = await fetch(`https://raw.githubusercontent.com/kparf/honey-data/master/honey.json`);
  const data = await res.json();
  return data.header || {};
}

export const getInitData = async () => {
  const res = await fetch(`https://raw.githubusercontent.com/kparf/honey-data/master/honey.json`);
  return res.json();
}