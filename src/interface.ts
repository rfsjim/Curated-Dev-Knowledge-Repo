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

  class SmartTV implements
    PowerControl,
    VolumeControl,
    ChannelControl,
    BrightnessControl,
    SourceControl,
    CaptionControl,
    MediaControl,
    NavigationControl {
      
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

    class AirConditioner implements
      PowerControl,
      TemperatureControl,
      FanSpeedControl {

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