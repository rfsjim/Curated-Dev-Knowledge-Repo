/*
 * decorator.ts
 * Decorators wrap stuff to add behaviour,
 * used to attach additional responsibilities to an object dynamically.
 */
 
import { LightBulb } from "./class";
import { LightTemperatureStrategy } from "./interface";


/**
 * Decorator pattern allows us to add new functionality to an existing object
 * without altering its structure.
 * Here, we create decorators for different types of light bulbs.
 */

export class RGBLightDecorator extends LightBulb {
    constructor(private decoratedLightBulb: LightBulb, private color: string = "white") {
        super();
        console.log("🌈 RGB Light Bulb Initialized");
        console.log(`Initial color set to ${color}.`);
        
    }

    turnOn(): void {
        this.decoratedLightBulb.powerOn();
        console.log("RGB Light Bulb is now on.");
    }

    turnOff(): void {
        this.decoratedLightBulb.powerOff();
        console.log("RGB Light Bulb is now off.");
    }

    changeColor(color: string): void {
        console.log(`RGB Light Bulb color changed to ${color}.`);
    }
}

export class DimmingLightDecorator extends LightBulb {
    constructor(private decoratedLightBulb: LightBulb) {
        super();
        console.log("💡 Dimming Light Bulb Initialized");
    }

    dim(): void {
        this.decoratedLightBulb.brightnessDown();
        console.log("Dimming the light.");
    }

    brighten(): void {
        this.decoratedLightBulb.brightnessUp();
        console.log("Brightening the light.");
    }
}

export class FlashingLightDecorator extends LightBulb {
    constructor(private decoratedLightBulb: LightBulb) {
        super();
        console.log("🚨 Flashing Light Bulb Initialized");
    }

    flash(): void {
        console.log("Flashing the light.");
        this.decoratedLightBulb.powerOn();
        setTimeout(() => {
            this.decoratedLightBulb.powerOff();
            console.log("Flashing light turned off.");
        }, 1000); // Flash for 1 second
    }
}

export class DiscoLightDecorator extends LightBulb {
    constructor(private decoratedLightBulb: LightBulb) {
        super();
        console.log("🕺 Disco Light Bulb Initialized");
    }
    discoMode(): void {
        console.log("Disco mode activated! 🎉");
        this.decoratedLightBulb.powerOn();
        setInterval(() => {
            const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.changeColor(randomColor);
        }, 1000); // Change color every second
    }
    changeColor(color: string): void {
        console.log(`Disco Light Bulb color changed to ${color}.`);
    }
}

/*
 * Strategy pattern class for EITHER OR options
 * Where decorators don't fit well,
 * we can use a strategy pattern to encapsulate the light temperature behavior.
 * This allows us to change the light temperature behavior at runtime
 * without modifying the light bulb's code.
 */  

export class CoolWhiteLightStrategy implements LightTemperatureStrategy {
    applyLightTemperature(): void {
        console.log("Setting light temperature to Cool White.  ❄️");
    }
}

export class WarmWhiteLightStrategy implements LightTemperatureStrategy {
    applyLightTemperature(): void {
        console.log("Setting light temperature to Warm White.  🔥");
    }
}