import '@/styles/global.css'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { View } from 'react-native'

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar style='light' />
            <View className='flex-1 bg-gray-700'>
                <Slot />
            </View>
        </GestureHandlerRootView>
    )
}