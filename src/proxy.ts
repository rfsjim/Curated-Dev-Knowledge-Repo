/**
 * proxy.ts
 * Proxy Pattern
 * A Structural Pattern
 * Used to control access to an object (security, lazy loading etc.)
 * The software equivalent of a bouncer, middleman, or stunt double. It’s not the real thing,
 * but it stands in front of the real thing, controlling access to it.
 * Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object.
 * A proxy controls access to the original object, allowing you to perform something either before or after the request
 * gets through to the original object.
 * standIn Patterns
 * Proxies give more control over accesing an object.
 * Using the stand in allows you to perform other work in input and output prior to getting to the object
 * Uses:
 * Access Control (Protection Proxy),
 * Lazy Initialization (Virtual Proxy),
 * Remote Proxy,
 * Caching Proxy,
 * Logging / Monitoring Proxy,
 * Smart Reference Proxy,
 */

/**
 * The Target interface shows what is in common between the actual object and the standIn
 */
interface Target {
    request(): void;
}

/**
 * The ActualObject does some logic
*/
class ActualObject implements Target {
    public request(): void {
        console.log('ActualObject doing some request');
        
    }
}

/**
 * The standIn is a proxy for the ActualObject and shares the interface with the ActualObject
*/
class StandIn implements Target {
    private actualObject: ActualObject;

    /**
     * The standIn needs a reference to the actual object
     */
    constructor(actualObject:ActualObject) {
        this.actualObject = actualObject;
    }

    /**
     * Perform results method on behalf of the actual object
    */
   public request(): void {
       if (this.checkData()) {
        this.actualObject.request();
        this.logRequest();
       }
   }

   private checkData(): boolean {
        // some checks of data validation should go here
        console.log('standIn: validating data prior to sending request to actual object');

        return true;
   }

   private logRequest():void {
    console.log('standIn: Logging timing of request being sent');
   }
}

/**
 * The clientCode allows interaction with both the proxy and the actual object
*/
function clientCode(target:Target) {
    // ...

    target.request();

    // ...
}

console.log('Client: Executing the client code on the actual object: ');
const actualObject = new ActualObject();
clientCode(actualObject);

console.log('');

console.log('Client: Executing the client code on the proxy: ');
const standIn = new StandIn(actualObject);
clientCode(standIn);