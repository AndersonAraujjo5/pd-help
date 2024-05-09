import { MaterialIcons } from "@expo/vector-icons";
import clsx from "clsx";
import { Pressable, PressableProps, Text, View } from "react-native";

export type iconNameProps = keyof typeof MaterialIcons.glyphMap

type DrawerButtonProps = PressableProps & {
    title: string
    isFocused?:boolean,
    iconName: iconNameProps
}
export function DrawerButton({title, isFocused, iconName, ...rest}: DrawerButtonProps){
    return(
        <Pressable className="py-2 w-full" {...rest} >
            <View className={clsx("flex-row items-center gap-4 px-6 mt-2",{
                'bg-gray-600 py-5': isFocused
            })}>
                <MaterialIcons name={iconName} size={20} className="text-white text-xl" />
                <Text className="text-white text-xl">{title}</Text>
            </View>
        </Pressable>
    )
}