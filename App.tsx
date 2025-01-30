import { StatusBar } from "expo-status-bar";
import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet, View } from "react-native";
import { useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

export default function App() {
  const ipServer = "192.81.217.78";
  const client = "example";
  const videoSource = `http://${ipServer}:2809/${client}/final.mp4`;

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }

  useEffect(() => {
    // changeScreenOrientation();
  }, []);

  return (
    <View style={styles.container}>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
        nativeControls={false}
        onTouchEnd={(event) => {}}
      />
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
