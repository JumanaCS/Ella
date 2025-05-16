import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import MapScreen from "./src/screens/MapScreen";
import PersonalScreen from "./src/screens/PersonalScreen";
import ResourceScreen from "./src/screens/ResourceScreen";
import ReportFormScreen from "./src/screens/ReportFormScreen";
import PhoneScreen from "./src/screens/PhoneScreen";

const navigator = createSwitchNavigator(
  {
    Map: MapScreen,
    Personal: PersonalScreen,
    Resources: ResourceScreen,
    Report: ReportFormScreen,
    Phone: PhoneScreen
  },
  {
    initialRouteName: "Map",
    /*
    defaultNavigationOptions: {
      title: "App",
    },*/
  }
);

export default createAppContainer(navigator);
