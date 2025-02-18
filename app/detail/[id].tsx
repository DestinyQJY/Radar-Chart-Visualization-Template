import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import RadarChart from '@/components/RadarChart';

import { useLocalSearchParams } from 'expo-router';
import { userData } from '@/data/userData';


export default function Detail() {
  // 计算今年平均分
  const totalScores = new Array(userData[0].currentScores.length).fill(0);
  userData.forEach(user => {
    user.currentScores.forEach((score, index) => {
      totalScores[index] += score;
    });
  });
  const averageScores = totalScores.map(score => score / userData.length);

  const { id } = useLocalSearchParams();
  const user = userData.find(u => u.id === id);
  const data = {
    labels: ['指标一', '指标二', '指标三', '指标四', '指标五', '指标六'],
    datasets: [
      {
        label: '今年分数',
        data: user?.currentScores,
        backgroundColor: 'rgba(0,123,255,0.2)',
        borderColor: 'rgba(0,123,255,1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(0,123,255,1)',
      },
      {
        label: '去年分数',
        data: user?.lastScores,
        backgroundColor: 'rgba(134,65,244,0.2)',
        borderColor: 'rgba(134,65,244,1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(134,65,244,1)',
      },
      {
        label: '今年平均分',
        data: averageScores,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255,99,132,1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        // 修改刻度数字（ticks）的字体大小
        ticks: {
          font: {
            size: 14,
          }
        },
        // 修改雷达图外围每个点的标签字体大小
        pointLabels: {
          font: {
            size: 14,
          }
        }
      },
    },
    plugins: {
      // 修改图例（legend）标签的字体大小
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14,
          }
        }
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome name="user" size={24} color={user?.gender === 'male' ? "#007AFF" : "#FF69B4"} />
      </View>
      <View style={styles.radarChartContainer}>
        <RadarChart data={data} options={options} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{user?.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  radarChartContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
  textContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});