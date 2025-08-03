'use strict';

import {encrypt, decrypt, EncryptResult} from '../src/cryptoHelper';

describe('cryptoHelper functions', () => {
  it('happy path', () => {
    // Arrange
    const plaintext = 'Sensitive data';
    // eslint-disable-next-line prettier/prettier
    const key = '4ed15ad57ea8600a890ce1dfd50f123ecda476a205fc81d9decf2f7022b79cb6';
    const iv = 'a88d2d9b9c025c63dbb791c1';

    // Act
    const encrypted: EncryptResult = encrypt(plaintext, key, iv);
    const decrypted: string = decrypt(
      encrypted.encrypted,
      key,
      iv,
      encrypted.authTag,
    );

    // Assert
    expect(decrypted).toEqual(plaintext);
  });
});
