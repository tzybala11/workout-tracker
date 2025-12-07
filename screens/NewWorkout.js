import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native';

export default function AddNewWorkout({ navigation, route, addWorkout, editWorkout }) {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [notes, setNotes] = useState('');
    const [date, setDate] = useState('');

    const isEditing = route.params?.mode === 'edit';
    const existingWorkout = route.params?.workout;

    React.useEffect(() => {
        if (isEditing && existingWorkout) {
            setName(existingWorkout.name);
            setDate(existingWorkout.date);
            setType(existingWorkout.type);
            setDuration(String(existingWorkout.duration));
            setNotes(existingWorkout.notes);
        }
    }, []);

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

        const workoutData = {
            name: name.trim(),
            date: date.trim(),
            type: type.trim(),
            duration: durationNumber,
            notes: notes.trim(),
        };

        if (isEditing) {
            editWorkout(existingWorkout.id, workoutData);
        } else {
            addWorkout(workoutData);
        }

        navigation.goBack();
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Add New Workout</Text>

                <Text style={styles.label}>Workout Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder='e.g., Push/Pull Day, Back Day, Leg Day, Cardio'
                    value={name}
                    onChangeText={setName}/>
                
                <Text style={styles.label}>Date</Text>
                <TextInput
                    style={styles.input}
                    placeholder='DDMMMYYYY'
                    value={date}
                    onChangeText={setDate}/>

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
                    multiline
                    numberOfLines={4}
                    maxLength={200}/>
                
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Save Workout</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 15,
        fontSize: 14,
    },
    multiline: {
        height: 45,
    },
    saveButton: {
        backgroundColor: '#2565eb',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 5,
    },
    saveButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});