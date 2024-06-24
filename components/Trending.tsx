import { useState } from "react";
import {
	FlatList,
	Image,
	ImageBackground,
	ImageStyle,
	StyleSheet,
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
					className="w-52 h-72 rounded-[33px] my-5 overflow-hidden shadow-lg shadow-black/40"
					resizeMode="cover"
				>
					<View className="" style={styles.trapezoid}>
						<Text>{item.price}</Text>
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
			setActiveItem(viewableItems[0]?.index!);
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

const styles = StyleSheet.create({
	trapezoid: {
		borderBottomWidth: 20,
		borderBottomColor: "#555",
		borderLeftWidth: 10,
		borderLeftColor: "transparent",
		borderRightWidth: 10,
		borderRightColor: "transparent",
		borderStyle: "solid",
		width: 100,
	},
});

export default Trending;
