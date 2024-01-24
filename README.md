# Kiasuo

API библиотека для электронного журнала КИАСУО.

### Пример

```ts
import { KiasuoClient } from "kiasuo";

(async () => {
  const client = new KiasuoClient("ACCESS_TOKEN", "REFRESH_TOKEN");

  // Получить текущего пользователя
  console.log(await client.user.get());
})();
```

### Установка

#### Через npm

```bash
npm install kiasuo
```

#### Через yarn

```bash
yarn add kiasuo
```

#### Через pnpm

```bash
pnpm install kiasuo
```
