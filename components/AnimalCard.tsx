import { View, Text, Image, ImageSourcePropType, TouchableOpacity, Modal } from "react-native";
import menu from "../assets/images/menu.png";
import { readableNumber } from "@/lib/utils";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";

export interface IAnimal {
	id: number;
	name: string;
	description: string;
	image: string;
	price: number;
	ownerName: string;
	ownerPhoto: string;
	createdAt: string;
	weight?: number;
}

const AnimalCard = ({
	id,
	name,
	description,
	image,
	price,
	ownerName,
	ownerPhoto,
	weight,
	createdAt,
}: IAnimal) => {
	const router = useRouter();
	const [menuVisible, setMenuVisible] = useState(false);
	const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
	const menuButtonRef = useRef<TouchableOpacity>(null);

	const handleMenuToggle = () => {
		menuButtonRef.current?.measure(
			(fx, fy, width: number, height: number, px: number, py: number) => {
				setMenuPosition({
					top: py + height - 13,
					left: px - 115,
				});
			}
		);
		setMenuVisible(!menuVisible);
	};

	const handleMenuItemPress = (action: string) => {
		console.log(action);
		setMenuVisible(false);
		// Implement the action (delete, edit, save)
	};

	return (
		<View className="flex flex-col items-center px-4 mb-28">
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

				<TouchableOpacity ref={menuButtonRef} onPress={handleMenuToggle}>
					<View className="pt-2">
						<Image
							source={menu as ImageSourcePropType}
							className="w-5 h-5"
							resizeMode="contain"
						/>
					</View>
				</TouchableOpacity>

				{menuVisible && (
					<Modal
						transparent={true}
						animationType="fade"
						visible={menuVisible}
						onRequestClose={() => setMenuVisible(false)}
					>
						<TouchableOpacity
							className="flex-1 justify-center items-center"
							activeOpacity={1}
							onPressOut={() => setMenuVisible(false)}
						>
							<View
								className="absolute top-7.5 right-5 w-36 bg-[#252932] rounded-lg shadow-md shadow-black/10"
								style={{ top: menuPosition.top, left: menuPosition.left }}
							>
								<TouchableOpacity
									className="py-3 px-5 border-b border-gray-700"
									onPress={() => handleMenuItemPress("save")}
								>
									<Text className="text-gray-300 text-[14px]">Save</Text>
								</TouchableOpacity>
								<TouchableOpacity
									className="py-3 px-5 border-b border-gray-700"
									onPress={() => handleMenuItemPress("edit")}
								>
									<Text className="text-gray-300 text-[14px]">Edit</Text>
								</TouchableOpacity>
								<TouchableOpacity
									className="py-3 px-5"
									onPress={() => handleMenuItemPress("delete")}
								>
									<Text className="text-red-600 text-[14px]">Delete</Text>
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					</Modal>
				)}
			</View>
			<TouchableOpacity
				className="mt-3.5 flex-1 h-[200px] w-full"
				onPress={() => router.push(`/${id}`)}
				activeOpacity={0.7}
			>
				<Image
					source={{ uri: image }}
					height={100}
					className="rounded-t"
					style={{ height: "100%", width: "100%" }}
					resizeMode="cover"
				/>
				<View className="border border-[#646464] border-t-0 p-3 rounded-b-md bg-[#1b2129]">
					<Text className="text-secondary font-semibold text-[20px]">{name}</Text>
					<View className="flex-row gap-x-5 mt-2">
						<Text className="text-gray-100 text-[16px]">
							<Text className="font-semibold">Weight:</Text> {weight} kg
						</Text>
						<Text className="text-gray-100 text-[16px]">
							<Text className="font-semibold">Price:</Text> {readableNumber(price)} tk
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default AnimalCard;
