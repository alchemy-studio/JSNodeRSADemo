nodeRSA = require("node-rsa");

// 生成不需要密码的钥匙对
// https://serverfault.com/questions/366372/is-it-possible-to-generate-rsa-key-without-pass-phrase
// $ openssl req -new -nodes -x509 -subj "/C=CN/ST=Beijing/L=Beijing/O=Personal/CN=foo.io" -keyout foo.key -out foo.crt

// 得到私钥
// $ head foo.key
const key = new nodeRSA("-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDOr9XjzgS4bEtY\n" +
    "NVszJJjBsHkIIm6j+mcfrwvrkt19rHZ85eKtNnN0KKW7eDZ8S+h2FZAxEDYBYO5C\n" +
    "j/hKqXiMLx7myQ6bR2aErISeAin9/Twar+0z6K4igVx1Tx3wYqGw1hA+mfeMqYf9\n" +
    "m0SSfIcAEOs48zpZshucAj37Cb9KeDyaIdedZ0y2Z8+lzpzvkRIM5z46Dr5FMcP5\n" +
    "L2K9Cg3GTVxMJkYCZokw7ZFim+fHhQ4kXEsMD3Tvre4HZ9PMJjht5793IVZX8+Rv\n" +
    "ygl3151/+tp4YeMSLYjtBE/L6ZDu10q8hyPZHH4gpDOMheDo8uSx71mxL3Qur7XC\n" +
    "oLiR0yyXAgMBAAECggEAFKw7rYRern+Oba0wiQYBDWZ0RJ8FB/u0stOUUqSm6LoG\n" +
    "Q+nOaVrH43dpVD3q3TXOc3kmqfGgJTUnv5qc0ALxXrwb0COOBXP3yg9jWFaJErFw\n" +
    "gI7WH9oHCMZ9k/Is4W1MFN7kUw6dVwFh67jK/AfejOAkVtblIDGTV2BWCLTp4C3G\n" +
    "Y0tB2Scpas79gpdu7Mlhow4/SeTElYPvAKl7MVGp/UAmZ1LcAV+jWoSRUW8huqIG\n" +
    "4Dei341My+5Bxz48dzwRRxZAXzZNPrw9ZiKnzdWAJBz5j8vF3tjnOVUJdKxV+ZPs\n" +
    "lJ8dh6Ux2F5jgOrynguZDVfn5t8Rf7oeJzFSEUtUiQKBgQD4aUJowaLhlX3+Sctq\n" +
    "H+gnpcIlBfXDTzCuD+IJRWuKl48QmqYw1Ry/d68ywu2JRWy0fWvyxaas2QdmX8qB\n" +
    "bBiRov6Wo1uqGSJbeqNTr+x0/D1v/IL1gxcdemHItIly0sjrglNZair1KWtHMvqP\n" +
    "LIa49AHg6jSGo5RV6/IY3JJsUwKBgQDVAEOj9MLzgcByb2K0bF9IMaUuwYKuZ1u1\n" +
    "xppotMiZzFxIgu//xCEarUHQE3WJ/BIe57Wuk87RBdrps0CKXEiGcyKrGAM0TwHM\n" +
    "+a3q/h0mB70JwXPGwQHz2tI4mpEG9C+P1BZqhpT/HyBm98YnKtH7Myt67xcITbCQ\n" +
    "4OVUHT0WLQKBgQDttvTJAHwZOZBvVjjlXpEv16y490Ie29oux5471wW5g51xezyM\n" +
    "QHQZObQbdHQRR7Fl6xvxH3mHsMwnCIXmYgYE4CCXEM54MUMynWJMhG5X6MX2M4My\n" +
    "5HarS+DlSva5PcLttDKEv1dKco9pe/xQJIDr3v0pOZZ4PXOG4Zo0dmdcZwKBgQDP\n" +
    "f6ZlPrf8SFaWJHRfl4Nq7RIh7lnEVOQ+vO8HObaCPVdZPFVZMFOfjVEjxxEmDu4I\n" +
    "NWoEW/GKJs4QBJPHNgdhEyCe1JGqj50Ndd47orn6pmc97bs/0B561J0ej1ThFViQ\n" +
    "IOiFdf4IWuZR6OacmVZeBIdDB0/EwwpS2QQPYTx1MQKBgQCNv2lM2LrmIRwntUPn\n" +
    "bIPatQ0dSlqD05MPRqwZD2X1M6gkwpmFtx7ra+ZdYrH7ETOBnsTjkAlboMpUfjK6\n" +
    "KoK/sce3MZV6TLEbYspbsiSKrfwNzRfqEnqcBViCkRBmNeOM1kb3J4RvPq5IilgG\n" +
    "+HycLKU2irMKj+466Y593kWHNA==\n" +
    "-----END PRIVATE KEY-----\n");

// 查看钥匙对
console.log(key.keyPair);
console.log("\n<><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n");

// 从私钥推导出公钥
// $ openssl rsa -in foo.key -pubout
const pubKey = new nodeRSA("-----BEGIN PUBLIC KEY-----\n" +
    "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzq/V484EuGxLWDVbMySY\n" +
    "wbB5CCJuo/pnH68L65Ldfax2fOXirTZzdCilu3g2fEvodhWQMRA2AWDuQo/4Sql4\n" +
    "jC8e5skOm0dmhKyEngIp/f08Gq/tM+iuIoFcdU8d8GKhsNYQPpn3jKmH/ZtEknyH\n" +
    "ABDrOPM6WbIbnAI9+wm/Sng8miHXnWdMtmfPpc6c75ESDOc+Og6+RTHD+S9ivQoN\n" +
    "xk1cTCZGAmaJMO2RYpvnx4UOJFxLDA90763uB2fTzCY4bee/dyFWV/Pkb8oJd9ed\n" +
    "f/raeGHjEi2I7QRPy+mQ7tdKvIcj2Rx+IKQzjIXg6PLkse9ZsS90Lq+1wqC4kdMs\n" +
    "lwIDAQAB\n" +
    "-----END PUBLIC KEY-----");

// 公钥加密
let encrypted = key.encrypt("Hello, world!");
console.log(encrypted.toJSON());
console.log("\n<><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n");

// 私钥解密
let decrypted = key.decrypt(encrypted);
console.log(decrypted.toJSON());
console.log(decrypted.toString('hex'));
console.log(decrypted.toString());
console.log("\n<><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n");

// 独立出来的公钥加密
let encrypted2 = pubKey.encrypt("Hello, Martian!");
console.log(encrypted2.toJSON());
console.log("\n<><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n");

// 私钥解密
let decrypted2 = key.decrypt(encrypted2);
console.log(decrypted2.toJSON());
console.log(decrypted2.toString('hex'));
console.log(decrypted2.toString());
console.log("\n<><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n");
