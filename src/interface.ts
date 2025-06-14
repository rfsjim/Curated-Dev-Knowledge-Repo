/*
 * interface.ts
 * Behavioural Interfaces
 * Thinking about real-world interfaces for a remote control we have behaviours including:
 * powering on,
 * powering off,
 * increasing volume,
 * decreasing volume,
 * channel up,
 * channel down,
 * fan speed up,
 * fan speed down,
 * temperature up,
 * temperature down,
 * brightness up,
 * brightness down
 */

export interface PowerControl {
    powerOn(): void;
    powerOff(): void; 
}

export interface VolumeControl {
    volumeUp(): void;
    volumeDown(): void;
    mute(): void;
    unmute(): void;
}

export interface ChannelControl {
    channelUp(): void;
    channelDown(): void;
    changeChannelTo(channel: number): void;
}

export interface TemperatureControl {
    temperatureUp(): void;
    temperatureDown(): void;
}

export interface FanSpeedControl {
    fanSpeedUp(): void;
    fanSpeedDown(): void;
}

export interface BrightnessControl {
    brightnessUp(): void;
    brightnessDown(): void;
}

export interface MediaControl {
    play(): void;
    pause(): void;
    stop(): void;
    rewind(): void;
    fastForward(): void;
    record(): void;
  }
  
export interface NavigationControl {
    up(): void;
    down(): void;
    left(): void;
    right(): void;
    select(): void;
    back(): void;
    home(): void;
  }
  
export interface SourceControl {
    changeInput(source: string): void;
  }
  
export interface CaptionControl {
    toggleSubtitles(): void;
  }
  
export interface VoiceControl {
    activateMicrophone(): void;
  }