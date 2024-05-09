import { MaterialIcons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Pressable } from "react-native";

export function MenuButton(){
    const navigation = useNavigation()
    const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer)
    return (
        <Pressable onPress={toggleMenu}>
            <MaterialIcons 
            className="text-white"
            name="menu" size={30}
            />
        </Pressable>
    )
}