/*
 * class.ts
 * Hold the class objects that implement the interface behaviours.
 */

import {
    PowerControl,
    VolumeControl,
    ChannelControl,
    BrightnessControl,
    SourceControl,
    CaptionControl,
    MediaControl,
    NavigationControl,
    TemperatureControl,
    FanSpeedControl
} from "./interface.js";

export class SmartTV implements
    PowerControl,
    VolumeControl,
    ChannelControl,
    BrightnessControl,
    SourceControl,
    CaptionControl,
    MediaControl,
    NavigationControl {

      constructor(tvName: string = "Smart TV") {
        console.log(`${tvName} 📺 Smart TV Initialized`);
      }
      
      powerOn(): void {
        console.log("TV On");
      }
      powerOff(): void {
        console.log("TV Off");
      }

      volumeUp(): void {
        console.log("Volume Up");
      }
      volumeDown(): void {
        console.log("Volume Down");
      }
      mute(): void {
        console.log("Mute");
      }
      unmute(): void {
        console.log("Unmute");
      }

      channelUp(): void {
        console.log("Channel Up");
      }
      channelDown(): void {
        console.log("Channel Down");
      }
      changeChannelTo(channel: number): void {
        console.log(`Changing to channel ${channel}`);
      }

      brightnessUp(): void {
        console.log("Brightness Up");
      }
      brightnessDown(): void {
        console.log("Brightness Down");
      }

      changeInput(source: string): void {
        console.log(`Changing input to ${source}`);
      }

      toggleSubtitles(): void {
        console.log("Toggling Subtitles");
      }

      play(): void {
        console.log("Playing");
      }
      pause(): void {
        console.log("Paused");
      }
      stop(): void {
        console.log("Stopped");
      }
      rewind(): void {
        console.log("Rewinding");
      }
      fastForward(): void {
        console.log("Fast Fowarding");
      }
      record(): void {
        console.log("Recording");
      }

      up(): void {
        console.log("Nav Up");
      }
      down(): void {
        console.log("Nav DOwn");
      }
      left(): void {
        console.log("Nav Left");
      }
      right(): void {
        console.log("Nav Right");
      }
      select(): void {
        console.log("Select");
      }
      back(): void {
        console.log("Back");
      }
      home(): void {
        console.log("Home");
      }
    }

export class AirConditioner implements
    PowerControl,
    TemperatureControl,
    FanSpeedControl {
  constructor(acName: string = "Air Conditioner") {
        console.log(`${acName} ❄️ Air Conditioner Initialized`);
      }

      powerOn(): void {
        console.log("AC On");
      }
      powerOff(): void {
        console.log("AC Off");
      }

      temperatureUp(): void {
        console.log("Temperature Up");
      }
      temperatureDown(): void {
        console.log("Temperature Down");
      }

      fanSpeedUp(): void {
        console.log("Fan Speed Up");
      }
      fanSpeedDown(): void {
        console.log("Fan Speed Down");
      }
  }

  export class LightBulb implements
    PowerControl,
    BrightnessControl {
  constructor() {
        console.log("💡 Light Bulb Initialized");
      }

      powerOn(): void {
        console.log("Light On");
      }
      powerOff(): void {
        console.log("Light Off");
      }

      brightnessUp(): void {
        console.log("Brightness Up");
      }
      brightnessDown(): void {
        console.log("Brightness Down");
      }
    }