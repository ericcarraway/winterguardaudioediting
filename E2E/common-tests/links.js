module.exports = function () {
    var selector = 'div.menu-navigation-container a';

    var arrayLinkTextActual;
    var arrayLinkTextExpected = [
        'Welcome',
        'Services',
        'Portfolio',
        'Pricing',
        'Copyright Info',
        'Contact',
        'Client Login'
    ];

    before(function () {
        arrayLinkTextActual = browser.getText(selector);
    });

    it('should have seven links', function () {
        expect(arrayLinkTextActual.length).to.equal(7);
    });

    arrayLinkTextExpected.forEach(checkLinks);

    function checkLinks(expectedLink, index) {
        // 1: Welcome
        // 2: Services
        // ...
        it((index + 1) + ': ' + expectedLink, function () {
            expect(arrayLinkTextActual).to.include(expectedLink);
        });
    }
};
