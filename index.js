import Express from "express";
import  Jwt  from "jsonwebtoken";
const app = Express();

const MINUTES_IN_MILLISECONDS = 120 * 1000;
const SECRET = 'My stupid secret';
const user = {
  id: 1,
  name: "John",
  password: '!dmin123',
  fullname: "Jhon Doe"
}

const singiToken = (user) => {
  const payload = {
    sub: user.id,
    name: user.fullname,
    exp: Date.now() + MINUTES_IN_MILLISECONDS
  }
  
  return Jwt.sign(payload, SECRET);
}

const verifyToken = (token) => {
 return Jwt.verify(token, SECRET)
}

const validateExpiration = (payload) => {
 if(Date.now() > payload.exp) throw new Error ('The token is expired');
}
app.get('/', (req, res) => {
  res.send("Hello World")
})


app.get('/token', (req, res) => {

  const token = singiToken(user);

  console.log('TOKEN: ', token);
  res.send({token})
})

app.get('/verifyToken', (req, res) => {
  let token = req.headers.authorization;
  token = token.split(" ")[1];

  const payload = verifyToken(token);

  validateExpiration(payload)
  
  res.send( token );
})


app.listen(3000, () => console.log('En el 3000'))