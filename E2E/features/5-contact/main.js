var config = require('../../config.js');
var commonTests = require('../../common-tests/_commonTests.js');

describe('Contact page', function () {
    before(function () {
        browser.url(config.baseUrl + '/contact');
    });

    it('should have the correct title', function () {
        var title = browser.getTitle();
        expect(title).to.equal('Winter Guard Audio Editing » Contact');
    });

    describe('common tests: links', function () {
        commonTests.links();
    });
});

// email should not be present - SPAM
// info@...
