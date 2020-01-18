nodeRSA = require("node-rsa");

// 生成不需要密码的钥匙对
// https://serverfault.com/questions/366372/is-it-possible-to-generate-rsa-key-without-pass-phrase
// $ openssl genrsa -out key.pem 2048
// 得到私钥
const key = new nodeRSA("-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEogIBAAKCAQEAxSWnxllXurPO0YnD2dBWlPTzVhWAPJ1m/yloUyiDm3HUd5xr\n" +
    "Um3Lb75B0OYfbUkHig4hsfva6AP1HlIMlwIXFLoRjR80C/fHySELG+uOBv+wbQh/\n" +
    "l8UhL4NTM7IUmWCxKsaSWiA/39GH2MVSS8CAlY4eCVcAadfE9bXY/akEgEvwzJUo\n" +
    "f1+HLFhQR9ECkLaKfsZMUY2CsZ+g4hRMqrf271Hk18ikMGjk2JP1KD4JibWep8ZE\n" +
    "zpbN7AuztY9DE4BsV4S3Q2/ncvmUufHGd2QEQEUug22o04sU1WhLnl+bNDsLNzHU\n" +
    "+dK31ddXYNKZpywauQcA1qaHAFVRGy8OlU9nswIDAQABAoIBACFVaZW++3dk+Z4y\n" +
    "RfwpHsqW1CIFBqa5EnYoQSx2WDJLP9pthzPrvo8JQ0WX805eH7k3BHl8lRnPuX1D\n" +
    "8D8EKnTltRwAX6N6ZLxcKu2wmVYTm3gEDNbTjPXkpYfDH3qDf9E0vAAjHcmxOt/r\n" +
    "FSwbw2IGIov/uuEqi3HkKmlRT6KFaExlkCWF0Kgk2bEEFqCG5t1vdJzK6m1fTrtc\n" +
    "APeb87+pgyygsncB/v5w7//EcklLpoZYJ3SIuzRuJwJ2KoyfosnOC10f4fM6DdjC\n" +
    "/NJ7+beSvTvaiGmG1xsYIYpG3xeSdAzDfFXijqHp7732JlDYNRi1+GagIsAtibxp\n" +
    "un+eIGkCgYEA9fM4kC4lCA0xynkSZQorHmS+Ao109oIv2Mvkr14jNVce0tdbi8BU\n" +
    "lmD3kV3HkGUO0gyCALQAOUxWTU8+j1MiDHYIhC5X9L5Gm0w4TkJjJAx9fsOnkkoj\n" +
    "qzQkVrbAiVn6z32veaOsveqOYudmCpAz3jtGpHfZ1uprmCM9vntb598CgYEAzTPt\n" +
    "V+e+LWK2wY3U0z9969nwNtDtwalDSJdQBRXCrQrISzk9CjaitgDFzXgRj0314jUj\n" +
    "MA7ZB5oQNMjAW1e1pYxPSL+tcX2Nl7V2QCYzBuLu9yVE2I0SSboMkKczqD2CnabO\n" +
    "jAFRa5icVxoJMC8xNWx4F+Fi3oO8cYNm/+d7Cq0CgYBGbvCz2YMhWyX3JdTuuoq+\n" +
    "mXsQoBHuxjmNjFZhIkRS8jARkTrWOq3+oqZDKugLoeUsoghYyzOFNSdB3H+968DE\n" +
    "cMjfkaX+oL73mkxFnR1nJWyK8Nz8N98fGD+P1aYtr2b0JLory4Ocn59HE51VSRaR\n" +
    "fcgtMWVg9qD5YJ49/nXDYQKBgDjzmYLVOa4FAK31fETpETy9LvM3x1UBckAaZsYS\n" +
    "hQZbwL1H9I36HeyfiEZ/dXgtbfnLP6nd5RQ8CRVtRh3T2QFKUNLjB/NAomSho2Eo\n" +
    "eO8HWsVTHalwdcvqjAQ1s5uU/sRcgGTRFNTk9TcjbbtmzaSDJ02Ra0xQiaODkbmi\n" +
    "eD69AoGANXbTE+AUsZstQeLlGDP40Bn6lcxd4MjuxcMO9riLz9Dl1a2AqDdWpWFS\n" +
    "NNqLtw2AfErjUXHsutXPTySGLN41QPFID3N3HEW4HxY5aKaecYeaJTFNzGYlE3As\n" +
    "+0gaQ79zhrEJPZvOY/unSagkrLb8wU8pzD5MPk8dJD6utz7kQvk=\n" +
    "-----END RSA PRIVATE KEY-----");

// 从私钥推导出公钥
// $ openssl rsa -in foo.key -pubout > foo.pub
const pubKey = new nodeRSA("-----BEGIN PUBLIC KEY-----\n" +
    "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxSWnxllXurPO0YnD2dBW\n" +
    "lPTzVhWAPJ1m/yloUyiDm3HUd5xrUm3Lb75B0OYfbUkHig4hsfva6AP1HlIMlwIX\n" +
    "FLoRjR80C/fHySELG+uOBv+wbQh/l8UhL4NTM7IUmWCxKsaSWiA/39GH2MVSS8CA\n" +
    "lY4eCVcAadfE9bXY/akEgEvwzJUof1+HLFhQR9ECkLaKfsZMUY2CsZ+g4hRMqrf2\n" +
    "71Hk18ikMGjk2JP1KD4JibWep8ZEzpbN7AuztY9DE4BsV4S3Q2/ncvmUufHGd2QE\n" +
    "QEUug22o04sU1WhLnl+bNDsLNzHU+dK31ddXYNKZpywauQcA1qaHAFVRGy8OlU9n\n" +
    "swIDAQAB\n" +
    "-----END PUBLIC KEY-----");

// 公钥加密
console.log("<><><><><><><><><><><><><><><><><><><><><><><><><><><><>");
console.log("<> Encrypted: Hello, world!");
let encrypted = pubKey.encrypt("Hello, world!");
console.log(encrypted.toJSON());
console.log("\n\n\n");

// 私钥解密
console.log("<><><><><><><><><><><><><><><><><><><><><><><><><><><><>");
console.log("<> Decrypted: Hello, world!");
let decrypted = key.decrypt(encrypted);
console.log(decrypted.toJSON());
console.log(decrypted.toString('hex'));
console.log(decrypted.toString());
console.log("\n\n\n");

// 查看钥匙对
console.log("<><><><><><><><><><><><><><><><><><><><><><><><><><><><>");
console.log("<> KeyPair");
console.log(key.keyPair);
console.log("\n\n\n");
