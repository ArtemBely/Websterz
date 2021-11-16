import express from 'express';
const router = express.Router();
const crypto = require('crypto');
const CryptoJS = require("crypto-js");

router.get('/', () => {

      // --> собираю данные персоны необходимые для хранения в блокчейн
      var person = {
        name: 'Abraham',
        surname: 'Statham'
      }

      // Encrypt --> сохраняю в БД шифр данных персоны
      var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(person), 'secret key 123').toString();

      // --> параллельно сохраняю хэш данных в блокчейне
      var secret = 'abcdefg';
      // --> данные пользователя
      var personDouble = {
        name: 'Abraham',
        surname: 'Statham'
      }
      var jsStr1 = JSON.stringify(personDouble);
      const hash1 = crypto.createHash('sha256', secret)
                     .update(jsStr1)
                     .digest('hex');


      // Decrypt  --> получаю расшифровку данных из БД для персоны при действии на странице
      var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
      var decryptedPerson = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      console.log(decryptedPerson);


      // получаю хэш расшифрованного объекта
      var secret = 'abcdefg';
      var jsStr2 = JSON.stringify(decryptedPerson);
      const hash2 = crypto.createHash('sha256', secret)
                     .update(jsStr2)
                     .digest('hex');

      // проверяю достоверность данных
      if(hash1 == hash2) {
        console.log(true);
      }
      else {
        console.log(false);
      }
});

export default router;
