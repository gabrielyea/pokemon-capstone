import 'regenerator-runtime/runtime.js';
import { ApiAccess } from '../api/api-access.js';
import { countElements } from '../utils/utils.js';

jest.mock('../api/api-access.js');

describe('Api access mock operations', () => {
  const url1 = ['comments1', 'comments2', 'comments3'];
  const url2 = ['comments1', 'comments2', 'comments3', 'comments4'];
  let url3;
  const url4 = 'jsdfjaksd';
  beforeAll(() => {
    ApiAccess.mockImplementation(() => ({
      getApi(url) {
        const myPromise = new Promise((resolves) => {
          setTimeout(() => {
            resolves(url);
          }, 300);
        });
        return myPromise;
      },
    }));
  });

  it('Count elements should be 3', async () => {
    const access = new ApiAccess();
    const list = await access.getApi(url1);
    return expect(countElements(list)).toBe(3);
  });

  it('Count elements should be 4', async () => {
    const access = new ApiAccess();
    const list = await access.getApi(url2);
    return expect(countElements(list)).toBe(4);
  });

  it('Count elements should throw error', async () => {
    const access = new ApiAccess();
    const list = await access.getApi(url3);
    return expect(() => countElements(list)).toThrow('Invalid list');
  });

  it('Count elements should throw error', async () => {
    const access = new ApiAccess();
    const list = await access.getApi(url4);
    return expect(() => countElements(list)).toThrow('Invalid list');
  });
});
