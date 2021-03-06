export function extractProperties( properties, data = {} ) {
  const result = {};
  for (let key in properties) {
    result[key] = { key: properties[key], value: data[properties[key]] };
  }
  return result;
}

export function isAdminMode() {
  return 'admin' === publicRuntimeConfig.APP_MODE;
}