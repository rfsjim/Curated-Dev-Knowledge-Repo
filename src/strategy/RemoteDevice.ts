/*
 * RemoteDevice.ts
 * This file implements a universal remote control using the Strategy Pattern.
 */

import {PowerControl, VolumeControl, ChannelControl} from "../interface";

class RemoteDevice {
    constructor(
        private power: PowerControl,
        private volume: VolumeControl,
        private channel: ChannelControl
    ) {}

    turnOn() {
        this.power.powerOn();
    }

    turnOff() {
        this.power.powerOff();
    }

    increaseVolume() {
        this.volume.volumeUp();
    }

    decreaseVolume() {
        this.volume.volumeDown();
    }

    muteVolume() {
        this.volume.mute();
    }

    unmuteVolume() {
        this.volume.unmute();
    }

    nextChannel() {
        this.channel.channelUp();
    }

    previousChannel() {
        this.channel.channelDown();
    }

    changeChannel(channel: number) {
        this.channel.changeChannelTo(channel);
    }

    setPowerStrategy(p: PowerControl) {
        this.power = p;
    }

    setVolumeStrategy(v: VolumeControl) {
        this.volume = v;
    }

    setChannelStrategy(c: ChannelControl) {
        this.channel = c;
    }
}
