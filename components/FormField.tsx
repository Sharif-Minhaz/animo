import { View, Text, TextInput } from "react-native";

interface IProps {
	title: string;
	value: string;
	placeholder: string;
	handleChangeText: () => void;
	otherStyles?: string;
	multiline?: boolean;
}

const FormField = ({
	title,
	value,
	placeholder,
	handleChangeText,
	otherStyles,
	multiline,
	...props
}: IProps) => {
	return (
		<View className={`space-y-2 ${otherStyles}`}>
			<Text className="text-base text-gray-100 font-pmedium">{title}</Text>

			<View
				className={`w-full ${
					multiline ? "h-32" : "h-16"
				} px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row`}
			>
				<TextInput
					multiline
					className="flex-1 text-white font-psemibold text-base h-full"
					value={value}
					placeholder={placeholder}
					placeholderTextColor="#7B7B8B"
					onChangeText={handleChangeText}
					{...props}
				/>
			</View>
		</View>
	);
};

export default FormField;
