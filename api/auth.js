export default function handler(req,res){

  const ADMIN_EMAIL = "admin@tournyx.com";

  const ADMIN_PASSWORD = "Dark2005$";

  const { email, password } = req.body;

  if(
    email === ADMIN_EMAIL &&
    password === ADMIN_PASSWORD
  ){

    return res.json({
      admin:true
    });

  }

  res.status(401).json({
    error:"invalid"
  });

}