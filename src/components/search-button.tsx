import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export function SearchButton(){
    return (
        <Pressable>
            <MaterialIcons 
            className="text-white"
            name="search" size={30}
            />
        </Pressable>
    )
}