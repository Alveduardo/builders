export interface Weather {
  weather: {
    main: {
      pressure: number;
      humidity: number;
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
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
    visibility: number;
    sys: {
      sunrise: number;
      sunset: number;
    };
  };
  forecast: any;
}
