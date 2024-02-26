import { Link, router, useRootNavigationState } from "expo-router";
import React, { useContext, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { font } from "@/utils/constants";
import { Icon } from '@rneui/themed';
import { AuthContext } from "@/utils/context";

export default function Page() {
  return (
    <View className="flex flex-1">
      <Header />
      <Content />
      <Footer />
    </View>
  );
}

function Content() {
  const {auth,setUser,setAuth,user} = useContext(AuthContext);
  const rootNavigationState = useRootNavigationState();
  const signOut = () => {
    setUser(null);
    setAuth(false);
  }
  useEffect(() => {
    if(!auth&&rootNavigationState?.key){
      router.replace("/login");
    }
  }, [rootNavigationState,auth])
  
  return (
    <View   className="flex-1 w-full h-full">
      <View className="py-12 md:py-24 lg:py-32 xl:py-48">
        <View className=" flex w-full h-full justify-center items-center px-4 md:px-6">
          <View className="flex flex-col items-center justify-center gap-4 text-center">
            <Text
            style={font.bold}
              role="heading"
              className="text-3xl text-center native:text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-nowrap"
            >
              Welcome to Handme {user?.email}
            </Text>
            <Text style={font.semiBold} className="mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400">
              Discover and collaborate on handme. Explore our services now.
            </Text>

            <View className="gap-5 flex native:flex-row  justify-center items-center">
              <Link
                suppressHighlighting
                style={font.medium}
                className="flex h-fit py-4 px-6 rounded-full text-2xl bg-[#003A37] hover:scale-90 transition-all ease-in-out text-slate-50 "
                href="/login"
              >
                Visit Repo
              </Link>
              <TouchableOpacity
                className="flex h-fit py-4 px-6 rounded-full text-2xl text-[#003A37] border border-[#003A37] hover:scale-90 transition-all ease-in-out bg-slate-50 "

               onPress={()=>{signOut(); console.log("hii")}}>
              <Text
                style={font.medium}
                className="text-2xl text-[#003A37] "
                
              >
                Sign out
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function Header() {
  return (
    <View>
      <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between ">
        <Link style={font.extraBold} className=" flex-1 text-xl text-[#003A37] items-center justify-center" href="https://google.com">
          Handme
        </Link>
        <View className="flex flex-row gap-4 sm:gap-6">
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/profile"
          > 
            <Icon type="antdesign" name="user" raised reverse color={'#003A37'} size={20} className=" text-lg font-bold"/>
          </Link>
        </View>
      </View>
    </View>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="flex shrink-0 bg-gray-100 native:hidden"
      style={{ paddingBottom: bottom }}
    >
      
    </View>
  );
}
