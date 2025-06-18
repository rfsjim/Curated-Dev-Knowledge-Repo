/**
 * singleton.ts
 * Singleton Patterns
 * Share a single global instance throughout the application
 * Singletons are created once and can be access globally
 * Singleton – only one instance allowed (like Highlander, but boring)
 * Sounds like something that occurs at high noon in the Wild West. Sir, this town ain’t big enough for the both of us.
 * There’s only one of me… and that’s all this program’s ever gonna get.
 * Make sure there’s only one instance of a class, and provide a global point of access to it.
 * A single config manager
 * A single logging service
 * A single database connection pool
 * System Clock or Timer
 * Game Engine Manager / Audio Manager
 * A single point of truth 
 * 
 * In our examples the home hub is the subject in the observer --> subject relationship.
 * This means that it is the one in the one to many relationship.
 * The home hub is the one that controls the devices and broadcasts events.
 * The devices are the many that subscribe to the home hub and react independently.
 * It makes sense to have the home hub as a singleton, as it is the
 * central point of control for the devices. 
*/

import { SmartTV, AirConditioner } from "./class";

type SceneName =
    | "movie-night"
    | "good-morning"
    | "good-night"
    | "warm-up-buttercup"
    | "party-time"
    | string;

// ToDo: Refactor into interace.ts

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

export class SingletonHomeHub {
    private static instance: SingletonHomeHub;

    // HomeHub scenes for the observers
        public scene: SceneName;
    
    // Hash map of subscribers and scenes
    private subscribers: Map<SceneName, Observer[]> = new Map();

    private constructor() {
        // Initialize the home hub
        // Private so no one can call `new HomeHub()` directly
    }

    public static getInstance(): SingletonHomeHub {
        if (!SingletonHomeHub.instance) {
            SingletonHomeHub.instance = new SingletonHomeHub();
        }
        return SingletonHomeHub.instance;
    }

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

/**
 * Method to test the singleton class
 */

function testSingleton() {
    const homeHub1 = SingletonHomeHub.getInstance();
    const homeHub2 = SingletonHomeHub.getInstance();

    if (homeHub1 === homeHub2) {
        console.log('Singletons match, code works as both variables contain the same instance');
    } else {
        console.log('Singletons do not match, code does not work as variables contain different instances');
        
    }
}

testSingleton();