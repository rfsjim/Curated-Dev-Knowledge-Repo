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
        } from "../interface";

import { LightBulb } from "../class";

import { DimmingLightDecorator, RGBLightDecorator } from "../structural/decorator";

// A Parameterised (or Configurable) Factory
// One flexible factory that takes in the mood or colour as a parameter.
// allows us to create different light scenes with different colors and decorators.
export class ConfigurableLightFactory implements LightSceneFactory {
    constructor (
        private color: string,
        private decorators: ((light: PowerControl & BrightnessControl) => PowerControl & BrightnessControl)[]
    ) {}

    createLight(): PowerControl & BrightnessControl {
        let light: PowerControl & BrightnessControl = new LightBulb();
        for (const decorate of this.decorators) {
            light = decorate(light);
        }
        return new RGBLightDecorator(light, this.color);
    }

    createDimmingLight(): PowerControl & BrightnessControl {
        let dimmingLight: PowerControl & BrightnessControl = new LightBulb();
        for (const decorate of this.decorators) {
            dimmingLight = decorate(dimmingLight);
        }
        return new DimmingLightDecorator(dimmingLight);
    }
}