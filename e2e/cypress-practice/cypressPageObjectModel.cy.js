import { Homepage } from "../../../../cypress/pageObjectModel/homepage";
const homepagePom= new Homepage()
import { HomepageSecond } from "../../../../cypress/pageObjectModel/homepageSecond";

describe('Page Object Model Kullanimi', () => {
    it('Page object model birinci kullanim ornekleri', () => {
        homepagePom.navigate()
        homepagePom.pricingBtn()
    });
});

describe.only('Page Object Model ikinci kullanim', () => {
    it('Page object model birinci kullanim ornekleri', () => {
        HomepageSecond.navigate()
        HomepageSecond.pricingBtn.click()
    });
});