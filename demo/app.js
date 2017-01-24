var GPIO = require('../GPIO_light.js');

setInterval(function() {
    if (GPIO.flowCount > 7) {
        GPIO.flowCount = 0;
    } else {
        GPIO.flowCount++;
    }
    let keyDownNum = GPIO.getKeyDownNum();
    switch (keyDownNum) {
        case 1:
            GPIO.flowLight(GPIO.flowCount);
            break;
        case 2:
            GPIO.halfToggleLight(GPIO.flowCount);
            break;
        case 3:
            GPIO.toggleLight(GPIO.flowCount);
            break;
        case 4:
            GPIO.shutDown(GPIO.flowCount);
            break;
    }
}, 100);

setInterval(function() {
    GPIO.testKey1();
    GPIO.testKey2();
    GPIO.testKey3();
    GPIO.testKey4();
}, 1);

setInterval(function() {
    if (GPIO.rPwm > 1024) {
        GPIO.rPwm = GPIO.randomGenerate();
    }
    GPIO.rPwm++;
    if (GPIO.gPwm > 1024) {
        GPIO.gPwm = GPIO.randomGenerate();
    }
    GPIO.gPwm++;
    if (GPIO.bPwm > 1024) {
        GPIO.bPwm = GPIO.randomGenerate();
    };
    GPIO.bPwm++;
    GPIO.breathLED(GPIO.rPwm, GPIO.gPwm, GPIO.bPwm);
}, 5);
