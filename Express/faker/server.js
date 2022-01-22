const express = require("express");  //This is Step 1
const app = express();
const port = 8000;
const faker = require('@faker-js/faker'); //STEP 4-this I have to get from GitHub instructions for this library also had to download library in terminal
    

app.get("/api", (req, res) => {  // req= request and res= response-This is STEP 3 to make sure that localhost is working.
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res)=>{
    let newUser = new User()
    res.json({result:newUser})
})

app.get("/api/companies/new", (req, res)=>{
    let newCompany = new Company()
    res.json({result:newCompany})
})

app.get("/api/user/company", (req, res)=>{
    let newUser = new User ()
    let newCompany = new Company()
    res.json({results:newUser, newCompany})
})

console.log(faker.name.firstName()) //This is step 5 to make sure that we are getting data from faker library.

class User {
    constructor(){
        this._id= faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }

}
console.log(new User());


class Company {
    constructor(){
        this._id= faker.datatype.uuid();
        this.companyName = faker.company.companyName();
        this.companyAddress= faker.fake('{{address.streetAddress}}, {{address.cityName}}, {{address.state}} {{address.zipCode}} {{address.country}}'); 

    }
}
console.log(new Company());





app.listen( port, () => console.log(`Listening on port: ${port}`) );  //This is Step 2