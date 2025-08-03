'use strict';

import 'dotenv/config'; // Loads the data from the .env for this demo
import {encrypt, decrypt, EncryptResult} from './cryptoHelper';
import {getEnv} from './processHelper';

const plaintext = 'Sensitive data';
const encrypted: EncryptResult = encrypt(
  plaintext,
  getEnv('KEY'),
  getEnv('IV'),
);
console.log('Encrypted:', encrypted);

const decrypted: string = decrypt(
  getEnv('SECRET_1'),
  getEnv('KEY'),
  getEnv('IV'),
  getEnv('SECRET_1_TAG'),
);
console.log('Decrypted:', decrypted);
