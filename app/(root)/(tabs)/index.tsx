import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-3xl font-rubik ">Welcome to ReState</Text>
      <Link href={"/signIn"} className="underline text-blue-600">
        {" "}
        SignIn
      </Link>
      <Link href={"/explore"} className="underline text-blue-600">
        {" "}
        Explore
      </Link>
      <Link href={"/profile"} className="underline text-blue-600">
        {" "}
        Profile
      </Link>
      <Link href={"/property/1"} className="underline text-blue-600">
        Property
      </Link>
    </View>
  );
}
