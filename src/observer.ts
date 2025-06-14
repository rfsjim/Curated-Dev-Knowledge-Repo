/*
 * observer.ts
 * Many to one relationship between the subject and observers
 * Alters RemoteDevice into a home hub doesn't just control one device
 * Broadcasts events like "night mode activated"  "morning wake up" or "movie scene"
 * Devices can subscribe to the home hub and react independently
 */

/*
 * Structure
 * subscribers: Map<SceneName, Observer[]>
 * mainState
 * subscribe(scene: SceneName, observer: Observer)
 * unsubscribe(scene: SceneName, observer: Observer)
 * notify(event: SceneName)
 * mainBusinessLogic()
 * 
 * for each (observer in observers)
 *  observer.update(scene)
 * 
 * Concrete subscribers
 * s = new ConcreateSubscriber()
 * update(scene: SceneName)
 */

/*
 * Subject and Observer interfaces
 * Observer Pattern
 * Declare methods for managing subscribers
 */

import { SmartTV, AirConditioner } from "./class";

type SceneName =
    | "movie-night"
    | "good-morning"
    | "good-night"
    | "warm-up-buttercup"
    | "party-time"
    | string;

export interface Subject {
    // Subscribe an observer to the subject
    subscribe(event: SceneName, observer: Observer): void;

    // Unsubscribe an observer to the subject
    unsubscribe(event: SceneName, observer: Observer): void;

    // Notify all observers about an event
    notify(event: SceneName): void; 
}

export interface Observer {
    // Receive update from the subject
    update(event: SceneName): void;
} 

export class HomeHub implements Subject {
    // HomeHub scenes for the observers
    public scene: SceneName;

    // Hash map of subscribers and scenes
    private subscribers: Map<SceneName, Observer[]> = new Map();

    subscribe(scene: SceneName, observer: Observer): void {
        // check if scene exists as a key
        if (!this.subscribers.has(scene)) {
            // add key-vaule pairs to hashmap
            this.subscribers.set(scene, []);
        }
        // get the value associated with a key and push new observer
        this.subscribers.get(scene)!.push(observer);
        
    }
    unsubscribe(scene: SceneName, observer: Observer): void {
        // get value associated with a key
        const observers = this.subscribers.get(scene);
        if (observers) {
            // remove observer by setting the value to an array without the given observer
            this.subscribers.set(
                scene,
                observers.filter(o => o != observer)
            );
            console.log("Remove Subscriber");
        }
    }

    notify(scene: SceneName): void {
        const observers = this.subscribers.get(scene);
        console.log(`Broadcast to trigger scene ${scene} change`);
        if (observers) {
            for (const observer of observers) {
                observer.update(scene);
            }
        }
    }
}

export class SmartTVObserver implements Observer {
    update(scene: SceneName): void {
        if (scene === "movie-night") {
            const tv = new SmartTV();
            tv.powerOn();
            tv.changeInput("HDMI1");
            console.log("📺 SmartTV: Power on, set input to HDMI1");
        }
    }
}

export class AirConditionerObserver implements Observer {
    update(scene: SceneName): void {
        const ac = new AirConditioner();

        switch (scene) {    
            case "movie-night":
                ac.temperatureUp();
                ac.fanSpeedDown();
                console.log("❄️ AC: Set temperature to 20°C and fan to low");
                break;
            case "good-morning":
                ac.temperatureUp();
                console.log("❄️ AC: Warming up to 22°C");
        }

        if (scene === "movie-night") {
            
        }
    }
}