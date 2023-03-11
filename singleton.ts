/**
 * Singleton Patterns
 * Share a single global instance throughout the application
 * Singletons are created once and can be access globally
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