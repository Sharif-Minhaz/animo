import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, FlatList, TouchableOpacity, ImageSourcePropType } from "react-native";
import logoutIcon from "../../assets/images/logout.png";
import { useGlobalContext } from "@/contexts/GlobalProvider";
import AnimalCard from "@/components/AnimalCard";
import InfoBox from "@/components/InfoBox";
import EmptyState from "./../../components/EmptyState";
import { animals } from "@/constants/Animals";

const Profile = () => {
	const { user, setUser, setIsLogged } = useGlobalContext();

	const logout = async () => {
		setUser(null);
		setIsLogged(false);

		router.replace("/sign-in");
	};

	return (
		<SafeAreaView className="bg-primary h-full">
			<FlatList
				data={animals}
				keyExtractor={(item) => item.id?.toString()}
				renderItem={({ item }) => (
					<AnimalCard
						id={item.id}
						name={item.name}
						description={item.description}
						image={item.image}
						price={item.price}
						ownerName={item.ownerName}
						ownerPhoto={item.ownerPhoto}
						createdAt={item.createdAt}
						weight={item.weight}
					/>
				)}
				ListEmptyComponent={() => (
					<EmptyState
						title="No Animals Found"
						subtitle="No Animals found for this profile"
					/>
				)}
				ListHeaderComponent={() => (
					<View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
						<TouchableOpacity onPress={logout} className="flex w-full items-end mb-10">
							<Image
								source={logoutIcon as ImageSourcePropType}
								resizeMode="contain"
								className="w-6 h-6"
							/>
						</TouchableOpacity>

						<View className="w-16 h-16 border border-secondary rounded-lg flex justify-center items-center">
							<Image
								source={{ uri: user?.photoURL }}
								className="w-[90%] h-[90%] rounded-lg"
								resizeMode="cover"
							/>
						</View>

						<InfoBox
							title={user?.username}
							containerStyles="mt-5"
							titleStyles="text-lg"
							subtitle=""
						/>

						<View className="mt-5 flex flex-row">
							<InfoBox
								title={animals.length?.toString() || "0"}
								subtitle="Sells"
								titleStyles="text-xl"
								containerStyles="mr-10"
							/>
							<InfoBox title="0" subtitle="Bought" titleStyles="text-xl" />
						</View>
					</View>
				)}
			/>
		</SafeAreaView>
	);
};

export default Profile;
