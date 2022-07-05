# React Native OpenWeather

Um aplicativo que pega a localização atual do usuário e exibe na interface o endereço atual, dados meteorológicos da região, atuais e previstos, com um botão para atualizar esses dados.

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

Clone o repositório, abra um Terminal na pasta do seu projeto e execute:

```
git clone https://github.com/Alveduardo/builders.git
```

```
cd builders
```

```
yarn install
```

### Configurar variáveis de ambiente

- Gerar uma chave de API em https://home.openweathermap.org/api_keys.
- Utilizar o arquivo `.env.example` como modelo, troque o nome do arquivo para `.env`.
- Dentro do arquivo `.env`, substituir `OPEN_WEATHER_API_KEY` pela chave de API.

Se você estiver em um projeto CocoaPods (a configuração padrão desde o React Native 0.60), certifique-se de instalar os pods antes de executar seu aplicativo:

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
