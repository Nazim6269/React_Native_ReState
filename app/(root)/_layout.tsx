import { useGlobalContext } from "@/lib/global-provider";
import { Slot } from "expo-router";

const AppLayout = () => {
  const { isLogged, loading, user } = useGlobalContext();

  // if (loading) {
  //   return (
  //     <SafeAreaView className="bg-white h-full flex justify-center items-center">
  //       <ActivityIndicator className="text-primary-300" size="large" />
  //     </SafeAreaView>
  //   );
  // }
  // if (!isLogged) {
  //   return <Redirect href={"/signIn"} />;
  // }

  return <Slot />;
};

export default AppLayout;
