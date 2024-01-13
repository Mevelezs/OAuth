# ----------> Firmando un JSON Web Token <------------
1. se usa lla libreria jsonwebtoken
2. Se hace una función que le pase un usuario 
3. Se crea el payload que es la info del usiario (nombre y contraseña) y un dato de expiración.
4. Se le apasa a la variable que trae la biblioteca de jsonwebtoken en su método .sign el payload creado y el secreto que es conque va a cifrar len token => se obtiene el token
