# reactnative-bottomsheet
An iOS-esque bottom sheet navigation component


Needs to be paired with react-navigation.
```
npm install @react-navigation/native
```
```
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
...

<Stack.Group
  screenOptions={{
    presentation: "modal",
    cardStyle: {
      backgroundColor: "transparent",
    },
  }}
>
  <Stack.Screen name="HomeTabs" component={HomeTabs} />
  <Stack.Screen name="ModalScreen" component={ModalScreen} />
</Stack.Group>
```

Use like:
```
<BottomSheet style={styles.bottomSheet} onPress={() => props.navigation.pop(1)}>
  <Text>Hello world</Text>
</BottomSheet>
```
    
![This is an image](https://uploads-ssl.webflow.com/6177527ca94b660316dad6e0/61ad8d9069b1b2bc1c223849_phone.png)
