import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>注册</Text>
      <TextInput
        style={styles.input}
        placeholder="用户名"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="密码"
        secureTextEntry
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="确认密码"
        secureTextEntry
        placeholderTextColor="#888"
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>注册</Text>
      </Pressable>
      <Link href="/login">
        <Text style={styles.link}>已有账号？去登录</Text>
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