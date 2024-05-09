import { Text, View } from "react-native";
import { MenuButton } from "@/components/menu-button";
import { SearchButton } from "@/components/search-button";
import { Link } from "expo-router";
import { Item } from "@/components/item";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home() {
    return (
        <View className="flex-1 bg-gray-700 pt-16 p-4">
            <View className="w-full flex-row justify-between">
                <MenuButton />
                <SearchButton />
            </View>

            <View className="p-5">
                <Text className="text-white text-3xl">
                    Ola, <Text className="font-bold">Anderson</Text>
                </Text>
                <Text className="text-white text-lg">
                    Selecione a opção que deseja ver:
                </Text>

                <View className="mt-3">
                    <Item href="ticket" icon="airplane-ticket" title="Tickets" />
                    <Item href="/device" icon="devices" title="Dispositivos" />
                    <Item href="/task" icon="checklist" title="Tarefas" />
                    <Item href="/contact" icon="list" title="Contatos" />
                </View>
                <View className="items-center mt-5">
                    <Link
                        className="w-full p-3 text-white border rounded-full border-gray-500
                        text-center "
                        href='/new-ticket'>
                        <MaterialIcons name="add" size={20} />
                        <Text className="text-xl">Tickets</Text>
                    </Link>
                </View>
            </View>

        </View>


    )
}