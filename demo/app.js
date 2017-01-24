var GPIO = require('../GPIO_light.js');
GPIO.initKey();
GPIO.startFlowLED(100);
GPIO.startBreathLED(5);
