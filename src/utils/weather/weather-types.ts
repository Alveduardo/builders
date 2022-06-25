export interface Weather {
  main: {
    pressure: number;
    humidity: number;
    temp: number;
  };
  name: string;
  weather: [
    {
      description: string;
    },
  ];
  wind: {
    speed: number;
  };
}
