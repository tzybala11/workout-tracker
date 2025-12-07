import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

export default function WorkoutCard({ workout }) {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{workout.name}</Text>
            <Text style={styles.details}>Type: {workout.type}</Text>
            <Text style={styles.details}>Duration: {workout.duration} minutes</Text>
            {workout.notes ? (
                <Text style={styles.notes}>Notes: {workout.notes}</Text>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    details: {
        fontSize: 14,
        color: '#6f6f6f',
    },
    notes: {
        fontSize: 14,
        color: '#6f6f6f',
    },
});