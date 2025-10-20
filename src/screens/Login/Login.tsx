import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './login.styles';
import { Button, Input } from '../../components';
// import LogoImage from '../../assets/Logo_180x180.svg';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const { isLoadingUser, fetchUser } = useUser();

  // const handleLogin = useCallback(() => {
  //   fetchUser({ username, password });
  // }, [fetchUser, password, username]);

  const isLoadingUser = false;

  const onLogin = () => {
    console.log('Logging in with', { username, password });
  };

  return (
    <View style={styles.container}>
      {/* <LogoImage width={180} height={180} /> */}

      <Text style={styles.title}>Welcome</Text>

      <Input label="Login" value={username} onChangeText={setUsername} />

      <View style={styles2.loginContainer}>
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <Button
        onPress={onLogin}
        disabled={isLoadingUser}
        isLoading={isLoadingUser}
      >
        Log In
      </Button>
    </View>
  );
};

const styles2 = StyleSheet.create({
  loginContainer: {
    marginTop: 8,
    width: '100%',
  },
});
