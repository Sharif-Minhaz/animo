import { cn } from "@/lib/utils";
import { TouchableOpacity, Text } from "react-native";

interface IButton {
	title: string;
	handlePress: () => void;
	containerStyles: string;
	textStyles?: string;
	isLoading?: boolean;
}

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }: IButton) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.7}
			className={`bg-secondary min-h-[62px] justify-center items-center rounded-xl ${containerStyles} ${
				isLoading ? "opacity-50" : ""
			}`}
			disabled={isLoading}
		>
			<Text className={cn("text-primary font-psemibold text-lg", textStyles)}>{title}</Text>
		</TouchableOpacity>
	);
};
export default CustomButton;
