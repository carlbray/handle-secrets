import * as crypto from 'crypto';
import {encrypt, decrypt} from '../src/cryptoHelper';

describe('cryptoHelper functions', () => {
  it('happy path', () => {
    // Arrange
    const plaintext = 'Sensitive data';
    const key = crypto.randomBytes(32).toString('hex');
    const iv = crypto.randomBytes(12).toString('hex');

    // Act
    const encrypted = encrypt(plaintext, key, iv);
    const decrypted = decrypt(encrypted.encrypted, key, iv, encrypted.authTag);

    // Assert
    expect(decrypted).toEqual(plaintext);
  });
});
