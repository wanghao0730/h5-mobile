import useAxiosApi from '/@/utils/useAxiosApi';

/**
 * 商品列表信息展示
 * @returns
 */
export function storeList() {
  return useAxiosApi(`/api/store/list`, {
    method: 'get',
  });
}
