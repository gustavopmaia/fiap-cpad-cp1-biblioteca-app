import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: "#0F1115",
  },
  headerTitleStyle: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  headerTintColor: "#E83D84",
  contentStyle: {
    backgroundColor: "#0F1115",
  },
};
