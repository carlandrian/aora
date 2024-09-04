import { Text } from 'react-native'
import { Stack } from 'expo-router';

// rnfes
const RootLayout = () => {
  return (
    <Stack>
         <Stack.Screen name="index"
        options={{
            headerShown: false
        }}
         />
    </Stack>
  )
}

export default RootLayout
