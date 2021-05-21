import { v2 } from 'cloudinary';
import { CLOUDINARY } from './info';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): void => {
    return v2.config({
      cloud_name: 'cloudia97',
      api_key: '168826881457568',
      api_secret: '_Cr2P_-x6VjSYktyZlFmUIrPX50',
    });
  },
};