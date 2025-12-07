import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';

export default function AddNewWorkout({ navigation, addWorkout }) {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [notes, setNotes] = useState('');

    const handleSave = () => {
        if (!name.trim() || !duration.trim()) {
            Alert.alert('Error Encountered', 'Please enter both workout name and duration.');
            return;
        }

        const durationNumber = Number(duration);
        if (isNaN(durationNumber) || durationNumber <= 0) {
            Alert.alert('Error Encountered', 'Please enter a valid positive number for duration.');
            return;
        }

        addWorkout({
            name: name.trim(),
            type: type.trim(),
            duration: durationNumber,
            notes: notes.trim(),
        });

        setName('');
        setType('');
        setDuration('');
        setNotes('');
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add New Workout</Text>

            <Text style={styles.label}>Workout Name</Text>
            <TextInput
                style={styles.input}
                placeholder='e.g., Push/Pull Day, Back Day, Leg Day, Cardio'
                value={name}
                onChangeText={setName}/>
            
            <Text style={styles.label}>Workout Type</Text>
            <TextInput
                style={styles.input}
                placeholder='e.g., Strength, Cardio, Flexibility'
                value={type}
                onChangeText={setType}/>

            <Text style={styles.label}>Duration (minutes)</Text>
            <TextInput
                style={styles.input}
                placeholder='e.g., 30, 45, 60'
                keyboardType='numeric'
                value={duration}
                onChangeText={setDuration}/>

            <Text style={styles.label}>Notes (optional)</Text>
            <TextInput
                style={[styles.input, styles.multiline]}
                placeholder='Add any additional notes here...'
                value={notes}
                onChangeText={setNotes}
                multiline/>
            
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save Workout</Text>
            </TouchableOpacity>
        </View>
    );
}