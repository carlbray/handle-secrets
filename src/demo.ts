'use strict';

import 'dotenv/config'; // Loads the data from the .env for this demo
import {encrypt, decrypt} from './cryptoHelper';

const plaintext = 'Sensitive data';
const encrypted = encrypt(
  plaintext,
  process.env.KEY as string,
  process.env.IV as string,
);
console.log('Encrypted:', encrypted);

const decrypted = decrypt(
  process.env.SECRET_1 as string,
  process.env.KEY as string,
  process.env.IV as string,
  process.env.SECRET_1_TAG as string,
);
console.log('Decrypted:', decrypted);
