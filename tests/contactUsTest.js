var contactUsPage = require("../pageObjects/ContactUs_Page.js");

beforeEach(async()=>
{
    await browser.url('/Contact-Us/contactus.html');
    await browser.maximizeWindow();
})

describe("Validate Contact Us Page functionality", ()=>{

    it("Test 1 . Welcome message is displayed if the user fills up all the information & press Submit", ()=>{
    
        /*contactUsPage.setFirstName("Kumar Amit");
        contactUsPage.setLastName("Bhabra");
        contactUsPage.setEmailAddress("amitxyz@yahoo.com");
        contactUsPage.setComments("Postive Test");*/
        contactUsPage.submitAllInformationForContactUs("Kumar Amit","Bhabra","amitxyz@yahoo.com","Postive Test");
        contactUsPage.submitBttnClick();
        contactUsPage.confirmSuccessfulSubmission();
    });

    it("Test 2. An error message is being displayed if information is missing",()=>{
        
        contactUsPage.setFirstName("Kumar Amit");
        contactUsPage.setLastName("Bhabra");
        contactUsPage.submitBttnClick();
        contactUsPage.unSuccessfulSubmission();
    });
});