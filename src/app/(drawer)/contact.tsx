import { Text, View } from "react-native";
import { MenuButton } from "@/components/menu-button";
import { SearchButton } from "@/components/search-button";
import { Link } from "expo-router";
import { Item } from "@/components/item";
import { MaterialIcons } from "@expo/vector-icons";

export default function Contact() {
    return (
        <View className="flex-1 bg-gray-700 pt-16 p-4">
            <View className="w-full flex-row justify-between">
                <MenuButton />
                <SearchButton />
            </View>

            <Text>Contact</Text>

        </View>


    )
}