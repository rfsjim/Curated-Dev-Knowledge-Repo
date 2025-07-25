/*
 * main.ts
 * Example Singleton Implementation
 * An example of how the Singleton is used once the pattern is coded
 */

import { SingletonHomeHub } from '../singleton';
import { SmartTVObserver } from '../../behavioral/observer';
import { SmartTV } from '../../class';

const hub = SingletonHomeHub.getInstance();
const tv = new SmartTVObserver();

// Subscribe the TV to the "romantic" scene
hub.subscribe("romantic", tv);