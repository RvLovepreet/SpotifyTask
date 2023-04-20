// Track player
import { Event } from 'react-native-track-player';
import TrackPlayer from 'react-native-track-player';
// Track player
// service.js
module.exports = async function () {
  // This service needs to be registered for the module to work
  // but it will be used later in the "Receiving Events" section
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());
  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
  TrackPlayer.addEventListener(Event.RemotePause, () =>
    TrackPlayer.skipToNext(),
  );
  TrackPlayer.addEventListener(Event.RemotePause, () =>
    TrackPlayer.skipToPrevious(),
  );
};
