import AnimalCard from "@/components/AnimalCard";
import { animals } from "@/constants/Animals";
import { View, Text, Image, ImageSourcePropType, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { favicon } from "@/constants/Images";
import EmptyState from "@/components/EmptyState";
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import { FlatList } from "react-native";
import { useGlobalContext } from "@/contexts/GlobalProvider";

const Bookmark = () => {
	const { user } = useGlobalContext();

	return (
		<SafeAreaView className="bg-primary h-full">
			<FlatList
				data={animals}
				renderItem={({ item }) => {
					return (
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
					);
				}}
				keyExtractor={(item) => item.id.toString()}
				ListHeaderComponent={() => (
					<View className="flex my-6 px-4 space-y-6">
						<View className="flex justify-between items-start flex-row mb-6">
							<View>
								<Text className="font-pmedium text-sm text-gray-100">
									Welcome back,
								</Text>
								<Text className="text-2xl font-psemibold text-white">
									{user?.username}
								</Text>
							</View>

							<View className="mt-1.5">
								<Image
									source={favicon as ImageSourcePropType}
									className="w-9 h-10"
									resizeMode="contain"
								/>
							</View>
						</View>
						<Text className="text-lg font-pregular text-gray-100 mb-3">
							Saved Animals
						</Text>
					</View>
				)}
				ListEmptyComponent={() => (
					<EmptyState title="No Animals Found" subtitle="No Animals created yet" />
				)}
				refreshControl={<RefreshControl refreshing={false} onRefresh={() => {}} />}
			/>
		</SafeAreaView>
	);
};
export default Bookmark;
