import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { StyleSheet, View } from "react-native";
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
        source={{
          uri: "http://157.245.139.146:2809/start?client=example&orientation=vertical",
        }}
        allowsFullscreenVideo
        allowsInlineMediaPlayback
        startInLoadingState
        cacheEnabled
        mixedContentMode="always"
        allowUniversalAccessFromFileURLs
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
    backgroundColor: "#201c2c",
  },
});
