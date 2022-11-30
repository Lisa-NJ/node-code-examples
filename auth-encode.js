// Authorization encoding
let email = "postmail@test.com"
let password = "12345678"
let auth = `${email}:${password}`
console.log(`string: ${auth}`);
// 'ascii' - the character encoding to be used when converting string into bytes.
const buf = Buffer.from(auth, 'ascii');
console.log(`buffer/ascii: ${buf}`);// cG9zdG1haWxAdGVzdC5jb206MTIzNDU2Nzg=
let authorization = buf.toString('base64')
console.log(`toStr/base64: ${authorization}`); 
// Authorization decoding
const buf1 = Buffer.from((authorization.split(' ')[0] || ''), "base64");
const user = buf1.toString('ascii').split(':');
console.log(user);