/*
 * main.ts
 * This is an example of usage for the example smart home automation system.
 * It can create pre-configured lighting setups (a.k.a. scenes) based on mood/intent
 * (focus, sleep, romance, etc).
 * Is using factory patterns to create decorators for led lights creating the scenes.
 * The decorators are used to add functionality to the base LED light class. 
 */

import { ConfigurableLightFactory } from '../factory';
import { DimmingLightDecorator } from '../../structural/decorator';

// Factory Registry Map
const sceneFactoryMap = new Map<string, ConfigurableLightFactory>([
    ["focus", new ConfigurableLightFactory("blue", [l => new DimmingLightDecorator(l)])],
    ["relax", new ConfigurableLightFactory("red", [l => new DimmingLightDecorator(l)])],
    ["romantic", new ConfigurableLightFactory("lightpink", [l => new DimmingLightDecorator(l)])],
    ["joy", new ConfigurableLightFactory("yellow", [l => new DimmingLightDecorator(l)])],
    ["friendly", new ConfigurableLightFactory("orange", [l => new DimmingLightDecorator(l)])],
    ["calm", new ConfigurableLightFactory("green", [l => new DimmingLightDecorator(l)])],
    ["inspire", new ConfigurableLightFactory("purple", [l => new DimmingLightDecorator(l)])],
    ["sleep", new ConfigurableLightFactory("red", [l => new DimmingLightDecorator(l)])],
    ["energy", new ConfigurableLightFactory("orange", [l => new DimmingLightDecorator(l)])],
]);

const scene = "romantic"; // Example scene
const light = sceneFactoryMap.get(scene)?.createLight();
light?.powerOn();
