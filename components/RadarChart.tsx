import { Platform, useWindowDimensions } from 'react-native';
import { WebView } from 'react-native-webview';

import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

export default function RadarChart({ data, options }) {
    if (Platform.OS === 'web') {
        // 注册 Chart.js 需要用到的组件
        ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
        return (
            <Radar data={data} options={options} />
        );
    } else {
        const { width } = useWindowDimensions();
        const htmlContent = `
            <html>
            <head>
                <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            </head>
            <body>
                <canvas id="myChart" width="400" height="400"></canvas>
                <script>
                const ctx = document.getElementById('myChart').getContext('2d');
                new Chart(ctx, {
                    type: 'radar',
                    data: ${JSON.stringify(data)},
                    options: ${JSON.stringify(options)},
                });
                </script>
            </body>
            </html> 
        `;

        return <WebView style={{ height: width }} originWhitelist={['*']} source={{ html: htmlContent }} />;
    }
}