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

type TCreate = {
	name: string;
	height: string;
	family: string;
	price: string;
	age: string;
	location: string;
	photo: any;
	description: string;
};

const defaultFields = {
	name: "",
	height: "",
	family: "",
	price: "",
	age: "",
	location: "",
	photo: undefined,
	description: "",
};

const Create = () => {
	const { user } = useGlobalContext();
	const [uploading, setUploading] = useState(false);
	const [form, setForm] = useState<TCreate>(defaultFields);

	const openPicker = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setForm({
				...form,
				photo: result.assets[0],
			});
		}
	};

	const submit = async () => {
		if (form.name === "" || form.description === "" || !Number(form.price) || !form.photo) {
			return Alert.alert("Please provide all fields & provide information correctly");
		}

		setUploading(true);
		try {
			Alert.alert("Success", "Animal uploaded successfully");
			router.push("/home");
		} catch (error: any) {
			Alert.alert("Error", error.message);
		} finally {
			setForm(defaultFields);

			setUploading(false);
		}

		console.log(form);
	};

	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView className="px-4 my-6">
				<Text className="text-2xl text-white font-psemibold">Upload Your Animal</Text>

				<FormField
					title="Animal Name"
					value={form.name}
					placeholder="Give your animal a catchy name..."
					handleChangeText={(e) => setForm({ ...form, name: e })}
					otherStyles="mt-10"
				/>
				<FormField
					title="Animal Height"
					value={form.height}
					keyboardType="numeric"
					placeholder="Animal height here"
					handleChangeText={(e) => setForm({ ...form, height: e })}
					otherStyles="mt-10"
				/>
				<FormField
					title="Animal Family"
					value={form.family}
					placeholder="Animal family here"
					handleChangeText={(e) => setForm({ ...form, family: e })}
					otherStyles="mt-10"
				/>
				<FormField
					title="Animal Price"
					value={form.price}
					keyboardType="numeric"
					placeholder="Animal price here"
					handleChangeText={(e) => setForm({ ...form, price: e })}
					otherStyles="mt-10"
				/>
				<FormField
					title="Animal Age"
					value={form.age}
					keyboardType="numeric"
					placeholder="Animal height here"
					handleChangeText={(e) => setForm({ ...form, age: e })}
					otherStyles="mt-10"
				/>
				<FormField
					title="Animal Location"
					value={form.location}
					placeholder="Animal location here"
					handleChangeText={(e) => setForm({ ...form, location: e })}
					otherStyles="mt-10"
				/>
				<View className="mt-7 space-y-2">
					<Text className="text-base text-gray-100 font-pmedium">Animal Photo</Text>

					<TouchableOpacity onPress={openPicker}>
						{form.photo ? (
							<Image
								source={{ uri: form.photo.uri }}
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
					value={form.description}
					placeholder="Animal description here..."
					handleChangeText={(e) => setForm({ ...form, description: e })}
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
