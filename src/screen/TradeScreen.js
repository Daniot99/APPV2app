import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const CandlestickChart = () => {
  const data = [
    { date: '2024-04-01', open: 20, close: 120, high: 130, low: 90 },
    { date: '2024-04-02', open: 120, close: 110, high: 125, low: 100 },
    { date: '2024-04-03', open: 110, close: 105, high: 115, low: 95 },
    { date: '2024-04-04', open: 100, close: 120, high: 130, low: 90 },
    { date: '2024-04-05', open: 120, close: 110, high: 125, low: 100 },
    { date: '2024-04-06', open: 110, close: 105, high: 115, low: 95 },
    { date: '2024-04-07', open: 100, close: 120, high: 130, low: 90 },
    { date: '2024-04-08', open: 120, close: 110, high: 125, low: 100 },
    { date: '2024-04-09', open: 110, close: 105, high: 115, low: 95 },
    { date: '2024-04-10', open: 100, close: 120, high: 100, low: 90 },
    { date: '2024-04-11', open: 120, close: 110, high: 125, low: 100 },
    { date: '2024-04-12', open: 110, close: 105, high: 115, low: 95 },
    { date: '2024-04-13', open: 100, close: 120, high: 130, low: 90 },
    { date: '2024-04-14', open: 10, close: 11, high: 15, low: 100 },
    { date: '2024-04-15', open: 110, close: 105, high: 115, low: 95 },
    // Ajoutez plus de données au besoin
  ];

  const candleWidth = 10;
  const chartHeight = 200;
  const chartWidth = (data.length + 1) * (candleWidth + 5);
  const dateColumnWidth = 50; // Largeur de la colonne des dates

  const maxPrice = Math.max(...data.map(item => item.high));
  const minPrice = Math.min(...data.map(item => item.low));
  const priceRange = maxPrice - minPrice;

  const maxX = chartWidth;
  const minX = 0;
  const maxY = chartHeight;
  const minY = 0;

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <Svg width={chartWidth} height={chartHeight}>
          {data.map((item, index) => {
            const candleHeight = (item.high - item.low) / priceRange * maxY;
            const candleTop = (maxPrice - item.high) / priceRange * maxY;
            const candleLeft = index * (candleWidth + 5);
            const wickX = candleLeft + candleWidth / 2;
            const wickTop = (maxPrice - item.high) / priceRange * maxY;
            const wickBottom = (maxPrice - item.low) / priceRange * maxY;
            const wickHeight = wickBottom - wickTop;
            const bodyColor = item.close > item.open ? 'green' : 'red';

            // Connect the candles with lines except for the first candle
            let connector = null;
            if (index > 0) {
              const prevCandleLeft = (index - 1) * (candleWidth + 5);
              const prevCandleCloseY = ((maxPrice - data[index - 1].close) / priceRange) * maxY;
              const currentCandleOpenY = ((maxPrice - item.open) / priceRange) * maxY;

              connector = (
                <Path
                  key={`connector-${index}`}
                  d={`M${prevCandleLeft + candleWidth} ${prevCandleCloseY} L${candleLeft} ${currentCandleOpenY}`}
                  stroke={bodyColor}
                  strokeWidth="1"
                />
              );
            }

            return (
              <React.Fragment key={index}>
                {/* Wick */}
                <Path
                  d={`M${wickX},${wickTop} V${wickBottom}`}
                  stroke={bodyColor}
                  strokeWidth="1"
                />
                {/* Body */}
                <Path
                  d={`M${candleLeft},${candleTop} h${candleWidth} V${candleTop + candleHeight} h-${candleWidth} Z`}
                  fill={bodyColor}
                />
                {connector}
              </React.Fragment>
            );
          })}
        </Svg>
      </View>
      <View style={styles.dateContainer}>
        {data.map((item, index) => (
          <Text key={index} style={styles.dateText}>
            {item.date}
          </Text>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acheter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Vendre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Pour aligner les deux colonnes horizontalement
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  chartContainer: {
    marginRight: 10,
  },
  dateContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  dateText: {
    fontSize: 10,
    marginBottom: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CandlestickChart;
