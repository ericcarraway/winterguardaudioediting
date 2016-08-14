var config = require('../../config.js');
var commonTests = require('../../common-tests/_commonTests.js');

describe('Client Login page', function () {
    before(function () {
        browser.url(config.baseUrl + '/client-login');
    });

    it('should have the correct title', function () {
        var title = browser.getTitle();
        expect(title).to.equal('Winter Guard Audio Editing » Client Login');
    });

    describe('common tests: links', function () {
        commonTests.links();
    });
});
