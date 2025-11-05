import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input } from '../../components';
import SplashLogo from '../../assets/SplashLogo.svg';
import { theme } from '../../utils/theme';
import { useUser } from '../../api/user';
import { useUserStore } from '../../store/useUserStore';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const setUser = useUserStore(state => state.setUser);

  const { fetchUser, isLoading } = useUser();

  const onLogin = async () => {
    const data = await fetchUser({ username, password });

    if (data) {
      setUser(data);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <SplashLogo width={140} height={70} />
      </View>
      <View style={styles.formWrapper}>
        <Text style={styles.title}>Welcome</Text>
        <Input label="Login" value={username} onChangeText={setUsername} />
        <View style={styles.passwordWrapper}>
          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button onPress={onLogin} disabled={isLoading} isLoading={isLoading}>
          Log In
        </Button>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: theme.spacing(2),
    backgroundColor: theme.color.primary.purple,
  },

  logoWrapper: {
    paddingTop: theme.spacing(5),
  },

  formWrapper: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: theme.spacing(10),
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: theme.spacing(4),
    color: theme.color.base.white,
  },

  passwordWrapper: {
    marginTop: theme.spacing(1),
    width: '100%',
  },

  buttonWrapper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
});
