// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { useGlobalContext } from "@/contexts/GlobalProvider";
import { cn } from "@/lib/utils";
import Ionicons from "@expo/vector-icons/Ionicons";
import { type ComponentProps } from "react";
import { Text, View } from "react-native";

interface TabBarIconProps extends ComponentProps<typeof Ionicons> {
	focused?: boolean;
	iconText: string;
}

export function TabBarIcon({
	style,
	className,
	focused,
	color,
	iconText,
	...rest
}: TabBarIconProps) {
	const { isAdmin } = useGlobalContext();

	return (
		<View className="justify-center items-center gap-2">
			<Ionicons
				style={style}
				className={cn("object-contain w-6 h-6", className)}
				size={isAdmin ? 20 : 24}
				{...rest}
			/>
			<Text
				className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
				style={{ color: color }}
			>
				{iconText}
			</Text>
		</View>
	);
}
