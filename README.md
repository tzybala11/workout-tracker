# Workout Tracker
## By: Tristan Zybala

### Setup Instructions

1. Download files & move to appropriate directory
2. Open Terminal and navigate to the app's folder
3. type in the commands seperately, in order:
    * 'npm install'
    * 'npm install @react-navigation/native @react-navigation/native-stack'
    * 'npx expo install react-native-screens react-native-safe-area-context'
4. type in the command 'npx expo start' to start the Expo server
5. Open the camera app and scan the QR code in the Terminal (ensure Expo Go is installed on your mobile device)
6. Expo Go will automatically load the project once the QR code is scanned
7. You are then able to use the app
8. In the Terminal, Press and hold Ctrl+C to shut down the server

### Copilot Reflection

I incorporated Copilot into my design and coding process by providing it with all the preliminary information it would need to best assit me during the project. I provided a grand overview of the app I wanted to create and what the requirements of the app would be to satisfy the grading for this Coding Project. I would use Copilot in order to gain more insight on how my code worked and to experiment with new features I wanted to add to my app once I completed the barebone features.

An example where Copilot's suggestion was wrong or not ideal was when I was going to make a Draggable Flatlist. Copilot suggested it and provided me with the details I needed to add the feature to my app but failed to mention that it would be incompatible with my version of Expo until I started asking why after clearing my Expo cache I could not get the app to load at all. I fixed the issue by removing the code causing the problem and reverting the JSON files back to how they were originally. I decided to opt against using the Draggable Flatlist or another similar feature for this project due to this experience.

An example where Copilot significantly sped up my work was with Inline Suggestions. This feature is one of the most powerful programming tools I have ever seen with its ability to drasically speed up the programming workflow. It allowed me to quickly code while also being able to basically think ahead of what I was already going to type, allowing me to just flow with my programming, and not need to stop and think about a small syntax problem or other issue I would normally have if I forgot something in the moment. And if I did get stumped on a part of my project where I could not figure out what was wrong then Copilot was able to assist in locating the error and providing details on how to make the necessary changes for my code to execute properly.