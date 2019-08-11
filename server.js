let express = require("express");
let path = require("path");
const nodeMailer = require('nodemailer');

let PORT = 3000;
let app = express();
const USER = process.env.USER;
const PASS = process.env.PASS;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.set('public', __dirname + '/public');

app.set('view engine', 'html');


app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});
  
app.post('/api/contacts', (req, res) => {
  console.log("posted");
  console.log(req.body);
  const output = `
    <p><h2>You have a new contact request!</h2></p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.first_name} ${req.body.last_name} </li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
      <li>Address: ${req.body.address}</li>
    </ul>
    <h3>Message:</h3>
    <p>"${req.body.message}"</p>
  `;

  let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: USER,
      pass: PASS
    }
});
let mailOptions = {
    from: '"NodeMailer Contact" <FROM@gmail.com>', // sender address
    to: 'TO@gmail.com',
    subject: 'New Contact Request',
    text: 'You have a new contact!', // plain text body
    html: `<b> ${output} </b>` // html body
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    
    });
});

  app.get("/html/send", function(req, res) {
  return res.json(req.body);
});


app.listen((process.env.PORT || 3000), function() {
  console.log("App running on port " + PORT + "!");
});
  

