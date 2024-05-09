import { MaterialIcons } from "@expo/vector-icons"
import { Link } from "expo-router"
import { Text, View } from "react-native"


type IconNameProps = keyof typeof MaterialIcons.glyphMap

export type ItemProps = {
    icon?: IconNameProps
    title: string
    href: string
    count?: number
    textColor?: string
}

export function Item({ icon, title, href, count, textColor = "text-white" }: ItemProps) {
    return (
        <Link href={href} className="bg-gray-600 rounded-lg p-5 my-3" >
            <View className="flex-row gap-5 w-full">
                <View className="flex-row gap-4 w-80">
                    {icon ?
                        <MaterialIcons
                            className="text-orange-600"
                            name={icon}
                            size={20}
                        />
                        : null
                    }
                    <Text className={`${textColor} font-bold flex-1 text-2xl`}>
                        {title}
                    </Text>
                </View>
                {
                    count ?
                        <Text className={`${textColor} font-bold text-2xl w-24`}>{count}</Text>
                        : null
                }
            </View>
        </Link>
    )
}