import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

const TabsLayout = () => {
	const isAdmin = true;

	return (
		<>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: "#FFA001",
					tabBarInactiveTintColor: "#CDCDE0",
					tabBarShowLabel: false,
					tabBarStyle: {
						backgroundColor: "#161622",
						borderTopWidth: 1,
						borderTopColor: "#232533",
						height: 84,
					},
				}}
			>
				<Tabs.Screen
					name="home"
					options={{
						title: "Home",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabBarIcon
								style={{ color: color }}
								name={focused ? "home" : "home-outline"}
								color={color}
								iconText="Home"
								focused={focused}
							/>
						),
					}}
				/>

				<Tabs.Screen
					name="create"
					options={{
						title: "Create",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabBarIcon
								style={{ color: color }}
								name={focused ? "add-circle" : "add-circle-outline"}
								color={color}
								iconText="Create"
								focused={focused}
							/>
						),
					}}
				/>

				<Tabs.Screen
					name="bookmark"
					options={{
						title: "Bookmark",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabBarIcon
								style={{ color: color }}
								name={focused ? "bookmark" : "bookmark-outline"}
								color={color}
								iconText="Saved"
								focused={focused}
							/>
						),
					}}
				/>

				<Tabs.Screen
					name="profile"
					options={{
						title: "Profile",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabBarIcon
								iconText="Profile"
								style={{ color: color }}
								name={focused ? "person-circle" : "person-circle-outline"}
								color={color}
								focused={focused}
							/>
						),
					}}
				/>

				{isAdmin && (
					<Tabs.Screen
						name="admin"
						options={{
							title: "Admin",
							headerShown: false,
							tabBarIcon: ({ color, focused }) => (
								<TabBarIcon
									iconText="Admin"
									style={{ color: color }}
									name={focused ? "bar-chart" : "bar-chart-outline"}
									color={color}
									focused={focused}
								/>
							),
						}}
					/>
				)}
			</Tabs>

			<StatusBar backgroundColor="#161622" style="light" />
		</>
	);
};

export default TabsLayout;
