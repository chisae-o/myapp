import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Logs } from "../pages/Logs";
import { RepeatedTaskList } from "../pages/RepeatedTaskList";
import { Today } from "../pages/Today";
import { Tomorrow } from "../pages/Tomorrow";

const Tab = createMaterialBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="タスク一覧"
        component={RepeatedTaskList}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="card-bulleted-settings"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="今日"
        component={Today}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-today"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="明日"
        component={Tomorrow}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-arrow-right"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="記録"
        component={Logs}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-list" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
