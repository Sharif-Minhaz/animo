import { View, Text, Image, ImageSourcePropType } from "react-native";
import menu from "../assets/images/menu.png";
import cow from "../assets/images/cow.jpeg";

export interface IAnimal {
	id: number;
	name: string;
	description: string;
	image: string;
	price: number;
	ownerName: string;
	ownerPhoto: string;
	createdAt: string;
}

const AnimalCard = ({
	id,
	name,
	description,
	image,
	price,
	ownerName,
	ownerPhoto,
	createdAt,
}: IAnimal) => {
	return (
		<View className="flex flex-col items-center px-4 mb-14">
			<View className="flex flex-row gap-3 items-start">
				<View className="flex justify-center items-center flex-row flex-1">
					<View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
						<Image
							source={{ uri: ownerPhoto }}
							className="w-full h-full rounded-lg"
							resizeMode="cover"
						/>
					</View>

					<View className="flex justify-center flex-1 ml-3 gap-y-1">
						<Text className="font-psemibold text-sm text-white" numberOfLines={1}>
							{ownerName}
						</Text>
						<Text className="text-xs text-gray-100 font-pregular" numberOfLines={1}>
							{createdAt}
						</Text>
					</View>
				</View>

				<View className="pt-2">
					<Image
						source={menu as ImageSourcePropType}
						className="w-5 h-5"
						resizeMode="contain"
					/>
				</View>
			</View>
			<View className="mt-2 flex-1">
				<Image
					source={cow as ImageSourcePropType}
					className="w-[300px]"
					resizeMode="contain"
				/>
			</View>
		</View>
	);
};

export default AnimalCard;
