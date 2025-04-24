import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { ToastAndroid, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const webviewRef = useRef<WebView>(null);
  return (
    <View
      style={styles.container}
      onTouchStart={() => {
        if (webviewRef.current) {
          webviewRef.current.reload();
        }
      }}
    >
      <WebView
        ref={webviewRef}
        style={styles.browser}
        source={{ uri: "http://192.168.100.100:5500/" }}
        allowsFullscreenVideo
        allowsInlineMediaPlayback
        allowsPictureInPictureMediaPlayback={false}
        allowUniversalAccessFromFileURLs
        startInLoadingState
        cacheEnabled
        mixedContentMode="always"
        onError={() => {
          setTimeout(() => {
            if (webviewRef.current) {
              ToastAndroid.show("Error, reloading now", ToastAndroid.BOTTOM);
              webviewRef.current.reload();
            }
          }, 2000);
        }}
        onHttpError={() => {
          setTimeout(() => {
            if (webviewRef.current) {
              ToastAndroid.show(
                "Http Error, reloading now",
                ToastAndroid.BOTTOM
              );
              webviewRef.current.reload();
            }
          }, 2000);
        }}
        onTouchStart={() => {
          if (webviewRef.current) {
            webviewRef.current.reload();
          }
        }}
      />
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  browser: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
