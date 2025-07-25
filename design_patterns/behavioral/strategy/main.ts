// main.ts

import { RemoteDevice } from "./RemoteDevice";
import { DefaultPower, LoudVolume, BasicChannelControl, SilentVolume, FancyChannelGuide } from "../strategy";

const tv = new RemoteDevice(
    new DefaultPower(),
    new LoudVolume(),
    new BasicChannelControl()
);

tv.turnOn();
tv.increaseVolume();
tv.nextChannel();
tv.changeChannel(42);

tv.setVolumeStrategy(new SilentVolume());
tv.muteVolume();

tv.setChannelStrategy(new FancyChannelGuide());
tv.changeChannel(101);