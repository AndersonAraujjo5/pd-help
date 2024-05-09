import { DrawerContent } from '@/components/drawer-content'
import { CustomOptions } from '@/types/navigation'
import { Drawer } from 'expo-router/drawer'
export default function DrawerLayout() {
    return (
        <Drawer
            defaultStatus="open"
            screenOptions={{
                headerShown: false,
                drawerStyle: { width: '75%' },
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name='index'
                options={{
                    title: "Inicio", iconName: "home",
                } as CustomOptions}
            />
            <Drawer.Screen
                name='ticket'
                options={{
                    title: "Tickets", iconName: "airplane-ticket",
                } as CustomOptions}
            />
            <Drawer.Screen
                name='device'
                options={{
                    title: "Dispositivos", iconName: "devices",
                } as CustomOptions}
            />
            <Drawer.Screen
                name='task'
                options={{
                    title: "Tarefas", iconName: "checklist",
                } as CustomOptions}
            />
            <Drawer.Screen
                name='contact'
                options={{
                    title: "Contatos", iconName: "list",
                } as CustomOptions}
            />
        </Drawer>
    )
}