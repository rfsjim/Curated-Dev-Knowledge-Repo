/**
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
*/

class Singleton {
    /**
     * Track the instance of the Singleton class
    */

    private static instance: Singleton;

    /**
     * Need a private constructor to prevent direct calls to the constructor 
    */

    private constructor() {}

    /** 
     * Need a static method to controls the Singleton instance
    */

    public static getInstance(): Singleton {
        if (!Singleton.instance)
        {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public SingletonMethod() {
        // ...
    }
}

/**
 * Method to test the singleton class
 */

function testSingleton() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 == s2) {
        console.log('Singletons match, code works as both variables contain the same instance');
    } else {
        console.log('Singletons do not match, code does not work as variables contain different instances');
        
    }
}

testSingleton();