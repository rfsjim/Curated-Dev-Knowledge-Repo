/*
 * factory.ts
 * Factory for creating lighting based scenes.
 * Different colours can create different moods as the situation requires
 * We have observer pattern implemented to allow for dynamic scene changes
 * We have decortator pattern implemented to allow led lighting to change colours and other effects.
 * Factory can let a method decide which subclass to instantiate
 * Lets use different colours and lighting effects to create different moods.
 * Blue is good for focus,
 * Red is good for relax & sleep,
 * Light Pink can strike a romantic mood,
 * Yellow is good for joy,
 * Orange sets a friendly tone and can assist with energy and wakefullness,
 * Green can help with calm,
 * Purple can help with inspiration
 */

import { LightSceneFactory,
         PowerControl,
         BrightnessControl,
        } from "./interface";

import { LightBulb } from "./class";

import { DimmingLightDecorator, RGBLightDecorator } from "./decorator";

export class FocusLightFactory implements LightSceneFactory {
    createLight(): PowerControl & BrightnessControl {
        let light = new LightBulb();
        light = new DimmingLightDecorator(light);
        light = new RGBLightDecorator(light, "blue"); // Blue for focus
        return light;
    }
}

export class RomanticLightFactory implements LightSceneFactory {
    createLight(): PowerControl & BrightnessControl {
        let light = new LightBulb();
        light = new DimmingLightDecorator(light);
        light = new RGBLightDecorator(light, "lightpink"); // Light Pink for romance
        return light;
    }
}

export class RelaxLightFactory implements LightSceneFactory {
    createLight(): PowerControl & BrightnessControl {
        let light = new LightBulb();
        light = new DimmingLightDecorator(light);
        light = new RGBLightDecorator(light, "red"); // Red for relaxation
        return light;
    }
}

export class JoyLightFactory implements LightSceneFactory {
    createLight(): PowerControl & BrightnessControl {
        let light = new LightBulb();
        light = new DimmingLightDecorator(light);
        light = new RGBLightDecorator(light, "yellow"); // Yellow for joy
        return light;
    }
}

export class FriendlyLightFactory implements LightSceneFactory {
    createLight(): PowerControl & BrightnessControl {
        let light = new LightBulb();
        light = new DimmingLightDecorator(light);
        light = new RGBLightDecorator(light, "orange"); // Orange for friendliness
        return light;
    }
}

export class CalmLightFactory implements LightSceneFactory {
    createLight(): PowerControl & BrightnessControl {
        let light = new LightBulb();
        light = new DimmingLightDecorator(light);
        light = new RGBLightDecorator(light, "green"); // Green for calm
        return light;
    }
}

export class InspireLightFactory implements LightSceneFactory {
    createLight(): PowerControl & BrightnessControl {
        let light = new LightBulb();
        light = new DimmingLightDecorator(light);
        light = new RGBLightDecorator(light, "purple"); // Purple for inspiration
        return light;
    }
}

export class SleepLightFactory implements LightSceneFactory {
    createLight(): PowerControl & BrightnessControl {
        let light = new LightBulb();
        light = new DimmingLightDecorator(light);
        light = new RGBLightDecorator(light, "red"); // Red for sleep
        return light;
    }
}

export class EnergyLightFactory implements LightSceneFactory {
    createLight(): PowerControl & BrightnessControl {
        let light = new LightBulb();
        light = new DimmingLightDecorator(light);
        light = new RGBLightDecorator(light, "orange"); // Orange for energy
        return light;
    }
}

const sceneFactoryMap = new Map<string, LightSceneFactory>([
    ["focus", new FocusLightFactory()],
    ["relax", new RelaxLightFactory()],
    ["romantic", new RomanticLightFactory()],
    ["joy", new JoyLightFactory()],
    ["friendly", new FriendlyLightFactory()],
    ["calm", new CalmLightFactory()],
    ["inspire", new InspireLightFactory()],
    ["sleep", new SleepLightFactory()],
    ["energy", new EnergyLightFactory()],
]);