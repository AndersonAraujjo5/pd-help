import { Item } from "@/components/item";
import { MenuButton } from "@/components/menu-button";
import { SearchButton } from "@/components/search-button";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, TextInput, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

type TicktsProps = {
    id: number
    href: string
    title: string
    count: number
    textColor: string
}

export default function Ticket() {
    const typeTickets: Array<TicktsProps> = [
        {
            id: 0, href: '/my-ticket', title: "Meus Tickets", textColor: 'text-teal-400', count: 5
        },
        {
            id: 1, href: '/waiting', title: "Aguardando", textColor: 'text-red-200', count: 50
        },
        {
            id: 2, href: '/expired', title: "Expirados", textColor: 'text-orange-400', count: 12
        },
        {
            id: 3, href: '/paused', title: "Pausados", textColor: 'text-yellow-400', count: 14
        },

    ]
    return (
        <View className="flex-1 bg-gray-700 pt-16 p-4">
            <View className="w-full flex-row justify-between">
                <MenuButton />
                <SearchButton />
            </View>

            <View className="p-4">
                <Text className="text-2xl text-white font-bold">Tickets</Text>
                <View className="flex-row items-center mt-5 gap-4">
                    <TextInput
                        className="w-5/6 p-3 border rounded-full text-white border-gray-500"
                        placeholder="Filtrar por cliente"
                        placeholderTextColor={colors.white}
                    />
                    <Pressable className="w-1/6 rounded-full bg-gray-300 items-center p-3">
                        <MaterialIcons name="search" size={20} />
                    </Pressable>
                </View>
                <View className="mt-4">
                    <FlatList
                        data={typeTickets}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <Item href={item.href} title={item.title} textColor={item.textColor} count={item.count} />}
                    />
                </View>
            </View>
        </View>
    )
}