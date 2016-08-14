var config = require('../../config.js');
var commonTests = require('../../common-tests/_commonTests.js');

// SoundCloud widget needs addressing
describe.skip('Portfolio page', function () {
    before(function () {
        browser.url(config.baseUrl + '/portfolio');
    });

    it('should have the correct title', function () {
        var title = browser.getTitle();
        expect(title).to.equal('Winter Guard Audio Editing » Portfolio');
    });

    describe('common tests: links', function () {
        commonTests.links();
    });

    // Audio samples are available on SoundCloud http://soundcloud.com/winterguard-audio-editing
});
