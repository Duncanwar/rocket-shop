const assert = require('assert');
const MembershipApplication = require('../../membership_application')

    describe('Applying for mission', function(){
        let validApp;
        before(function(){
            validApp = new MembershipApplication({
                first:"Test",
                last:"last",
                email: "test@test.com",
                age: 30,
                height:66,
                weight:180
            })
        })
     describe("Application is valid...", function(){
       it("is valid",()=>{
           assert(validApp.isValid(),"Not Valid")
       });
       it("report a valid email",()=>{assert(validApp.emailIsValid())});
       it("report  valid height",()=>{assert(validApp.heightIsValid())});
       it("report valid age",()=>{assert(validApp.ageIsValid())})
       it("report valid weight",()=>{assert(validApp.weightIsValid())});
       it("report valid name",()=>{assert(validApp.nameIsValid())});
    })
    describe("Application is invalid...", function(){
        it("is past the validUntil date",()=>{
            const app = new MembershipApplication({validUntil: Date.parse("01/01/2010")})
            assert(app.expired())
        });

     })
})