import { animals } from "@/constants/Animals";
import { readableNumber } from "@/lib/utils";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import menu from "../../assets/images/menu.png";
import Divider from "@/components/Divider";
import CustomButton from "@/components/CustomButton";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

const SingleAnimal = () => {
	const { animalId } = useLocalSearchParams();
	const router = useRouter();

	const animalInfo = animals.find((data) => data.id === Number(animalId));

	if (!animalInfo) {
		alert("Animal information not found!");
		return router.push("/home");
	}

	return (
		<GestureHandlerRootView>
			<ScrollView>
				<SafeAreaView className="bg-primary h-full p-4">
					<View className="flex flex-row gap-3 items-start">
						<View className="flex justify-center items-center flex-row flex-1">
							<View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
								<Image
									source={{ uri: animalInfo.ownerPhoto }}
									className="w-full h-full rounded-lg"
									resizeMode="cover"
								/>
							</View>

							<View className="flex justify-center flex-1 ml-3 gap-y-1">
								<Text
									className="font-psemibold text-sm text-white"
									numberOfLines={1}
								>
									{animalInfo.ownerName}
								</Text>
								<Text
									className="text-xs text-gray-100 font-pregular"
									numberOfLines={1}
								>
									{animalInfo.createdAt}
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
					<View className="mt-3.5 flex-1">
						<View className="h-[200px] w-full">
							<Image
								source={{ uri: animalInfo.image }}
								height={100}
								className="rounded-t"
								style={{ height: "100%", width: "100%" }}
								resizeMode="cover"
							/>
						</View>

						<View className="border border-[#646464] border-t-0 p-3 rounded-b-md bg-[#1b2129]">
							<Text className="text-secondary font-semibold text-[20px]">
								{animalInfo.name}
							</Text>
							<View className="flex-row gap-x-5 mt-2 mb-4">
								<Text className="text-gray-100 text-[16px]">
									<Text className="font-semibold">Weight:</Text>{" "}
									{animalInfo.weight} kg
								</Text>
								<Text className="text-gray-100 text-[16px]">
									<Text className="font-semibold">Price:</Text>{" "}
									{readableNumber(animalInfo.price)} tk
								</Text>
							</View>
							<Divider />
							<Text className="text-gray-300 font-normal mt-3 mb-4 text-[16px] leading-6">
								{animalInfo.description}
							</Text>
							<Divider />
							<View className="flex-row gap-x-5 my-2">
								<Text className="text-gray-100 text-[16px]">
									<Text className="font-semibold">Type:</Text> {animalInfo.type}
								</Text>
								<Text className="text-gray-100 text-[16px]">
									<Text className="font-semibold">Family:</Text>{" "}
									{animalInfo.family}
								</Text>
							</View>
							<View className="flex-row gap-x-5 mb-2">
								<Text className="text-gray-100 text-[16px]">
									<Text className="font-semibold">Height:</Text>{" "}
									{animalInfo.height} m
								</Text>
								<Text className="text-gray-100 text-[16px]">
									<Text className="font-semibold">Location:</Text>{" "}
									{animalInfo.location}
								</Text>
							</View>
							<View className="flex-row mb-2.5">
								<Text className="text-gray-100 text-[16px]">
									<Text className="font-semibold">Gender:</Text>{" "}
									{animalInfo.gender}
								</Text>
							</View>
							<Divider />
							<CustomButton
								icon="money"
								title="Buy this animal"
								handlePress={() => router.push("/home")}
								containerStyles="w-full mt-7 mx-auto mt-5 mb-2"
							/>
						</View>
					</View>
				</SafeAreaView>
			</ScrollView>
		</GestureHandlerRootView>
	);
};
export default SingleAnimal;
