module.exports = {
    "Donate to Black Lives Matter": browser => {
        browser.url("https://blacklivesmatter.com/");
        browser.pause(1*1000);
        browser.click("#menu-primary-menu > li.menu-highlight.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-5749.nav-item > a");
        browser.pause(3*1000);
        const urgentText = '#contribution_blurb > p:nth-child(2) > strong > i';
        browser.assert.containsText(urgentText,"Fund the Movement");
        browser.pause(3 * 1000);
    }
}