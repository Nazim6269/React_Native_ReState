import * as Linking from "expo-linking";
import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";
import { openAuthSessionAsync } from "expo-web-browser";

export const config = {
  platform: "com.dev.restate",
  projectId: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

export const client = new Client();

client
  .setEndpoint(config.endpoint!)
  .setPlatform(config.platform!)
  .setProject(config.projectId!);

export const avatar = new Avatars(client);
export const account = new Account(client);

// login function
export const login = async () => {
  try {
    const redirectUri = Linking.createURL("/");

    const res = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );

    if (!res) throw new Error("Failed to login");

    const browserResult = await openAuthSessionAsync(
      res.toString(),
      redirectUri
    );

    if (browserResult.type !== "success") {
      throw new Error("Failed to Login");
    }

    const url = new URL(browserResult.url);

    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();

    if (!secret || !userId) throw new Error("Failed to Login");

    const session = await account.createSession(userId, secret);

    if (!session) throw new Error("Failed to create a session");

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//logout function
export const logout = async () => {
  try {
    await account.deleteSession("current");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//get user info function
export const getCurrentUser = async () => {
  try {
    const response = await account.get();

    if (response.$id) {
      const userAvatar = await avatar.getInitials(response.name);

      return {
        ...response,
        avatar: userAvatar.toString(),
      };
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
