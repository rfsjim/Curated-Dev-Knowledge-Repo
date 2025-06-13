/*
 * strategy.ts
 * Turning your control interfaces into a Strategy Pattern
 * Strategy – swap algorithms at runtime
 * We can compose controls in a modular, extensible way
 * Strategy defines a family of behaviours, encapsulates each one, and makes them interchangeable.
 * Plug-and-play control modules — the device doesn't care how something works, just that it has the correct control plugged in.
 */

import { PowerControl, VolumeControl, ChannelControl } from "./interface";

export class DefaultPower implements PowerControl {
    powerOn(): void {
        console.log("Powering on.");
    }
    powerOff(): void {
        console.log("Powering off.");
    }
}

export class LoudVolume implements VolumeControl {
    volumeUp(): void {
        console.log("Volume cranked up.");
    }
    volumeDown(): void {
        console.log("Volume dropped down.");
    }
    mute(): void {
        console.log("Muted");
    }
    unmute(): void {
        console.log("Unmuted");
    }
}

export class BasicChannelControl implements ChannelControl {
    private currentChannel = 1;

    channelUp(): void {
        this.currentChannel++;
        console.log(`Next Channel: ${this.currentChannel}`);
    }
    channelDown(): void {
        this.currentChannel--;
        console.log(`Previous Channel: ${this.currentChannel}`);
    }
    changeChannelTo(channel: number): void {
        this.currentChannel = channel;
        console.log(`Changing to ${channel}`);        
    }
}

export class SilentVolume implements VolumeControl {
    private volume = 0;

    volumeUp(): void {
        console.log("Volume is locked to silent");
    }
    volumeDown(): void {
        console.log("Volume is already silent");
    }
    mute(): void {
        console.log("Muted (already silent)");
    }
    unmute(): void {
        console.log("Unmute not allowed - silent mode active.");
    }
}

export class FancyChannelGuide implements ChannelControl {
    private currentChannel = 100;

    channelUp(): void {
        console.log("Navigate Up");
    }
    channelDown(): void {
        console.log("Navigate Down");
    }
    changeChannelTo(channel: number): void {
        this.currentChannel = channel;
        console.log(`Changing to ${channel}`);
    }
}