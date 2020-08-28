import React, { useMemo } from 'react';
import { Chart } from 'react-charts';

interface DataI {
  label: string;
  data: (string | number)[][];
}

interface ChartProps {
  data: DataI[];
  axes: any;
}

const ChartComponent: React.FC<ChartProps> = ({ data, axes }) => {
  const series = useMemo(
    () => ({
      showPoints: true,
    }),
    [],
  );

  const getSeriesStyle = React.useCallback(
    () => ({
      transition: 'all .5s ease',
    }),
    [],
  );

  const getDatumStyle = React.useCallback(
    () => ({
      transition: 'all .5s ease',
    }),
    [],
  );

  return (
    <Chart
      data={data}
      series={series}
      axes={axes}
      getSeriesStyle={getSeriesStyle}
      getDatumStyle={getDatumStyle}
      tooltip
    />
  );
};

export default ChartComponent;
