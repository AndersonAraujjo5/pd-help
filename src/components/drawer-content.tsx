import { MaterialIcons } from '@expo/vector-icons'
import {DrawerContentComponentProps, DrawerNavigationOptions} from '@react-navigation/drawer'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DrawerButton } from "@/components/drawer-button";
import { CustomOptions } from "@/types/navigation";

export type IconNameProps = keyof typeof MaterialIcons.glyphMap


export function DrawerContent(drawerProps: DrawerContentComponentProps){
    return(
        <View className='flex-1 bg-gray-700 overflow-hidden p-5'>
            <View className='mt-20 w-full border-b pb-6 border-gray-500'>
                <Text className='text-2xl text-white'>Anderson</Text>
                <Text className='text-md mt-3 text-white'>PontoData</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:42}}>
                <View className='mt-2'>
                    {
                        drawerProps.state.routes.map((route, index) => {
                            const isFocused = drawerProps.state.index === index
                            const options = drawerProps.descriptors[route.key].options as CustomOptions
                            
                            if(options.title === undefined ) return;

                            const onPress = () => {
                                const event = drawerProps.navigation.emit({
                                    type:"drawerItemPress",
                                    canPreventDefault: true,
                                    target: route.key
                                })

                                if(!isFocused && !event?.defaultPrevented){
                                    drawerProps.navigation.navigate(route.name, route.params)
                                }
                            }

                            return (
                                <View key={route.key}>
                                    <DrawerButton iconName={options.iconName}
                                        title={options.title}
                                        isFocused={isFocused}
                                        onPress={onPress}
                                        />
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}