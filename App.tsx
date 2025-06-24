import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { ToastAndroid, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const webviewRef = useRef<WebView>(null);
  const uri =
    "http://137.184.209.81:2809/start?client=frangoDoCabelo&orientation=vertical";

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
        source={{
          uri,
        }}
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
              ToastAndroid.show("Error, reloading now", ToastAndroid.BOTTOM);
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
