import "../global.css";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import {
  useFonts,
  Epilogue_400Regular,
  Epilogue_500Medium,
  Epilogue_600SemiBold,
  Epilogue_700Bold,
  Epilogue_800ExtraBold,
  Epilogue_900Black,
} from '@expo-google-fonts/dev';
import { View } from "react-native";
import { AuthProvider } from "@/utils/context";

export default function Layout() {
  const { top } = useSafeAreaInsets();
  const [fontsLoaded] = useFonts({
    Epilogue_400Regular,
    Epilogue_500Medium,
    Epilogue_600SemiBold,
    Epilogue_700Bold,
    Epilogue_800ExtraBold,
    Epilogue_900Black,
  });
  return fontsLoaded && (
    <>
      <AuthProvider>
        <View style={{ height: top }} className=" w-full flex dark:bg-[#003A37] light:bg-[#003A37]"></View>
        <SafeAreaProvider>
        <Slot />
        </SafeAreaProvider>
      </AuthProvider>
    </>
  );
}
