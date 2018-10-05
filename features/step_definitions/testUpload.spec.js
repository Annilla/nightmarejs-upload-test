const path = require('path');
const { Given, When, Then } = require('cucumber');
const chai = require('chai');
chai.should();

Given('Go to page {string}', async function (url) {
    await this.driver.viewport(1280, 600).goto(url).wait(1000);
});

When('Choose file {string}', async function (fileName) {
    await this.driver.wait('#files1').upload('#files1', path.join(__dirname, `../files/${fileName}`));
    this.actual = await this.driver
        .wait(1000)
        .evaluate(() => {
            let el = document.querySelector('#file_list ul li:nth-child(1) strong');
            return el.innerHTML;
        });
});

Then('Get file list {string}', async function (fileName) {
    this.actual.should.equal(fileName);
});