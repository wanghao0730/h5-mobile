import { MockMethod, Recordable } from 'vite-plugin-mock';
import { Result } from '/#/axios';
interface IResponse {
  url: Recordable;
  body: Recordable;
  query: Recordable;
  headers: Recordable;
}

export default [
  {
    url: '/api/store/list',
    method: 'get',
    response: ({ url, query }: IResponse): Result => {
      return {
        code: 200,
        message: 'ok',
        type: 'success',
        result: [
          {
            id: '@id()',
            title: '实物商品（购买时需填写收货地址，支持售后实物商品（购买时需填写收货地址，支持售后））',
            img: 'https://dcdn.it120.cc/2023/02/24/b85e466d-b1d2-4b2e-b12c-a98925ef2f63.jpg',
            currentPrice: 185,
            originPrice: 750,
          },
          {
            id: '@id()',
            title: '电脑办公',
            img: 'https://dcdn.it120.cc/2023/02/24/3c02b205-8c29-4d9e-b073-3e8e42f2cc39.jpg',
            currentPrice: 185,
            originPrice: 750,
          },
          {
            id: '@id()',
            title: '电脑办公',
            img: 'https://dcdn.it120.cc/2023/02/24/5e480807-4a29-41b8-9ca9-2782954eec3e.jpg',
            currentPrice: 185,
            originPrice: 750,
          },
          {
            id: '@id()',
            title: '电脑办公',
            img: 'https://dcdn.it120.cc/2023/02/24/5e480807-4a29-41b8-9ca9-2782954eec3e.jpg',
            currentPrice: 185,
            originPrice: 750,
          },
        ],
      };
    },
  },
] as MockMethod[];
