import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function Settings() {
  const menuItems = [
    { title: '个人信息', icon: 'user', color: '#007AFF' },
    { title: '通知设置', icon: 'bell', color: '#FF9500' },
    { title: '隐私设置', icon: 'lock', color: '#34C759' },
    { title: '帮助中心', icon: 'question-circle', color: '#5856D6' },
    { title: '关于我们', icon: 'info-circle', color: '#FF2D55' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>设置</Text>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <Pressable
            key={index}
            style={styles.menuItem}
            onPress={() => console.log(`Pressed ${item.title}`)}
          >
            <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
              <FontAwesome name={item.icon} size={20} color="white" />
            </View>
            <Text style={styles.menuText}>{item.title}</Text>
            <FontAwesome name="chevron-right" size={16} color="#C7C7CC" />
          </Pressable>
        ))}
      </View>

      <Pressable style={styles.logoutButton}>
        <Text style={styles.logoutText}>退出登录</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    padding: 16,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  menuContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuText: {
    flex: 1,
    fontSize: 17,
    color: '#000',
  },
  logoutButton: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FF3B30',
    fontSize: 17,
    fontWeight: '600',
  },
});