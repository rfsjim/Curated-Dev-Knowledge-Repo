/*
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

interface PowerControl {
    powerOn(): void;
    powerOff(): void; 
}

interface VolumeControl {
    volumeUp(): void;
    volumeDown(): void;
    mute(): void;
    unmute(): void;
}

interface ChannelControl {
    channelUp(): void;
    channelDown(): void;
    changeChannelTo(channel: number): void;
}

interface TemperatureControl {
    temperatureUp(): void;
    temperatureDown(): void;
}

interface FanSpeedControl {
    fanSpeedUp(): void;
    fanSpeedDown(): void;
}

interface BrightnessControl {
    brightnessUp(): void;
    brightnessDown(): void;
}

interface MediaControl {
    play(): void;
    pause(): void;
    stop(): void;
    rewind(): void;
    fastForward(): void;
    record(): void;
  }
  
  interface NavigationControl {
    up(): void;
    down(): void;
    left(): void;
    right(): void;
    select(): void;
    back(): void;
    home(): void;
  }
  
  interface SourceControl {
    changeInput(source: string): void;
  }
  
  interface CaptionControl {
    toggleSubtitles(): void;
  }
  
  interface VoiceControl {
    activateMicrophone(): void;
  }