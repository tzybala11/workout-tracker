import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

export default function WorkoutCard({ workout, index, deleteWorkout, navigation }) {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{workout.name}</Text>
            <Text style={styles.details}>Date: {workout.date}</Text>
            <Text style={styles.details}>Type: {workout.type}</Text>
            <Text style={styles.details}>Duration: {workout.duration} minutes</Text>
            {workout.notes ? (
                <Text style={styles.notes}>Notes: {workout.notes}</Text>
            ) : null}

            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={() =>
                        navigation.navigate('NewWorkout', {
                            mode: 'edit',
                            workout,
                        })
                    }>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => deleteWorkout(workout.id)}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        borderWidth: 2,
        marginBottom: 15,
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
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    editButton: {
        backgroundColor: '#2565eb',
        padding: 8,
        borderRadius: 10,
        borderWidth: 2,
    },
    deleteButton: {
        backgroundColor: '#ff0000',
        padding: 8,
        borderRadius: 10,
        borderWidth: 2,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: '600',
    }, 
});