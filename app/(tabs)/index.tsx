import { StyleSheet, View, FlatList } from 'react-native';
import { router } from 'expo-router';
import { userData } from '@/data/userData';
import UserListItem from '@/components/UserListItem';

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={userData}
        renderItem={({ item }) => (
          <UserListItem
            gender={item.gender}
            text={item.name + "  " + item.department}
            onPress={() => router.push(`/detail/${item.id}`)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
});