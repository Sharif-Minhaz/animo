// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

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
	return (
		<View className="justify-center items-center gap-2">
			<Ionicons
				style={style}
				className={cn("object-contain w-6 h-6", className)}
				size={20}
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
