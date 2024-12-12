'use strict';

import * as crypto from 'crypto';

const HEX = 'hex';
const UTF_8 = 'utf8';
const AES_256_GCM = 'aes-256-gcm';

interface EncryptResult {
  encrypted: string;
  authTag: string;
}

export const encrypt = (
  text: string,
  keyHex: string,
  ivHex: string,
): EncryptResult => {
  const cipher = crypto.createCipheriv(
    AES_256_GCM,
    Buffer.from(keyHex, HEX),
    Buffer.from(ivHex, HEX),
  );
  let encrypted = cipher.update(text, UTF_8, HEX);
  encrypted += cipher.final(HEX);
  const authTag = cipher.getAuthTag().toString(HEX); // Authentication tag
  return {encrypted, authTag};
};

export const decrypt = (
  encryptedData: string,
  keyHex: string,
  ivHex: string,
  authTagHex: string,
): string => {
  const decipher = crypto.createDecipheriv(
    AES_256_GCM,
    Buffer.from(keyHex, HEX),
    Buffer.from(ivHex, HEX),
  );
  decipher.setAuthTag(Buffer.from(authTagHex, HEX));
  let decrypted = decipher.update(encryptedData, HEX, UTF_8);
  decrypted += decipher.final(UTF_8);
  return decrypted;
};
