var config = require('../../config.js');
var commonTests = require('../../common-tests/_commonTests.js');

describe('Services page', function () {
    before(function () {
        browser.url(config.baseUrl + '/services');
    });

    it('should have the correct title', function () {
        var title = browser.getTitle();
        expect(title).to.equal('Winter Guard Audio Editing » Services');
    });

    describe('common tests: links', function () {
        commonTests.links();
    });
});
