import { bg, colors, font, text } from '@/utils/constants'
import { AuthContext } from '@/utils/context'
import { Icon } from '@rneui/themed'
import { Link, router } from 'expo-router'
import React, { useContext, useEffect, useState } from 'react'
import { Alert, Keyboard, TextInput, TouchableOpacity } from 'react-native'
import { Button, Image, ScrollView, Text, View } from 'react-native'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Page() {
    // const {bottom} = useSafeAreaInsets()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {setAuth, setUser} = useContext(AuthContext)
    const handleSubmit = () => {
        if(email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) && password.length>6){
            console.log("success")
            setAuth(true)
            setUser({email, password})
            router.replace("/")
        }else{
            Alert.alert("Invalid email or password")
        }
    }
  return (
    <View className={`flex flex-col w-full h-full flex-1 ${bg.light}`}>
        <View className='flex flex-row px-4 justify-between items-end py-1 '>
            <Link replace href={'/login'} className=' p-4 w-fit'>
            <Icon color={colors.dark} size={30} name="arrow-back-ios"/>
            </Link>
            <View className=' flex flex-row justify-center items-end '>
                <Image className=' h-[76px] w-[60px]' resizeMode='cover'  source={require("../../../../../public/assets/symbol.png")}/>
                <Text style={font.bold} className=' text-4xl pb-4'>Handme</Text>
            </View>
            <View className=' p-4 w-fit' style={{opacity:0, pointerEvents:"none"}}>
            <Icon color={colors.dark} size={30} name="arrow-back-ios"/>
            </View>
        </View>
        <View className={`flex flex-1 w-full h-full flex-col justify-end `}>
            <View className={` w-[100vw]  h-[50%]  block  overflow-clip`}>
        <Image source={require("../../../../../public/assets/people.png")} className=' w-[100vw]  h-[60vh]   ' resizeMode='cover' resizeMethod='scale'/>
        </View>
            <View  className={` ${bg.dark} flex flex-col items-center justify-center gap-4 z-10 text-center relative px-4 py-4 `}>
        {/* <Image source={require("../../../../public/assets/people.png")} className=' absolute top-[10vh] -z-10 left-0 right-0 -translate-y-full w-[100vw] flex h-[60vh] bg-red-500 self-end justify-end items-end ' resizeMode='cover' resizeMethod='scale'/> */}

                <Text style={font.semiBold} className={` text-[#00EAE4] text-3xl px-5 w-full text-start py-4`}>Log in</Text>
                <View className=' flex flex-col w-full gap-2'>
                    <View className=' flex flex-col gap-1 w-full'>
                        <Text style={font.medium} className=' text-slate-100 text-lg px-5'>Email</Text>
                        <TextInput textContentType='emailAddress' value={email} onChangeText={(text)=>setEmail(text)} style={font.semiBold} placeholder='johnhandmedown@gmail.com' className=' bg-slate-100 py-3 px-4 rounded-2xl text-xl'></TextInput>
                    </View>
                    <View className=' flex flex-col gap-1 w-full'>
                        <Text style={font.medium} className=' text-slate-100 text-lg px-5'>Password</Text>
                        <TextInput secureTextEntry={true} value={password} onChangeText={(text)=>{setPassword(text)}} textContentType='password' style={font.semiBold} placeholder="Not 'password'" className=' bg-slate-100 py-3 px-4 rounded-2xl text-xl'></TextInput>
                    </View>
                    <View className=' pt-6 pb-12 '>
                    <TouchableOpacity onPress={()=>{handleSubmit()}}>
                        <View className={`w-full py-5 flex flex-row gap-2 justify-center items-center rounded-2xl ${(email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) && password.length>6)?bg.light:"bg-slate-100"}`}>
                          <Text style={font.bold} className={` ${text.dark} text-2xl text-center`}>
                        {(email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) && password.length>6)?"Log in":"Next"}
                        </Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}
