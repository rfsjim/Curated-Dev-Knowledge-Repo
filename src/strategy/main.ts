// main.ts

import { RemoteDevice } from "./RemoteDevice";
import { DefaultPower, LoudVolume, BasicChannelControl } from "../strategy";

const tv = new RemoteDevice(
    new DefaultPower(),
    new LoudVolume(),
    new BasicChannelControl()
);

tv.turnOn();
tv.increaseVolume();
tv.nextChannel();
tv.changeChannel(42);