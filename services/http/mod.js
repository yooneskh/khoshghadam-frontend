import { makeUnifiedNetwork } from 'unified-network';


export const http = makeUnifiedNetwork({
  baseUrl: 'https://api.zeimaran.com/api',
  processor: async ({ url, method, body, headers }) => {

    const response = await $fetch.raw(url, {
      method: method.toUpperCase(),
      body,
      headers,
    });


    return {
      status: response.status,
      headers: Object.fromEntries( response.headers.entries() ),
      data: response._data,
    };

  }
});


export function generalHttpHandle(status, data, silent) {
  if (status !== 200) {

    if (!silent) {
      alert(data?.message || 'Please try again.');
    }

    return true;

  }
}


export async function syncedRequest(key, config) {

  const response = await useAsyncData(key, () => http.request(config));

  return JSON.parse(JSON.stringify( response.data.value ));

}
