# Software design patterns in Typescript

Example code for design patterns. Where it makes sense classes and themes are continued across patterns.
These aren't supposed to be fully functioning source code but templates, examples, and descriptions to assist in solving problems.
The 23 Gang of Four (`GoF`) design patterns fall into three big camps:

1. Creational Patterns
2. Structural Patterns
3. Behavioral Patterns

## Creational Patterns
How do we create objects in a flexible way?

- Singleton – only one instance allowed
- Simple Factory - Honourable mention not a true pattern
- Factory Method – let a method decide which subclass to instantiate
- Abstract Factory – a factory of related factories
- Builder – step-by-step construction
- Prototype – clone existing objects

## Structural Patterns
How do we organise objects and classes?

- Adapter – convert one interface to another (e.g., old plug to new socket)
- Bridge – separate abstraction from implementation
- Composite – tree structure (like folders & files)
- Decorator – wrap stuff to add behaviour, used to attach additional responsibilities to an object dynamically.
- Facade – a simple front for complex subsystems
- Flyweight – reuse shared objects to save memory
- Proxy – control access to an object (security, lazy loading etc.)

## Behavioral Patterns
How do objects communicate and behave?

- Strategy – swap algorithms at runtime, defines family of algorithms encapsulates each one and makes them interchangeable. 
- Observer – event listeners / publish-subscribe. Defines one to many dependency between objects so that when one object changes state all it's dependents are notified. 
- Command – encapsulate actions as objects
- Chain of Responsibility – pass requests down a chain
- Interpreter – language grammar representation
- Iterator – go through elements without exposing the structure
- Mediator – centralised communication between objects
- Memento – capture and restore object state
- State – change behaviour based on internal state
- Template Method – define skeleton of an algorithm with steps filled in by subclasses
- Visitor – add operations to objects without changing them