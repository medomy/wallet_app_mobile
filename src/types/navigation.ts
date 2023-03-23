import { CompositeScreenProps } from "@react-navigation/native";
import { StackNavigatorScreensParams } from "../navigation";

export interface RootStackParamList extends StackNavigatorScreensParams{}

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }