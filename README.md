# Loft-taxi-mui-theme

Этот пакeт содержит тему оформления для `material-ui`.

# Как использовать

Установите тему оформления:

```
yarn add loft-taxi-mui-theme
```

В той части приложение где вы используете провайдеры (скорее всего `index.js`) добавьте `MuiThemeProvider` и передайте в него `theme` из `loft-taxi-mui-theme`.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { theme } from "loft-taxi-mui-theme"; // Импортируем саму тему
import { MuiThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
```

# Что содержит

Тема переопределяет цвета и внешний вид инпутов, кнопок и ссылкок. Элементы у которых необходимо поменять отступы и позицию нужно стилизовать отдельно. ([Страницы документации о кастомных стилях](https://material-ui.com/customization/components/))

Указывает `primary` и `secondary` цвета.

Переопределяет стили для `FormLabel`, `Link`, `Input`, `FormHelperText`, `Button`.

Содержит компоненты логотипа LoftTaxi (`Logo`) и иконки mastercard (`MCIcon`).

Пример импорта:

```jsx
import {Logo, MCIcon} from 'loft-taxi-mui-theme';
```

Посмотреть как выглядят стили можно в файле [theme](https://github.com/satansdeer/loft-taxi-mui-theme/blob/master/src/theme.js)
