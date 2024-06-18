import { useState } from "react";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	View,
	Text,
	Alert,
	Image,
	TouchableOpacity,
	ScrollView,
	ImageSourcePropType,
} from "react-native";
import uploadIco from "../../assets/images/upload.svg";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { useGlobalContext } from "@/contexts/GlobalProvider";

const Create = () => {
	const { user } = useGlobalContext();
	const [uploading, setUploading] = useState(false);
	const [form, setForm] = useState({
		title: "",
		video: null,
		thumbnail: null,
		prompt: "",
	});

	const openPicker = async (selectType) => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			if (selectType === "image") {
				setForm({
					...form,
					thumbnail: result.assets[0],
				});
			}
		}
	};

	const submit = async () => {
		if (form.prompt === "" || form.title === "" || !form.thumbnail || !form.video) {
			return Alert.alert("Please provide all fields");
		}

		setUploading(true);
		try {
			// await createVideoPost({
			// 	...form,
			// 	userId: user.$id,
			// });

			Alert.alert("Success", "Post uploaded successfully");
			router.push("/home");
		} catch (error) {
			Alert.alert("Error", error.message);
		} finally {
			setForm({
				title: "",
				video: null,
				thumbnail: null,
				prompt: "",
			});

			setUploading(false);
		}
	};

	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView className="px-4 my-6">
				<Text className="text-2xl text-white font-psemibold">Upload Your Animal</Text>

				<FormField
					title="Animal Name"
					value={form.title}
					placeholder="Give your animal a catchy name..."
					handleChangeText={(e) => setForm({ ...form, title: e })}
					otherStyles="mt-10"
				/>
				<FormField
					title="Animal Height"
					value={form.title}
					placeholder="Animal height here"
					handleChangeText={(e) => setForm({ ...form, title: e })}
					otherStyles="mt-10"
				/>
				<FormField
					title="Animal Family"
					value={form.title}
					placeholder="Animal family here"
					handleChangeText={(e) => setForm({ ...form, title: e })}
					otherStyles="mt-10"
				/>
				<FormField
					title="Animal Name"
					value={form.title}
					placeholder="Animal height here"
					handleChangeText={(e) => setForm({ ...form, title: e })}
					otherStyles="mt-10"
				/>
				<FormField
					title="Animal Price"
					value={form.title}
					placeholder="Animal price here"
					handleChangeText={(e) => setForm({ ...form, title: e })}
					otherStyles="mt-10"
				/>
				<FormField
					title="Animal Age"
					value={form.title}
					placeholder="Animal height here"
					handleChangeText={(e) => setForm({ ...form, title: e })}
					otherStyles="mt-10"
				/>
				<FormField
					title="Animal Location"
					value={form.title}
					placeholder="Animal location here"
					handleChangeText={(e) => setForm({ ...form, title: e })}
					otherStyles="mt-10"
				/>
				<View className="mt-7 space-y-2">
					<Text className="text-base text-gray-100 font-pmedium">Animal Photo</Text>

					<TouchableOpacity onPress={() => openPicker("image")}>
						{form.thumbnail ? (
							<Image
								source={{ uri: form.thumbnail.uri }}
								resizeMode="cover"
								className="w-full h-64 rounded-2xl"
							/>
						) : (
							<View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 flex justify-center items-center flex-row space-x-2">
								<Image
									source={uploadIco as ImageSourcePropType}
									resizeMode="contain"
									alt="upload"
									className="w-5 h-5"
								/>
								<Text className="text-sm text-gray-100 font-pmedium">
									Choose a file
								</Text>
							</View>
						)}
					</TouchableOpacity>
				</View>

				<FormField
					title="Animal Description"
					value={form.prompt}
					placeholder="Animal description here..."
					handleChangeText={(e) => setForm({ ...form, prompt: e })}
					otherStyles="mt-7"
					multiline
				/>

				<CustomButton
					title="Submit & Publish"
					handlePress={submit}
					containerStyles="mt-6"
					isLoading={uploading}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Create;
