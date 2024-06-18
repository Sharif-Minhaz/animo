import { cn } from "@/lib/utils";
import { TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface IButton {
	title: string;
	handlePress: () => void;
	containerStyles: string;
	textStyles?: string;
	isLoading?: boolean;
	icon?: string;
}

const CustomButton = ({
	title,
	icon,
	handlePress,
	containerStyles,
	textStyles,
	isLoading,
}: IButton) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.7}
			className={`bg-secondary min-h-[62px] flex-row gap-2 justify-center items-center rounded-xl mx-auto w-full ${containerStyles} ${
				isLoading ? "opacity-50" : ""
			}`}
			disabled={isLoading}
		>
			{icon && <FontAwesome name={icon as any} size={24} color="black" />}
			<Text className={cn("text-primary font-psemibold text-lg", textStyles)}>{title}</Text>
		</TouchableOpacity>
	);
};
export default CustomButton;
