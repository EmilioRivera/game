﻿import { config, setParam } from "../../../config/config";
import { Song } from "../../song/song";
import { IKeyboardAction } from "../i-actions";

export function down(keyboardActions: { [key: string]: IKeyboardAction }) {
    keyboardActions["down"] = {
        title: "Slow down",
        description: "Slow down the playback by 10 percent points.",
        triggerAction: (song: Song) => {
            setParam("p_speed", config.p_speed - 0.1);
        },
        getCurrentState: () => {
            return config.p_speed * 100;
        }
    };
}