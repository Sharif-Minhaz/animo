import { useState } from "react";
import {
	FlatList,
	ImageBackground,
	ImageStyle,
	Text,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
	ViewToken,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { IAnimal } from "./AnimalCard";
import { useRouter } from "expo-router";
import { readableNumber } from "@/lib/utils";

const zoomIn = {
	0: {
		scale: 0.9,
	},
	1: {
		scale: 1,
	},
};

const zoomOut = {
	0: {
		scale: 1,
	},
	1: {
		scale: 0.9,
	},
};

interface IProps {
	activeItem: string;
	item: IAnimal;
}

const TrendingItem = ({ activeItem, item }: IProps) => {
	const router = useRouter();

	return (
		<Animatable.View
			className="mr-5"
			animation={
				activeItem === item?.id.toString()
					? (zoomIn as Animatable.CustomAnimation<TextStyle & ViewStyle & ImageStyle>)
					: (zoomOut as Animatable.CustomAnimation<TextStyle & ViewStyle & ImageStyle>)
			}
			duration={500}
		>
			<TouchableOpacity
				onPress={() => router.push(`/${item.id}`)}
				className="relative flex justify-center items-center"
				activeOpacity={0.7}
			>
				<ImageBackground
					source={{ uri: item.image }}
					className="w-52 h-72 overflow-hidden rounded-[33px] my-5 shadow-lg shadow-black/40"
					resizeMode="cover"
				>
					<View className="relative">
						<View className="absolute bg-[#FF9001] rotate-45 w-[180px] top-[18px] -right-[50px]">
							<Text className="flex items-center text-center px-2 py-2 justify-center">
								{readableNumber(item.price)} ৳
							</Text>
						</View>
					</View>
				</ImageBackground>
			</TouchableOpacity>
		</Animatable.View>
	);
};

const Trending = ({ animals }: { animals: IAnimal[] }) => {
	const [activeItem, setActiveItem] = useState(animals[0]?.id);

	const viewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken<IAnimal>[] }) => {
		if (viewableItems.length > 0) {
			setActiveItem(viewableItems[0]?.item.id!);
		}
	};

	return (
		<FlatList
			showsHorizontalScrollIndicator
			indicatorStyle="white"
			data={animals}
			horizontal
			initialScrollIndex={0}
			keyExtractor={(item) => item?.id?.toString()}
			renderItem={({ item }) => (
				<TrendingItem activeItem={activeItem?.toString()} item={item} />
			)}
			onViewableItemsChanged={viewableItemsChanged}
			viewabilityConfig={{
				itemVisiblePercentThreshold: 90,
			}}
		/>
	);
};

export default Trending;
