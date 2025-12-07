import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import WorkoutCard from '../components/WorkoutCard';

export default function Home({ navigation, workouts }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Workout Tracker</Text>

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('NewWorkout')}>
                <Text style={styles.addButtonText}>Add New Workout</Text>
            </TouchableOpacity>

            {workouts.length === 0 ? (
                <Text style={styles.emptyText}>
                    No workouts added yet. Start by adding a new workout!
                </Text>
            ) : (
                <FlatList
                    data={workouts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <WorkoutCard workout={item} />}/>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    addButton: {
        backgroundColor: '#2565eb',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 2,
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    addButtonText: {
        color: '#f5f5f5',
        fontSize: 16,
        fontWeight: '600',
    },
    emptyText: {
        marginTop: 20,
        fontSize: 16,
        color: '#6f6f6f',
    },
});