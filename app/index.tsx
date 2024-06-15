import { StatusBar } from "expo-status-bar";
import { Image, ImageSourcePropType, ScrollView, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { brand, cards } from "../constants/Images";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "./../contexts/GlobalProvider";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
	const { loading, isLogged } = useGlobalContext();

	if (!loading && isLogged) return <Redirect href="/home" />;

	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<View className="w-full h-full justify-center items-center px-4">
					<Image
						source={brand as ImageSourcePropType}
						className="h-[84px] w-[130px]"
						resizeMode="contain"
					/>
					<Image
						source={cards as ImageSourcePropType}
						className="max-w-[380px] w-full h-[300px]"
						resizeMode="contain"
					/>
					<View className="relative mt-5">
						<Text className="text-[27px] text-white font-bold text-center">
							Find Your Perfect Eid Ul Adha Sacrifice {"\n"} With{" "}
							<Text className="text-secondary-200">Animo</Text>
						</Text>
					</View>

					<Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
						Your Trusted Marketplace for best Animals. Celebrate Eid with Convenience
						and Trust.
					</Text>

					<CustomButton
						title="Continue with Google"
						handlePress={() => router.push("/")}
						containerStyles="w-full mt-7"
					/>
				</View>
			</ScrollView>

			<StatusBar backgroundColor="#161622" style="light" />
		</SafeAreaView>
	);
}
