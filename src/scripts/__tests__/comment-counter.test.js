import 'regenerator-runtime/runtime.js';
import { ApiAccess } from '../api/api-access.js';
import { countElements } from '../utils/utils.js';

jest.mock('../api/api-access.js');

describe('Api access mock operations', () => {
  const url1 = ['comments1', 'comments2', 'comments3'];
  const url2 = ['comments1', 'comments2', 'comments3', 'comments4'];
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

  it('Get scores method should be able to access api', async () => {
    const access = new ApiAccess();
    const list = await access.getApi(url1);
    return expect(countElements(list)).toBe(3);
  });

  it('Get scores method should be able to access api', async () => {
    const access = new ApiAccess();
    const list = await access.getApi(url2);
    return expect(countElements(list)).toBe(4);
  });
});
