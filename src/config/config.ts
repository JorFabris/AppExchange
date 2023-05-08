import { EnumEnvironment } from '../GlobalInterfaces/GlobalInterface';

const ENV: EnumEnvironment = EnumEnvironment.DEV;

const API_URL = () => {
  if (ENV === EnumEnvironment.DEV) {
    return 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1';
  } else if (ENV === EnumEnvironment.PROD) {
    return 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1';
  } else {
    return 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1';
  }
};

export default API_URL;
