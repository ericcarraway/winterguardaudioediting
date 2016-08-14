var config = require('../../config.js');
var commonTests = require('../../common-tests/_commonTests.js');

describe('Welcome page', function () {
    before(function () {
        browser.url(config.baseUrl);
    });

    it('should have the correct title', function () {
        var title = browser.getTitle();
        expect(title).to.equal('Winter Guard Audio Editing');
    });

    describe('common tests: links', function () {
        commonTests.links();
    });
});

// address this issue:
// Error: This Page has not been published.

// demo Grammarly app
// we offer a wide range of services - "wide" is an overused word
