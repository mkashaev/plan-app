# Init app
```sh
npx @react-native-community/cli@latest init PlanApp
```

```sh
# Install Xcode
Xcode => Dev developer tool => Simulator

# Install Android Studio
More Actions => Virtual Device Manager => Run
```

If there is kind of issue
```
Unable to load contents of file list: '/Target Support Files/Pods-PlanApp/Pods-PlanApp-frameworks-Debug-input-files.xcfilelist'
(in target 'PlanApp' from project 'PlanApp')
```

```sh
cd ios
rm -rf Pods Podfile.lock
pod deintegrate
pod install
cd ..
```