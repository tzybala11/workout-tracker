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