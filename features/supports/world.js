const { setDefaultTimeout, setWorldConstructor, AfterAll } = require('cucumber');
const Nightmare = require('nightmare');
require('nightmare-upload')(Nightmare);
const regularNightmare = Nightmare({
    show: true
});

function CustomWorld({parameters}) {
    this.driver = regularNightmare;
}

// Set Nightmare Timeout
setDefaultTimeout(20 * 1000);

// Set Nightmare Variables
setWorldConstructor(CustomWorld)

// Set Nightmare End Afterall
AfterAll(async function () {
    await regularNightmare.end();
})