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

//INSERT STYLES HERE