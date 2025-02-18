import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { Link, router } from 'expo-router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 基本输入验证
    if (!username || !password) {
      Alert.alert('错误', '用户名和密码不能为空');
      return;
    }

    // 这里添加实际的登录验证逻辑
    // 示例验证框架
    try {
      // 模拟验证
      if (username === 'admin' && password === '123456') {
        // 验证成功，跳转到首页
        router.replace('/(tabs)');
      } else {
        Alert.alert('错误', '用户名或密码错误');
      }
    } catch (error) {
      Alert.alert('错误', '登录失败，请稍后重试');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>登录</Text>
      <TextInput
        style={styles.input}
        placeholder="用户名"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="密码"
        secureTextEntry
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>登录</Text>
      </Pressable>
      <Link href="/register">
        <Text style={styles.link}>还没有账号？去注册</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center'
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    fontSize: 16
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 12
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  link: {
    color: '#007AFF',
    textAlign: 'center',
    fontSize: 16
  }
});