/*
 * main.ts
 * This is the decorator example usage file.
 * It demonstrates how to use the decorators defined in decorator.ts.
 * Light decorators like CoolWhite, RGB, Dimming, and WarmWhite.
 * Each decorator adds specific functionality to the base lightBulb class. 
 */

import { LightBulb } from '../class';
import { CoolWhiteLightStrategy,
         WarmWhiteLightStrategy,
         RGBLightDecorator,
         DimmingLightDecorator,
         FlashingLightDecorator,
         DiscoLightDecorator
        } from '../decorator';

const basic = new LightBulb();
const coolWhite = new CoolWhiteLightStrategy();
const warmWhite = new WarmWhiteLightStrategy();
const rgb = new RGBLightDecorator(basic);
const dimming = new DimmingLightDecorator(basic);
const flashing = new FlashingLightDecorator(basic);
const disco = new DiscoLightDecorator(basic);

// Using the CoolWhite light strategy
coolWhite.applyLightTemperature();

// Using the WarmWhite light strategy
warmWhite.applyLightTemperature();

// Using the RGB light decorator
rgb.turnOn();
rgb.changeColor('blue');
rgb.turnOff();

// Using the Dimming light decorator
dimming.dim();
dimming.brighten();

// Using the Flashing light decorator
flashing.flash();

// Using the Disco light decorator
disco.discoMode();