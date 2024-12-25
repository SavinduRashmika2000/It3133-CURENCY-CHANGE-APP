import { View, StyleSheet } from 'react-native';
import { PaperProvider, Text, Divider } from 'react-native-paper';

export default function Home() {
    return (
        <PaperProvider>
            <Text variant="displayMedium" style={styles.header}>Currency Converter</Text>
            <Divider />
        </PaperProvider>
    )
}