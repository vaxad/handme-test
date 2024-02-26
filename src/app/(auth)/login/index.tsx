import { bg, colors, font, text } from '@/utils/constants'
import { Icon } from '@rneui/themed'
import { Link } from 'expo-router'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Button, Image, ScrollView, Text, View } from 'react-native'

export default function Page() {
  return (
    <View className={`flex flex-col w-full h-full flex-1 ${bg.light}`}>
        <View className='flex flex-row px-4 justify-between items-end py-1 '>
            <Link replace href={'/'} className=' p-4 w-fit'>
            <Icon color={colors.dark} size={30} name="arrow-back-ios"/>
            </Link>
            <View className=' flex flex-row justify-center items-end '>
                <Image className=' h-[76px] w-[60px]' resizeMode='cover'  source={require("../../../../public/assets/symbol.png")}/>
                <Text style={font.bold} className=' text-4xl pb-4'>Handme</Text>
            </View>
            <View className=' p-4 w-fit' style={{opacity:0, pointerEvents:"none"}}>
            <Icon color={colors.dark} size={30} name="arrow-back-ios"/>
            </View>
        </View>
        <View className={`flex flex-1 w-full h-full flex-col justify-end `}>
            <View className=' w-[100vw]  h-[50%]  block  overflow-clip'>
        <Image source={require("../../../../public/assets/people.png")} className=' w-[100vw]  h-[60vh]   ' resizeMode='cover' resizeMethod='scale'/>
        </View>
            <View className={` ${bg.dark} flex flex-col items-center justify-center gap-4 z-10 text-center relative px-4 py-4 `}>
        {/* <Image source={require("../../../../public/assets/people.png")} className=' absolute top-[10vh] -z-10 left-0 right-0 -translate-y-full w-[100vw] flex h-[60vh] bg-red-500 self-end justify-end items-end ' resizeMode='cover' resizeMethod='scale'/> */}

                <Text style={font.semiBold} className={` text-[#00EAE4] text-3xl px-5 w-full text-start py-4`}>Log in</Text>
                <View className=' flex flex-col w-full gap-2'>
                    <Link href={'/login/form'} style={font.bold} className={`w-full py-5 rounded-2xl text-center ${bg.light} ${text.dark} text-2xl`}>
                        Email
                    </Link>
                    <TouchableOpacity onPress={()=>{console.log("hii")}}>
                        <View className={`w-full py-5 flex flex-row gap-2 justify-center items-center rounded-2xl bg-slate-100`}>
                            <Image source={require("public/assets/google.png")} className=' h-8 w-8'></Image>
                          <Text style={font.bold} className={` ${text.dark} text-2xl text-center`}>
                        Log in with google
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View className=' flex flex-row w-full pt-3 pb-6 px-5 justify-center gap-1 items-center'>
                    <Text className=' text-slate-50'>Don’t have an account yet?</Text>
                    <Text style={font.semiBold} className=' text-[##00EAE4] '>Sign up</Text>
                </View>
            </View>
        </View>
    </View>
  )
}
