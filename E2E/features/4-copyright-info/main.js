var config = require('../../config.js');
var commonTests = require('../../common-tests/_commonTests.js');

describe('Copyright Info page', function () {
    before(function () {
        browser.url(config.baseUrl + '/copyright-info');
    });

    it('should have the correct title', function () {
        var title = browser.getTitle();
        expect(title).to.equal('Winter Guard Audio Editing » Copyright Info');
    });

    describe('common tests: links', function () {
        commonTests.links();
    });
});
