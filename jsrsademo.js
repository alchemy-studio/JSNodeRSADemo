const rs = require('jsrsasign');

let pubKey = rs.KEYUTIL.getKey("-----BEGIN PUBLIC KEY-----\n" +
    "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxSWnxllXurPO0YnD2dBW\n" +
    "lPTzVhWAPJ1m/yloUyiDm3HUd5xrUm3Lb75B0OYfbUkHig4hsfva6AP1HlIMlwIX\n" +
    "FLoRjR80C/fHySELG+uOBv+wbQh/l8UhL4NTM7IUmWCxKsaSWiA/39GH2MVSS8CA\n" +
    "lY4eCVcAadfE9bXY/akEgEvwzJUof1+HLFhQR9ECkLaKfsZMUY2CsZ+g4hRMqrf2\n" +
    "71Hk18ikMGjk2JP1KD4JibWep8ZEzpbN7AuztY9DE4BsV4S3Q2/ncvmUufHGd2QE\n" +
    "QEUug22o04sU1WhLnl+bNDsLNzHU+dK31ddXYNKZpywauQcA1qaHAFVRGy8OlU9n\n" +
    "swIDAQAB\n" +
    "-----END PUBLIC KEY-----");
// console.log(pubKey);

let encrypted = rs.KJUR.crypto.Cipher.encrypt("Hello, world!", pubKey);

console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n");
console.log(encrypted);
console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n");

let key = rs.KEYUTIL.getKey("-----BEGIN RSA PRIVATE KEY-----\n" +
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

// console.log(key);

let decrypted = rs.KJUR.crypto.Cipher.decrypt(encrypted, key);
console.log(decrypted);






