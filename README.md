# React Native OpenWeather

An application that takes the user's current location and displays on the interface the current address, weather data for the region, current and forecast weather data, and a button to update this data.

## Android

<div>
    <img src="https://github.com/Alveduardo/builders/blob/master/assets/screenshots/android1.png" width="200" />
    <img src="https://github.com/Alveduardo/builders/blob/master/assets/screenshots/android2.png" width="200" />
</div>

## iOS

<div>
    <img src="https://github.com/Alveduardo/builders/blob/master/assets/screenshots/iphone1.png" width="200" />
    <img src="https://github.com/Alveduardo/builders/blob/master/assets/screenshots/iphone2.png" width="200" />
</div>

## Usage

Clone repository, open a Terminal in your project's folder and run:

```
git clone https://github.com/Alveduardo/builders.git
```

```
cd builders
```

```
yarn install
```

If you're in a CocoaPods project (the default setup since React Native 0.60), make sure to install pods before you run your app:

```
cd ios && pod install && cd ..
```

### iOS

```
yarn ios
```

### Android

```
yarn android
```

### Testes

```
yarn test
```

### Observações:

- Testes em apenas alguns componentes. Apenas para demonstração de conhecimento, caso fosse fazer todos cenários de testes possíveis levariam muito tempo.

- Documentações apenas nos hooks e superficialmente nas tipagens de props. Apenas para demonstração de conhecimento, caso fosse documentar tudo levaria muito tempo.

- Implementação de algumas funcionalidades apenas para fins de demonstração de conhecimento.
