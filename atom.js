import { atom } from "jotai";

const activityAtom = atom({
    action: "playing",
    time: 0,
    slide: 0,
});

const lockAtom = atom(true);
const frameHeightAtom = atom();
const playingAtom = atom(false);
const percentAtom = atom(0);
const currentTimeAtom = atom("00:00");
const currentAtom = atom(0);
const durationTimeAtom = atom("00:00");
const durationAtom = atom();
const jumpAtom = atom();
const withFrameAtom = atom(true);
const withVideoAtom = atom(true);
const darkModeAtom = atom(false);
const mobileModeAtom = atom(false);
export {
    activityAtom,
    playingAtom,
    lockAtom,
    withFrameAtom,
    withVideoAtom,
    darkModeAtom,
    mobileModeAtom,
    frameHeightAtom,
    currentTimeAtom,
    percentAtom,
    durationTimeAtom,
    durationAtom,
    jumpAtom,
    currentAtom,
};
