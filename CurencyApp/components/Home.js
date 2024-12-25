import { View, StyleSheet } from 'react-native';
import { PaperProvider, Text, Divider } from 'react-native-paper';

export default function Home() {
    return (
        <PaperProvider>
            <Text variant="displayMedium" >Currency Converter</Text>
            <Divider />
        </PaperProvider>
    )
}