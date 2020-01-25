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
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
```

# Что содержит