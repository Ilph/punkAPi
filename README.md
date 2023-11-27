[![Build and Deploy](https://github.com/Ilph/aston.react/actions/workflows/build_and_deploy.yml/badge.svg?event=push)](https://github.com/Ilph/aston.react/actions/workflows/build_and_deploy.yml?event=push)

# ABOUT BEERS
<h2 align='center'>Приложени представляет сборник данных о пиве с сайта Brewdog's DIY Dog
  <a href='https://www.brewdog.com/uk/diy-dog'>Brewdog's DIY Dog</a>

  <br>
</h2>

<div>API для приложения
  <a href='https://punkapi.com/'>https://punkapi.com/</a>
</div>

<div>
  Deploy
  <a href='https://ilph.github.io/aston.react/'>https://ilph.github.io/aston.react/</a>

  <br>
</div>

### Languages
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

### Libraries
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Hook Form](https://img.shields.io/badge/react--hook--form-EC5990?style=for-the-badge&logo=react-hook-form&logoColor=white)


## **1 уровень (необходимый минимум)**

## React

1. [x] Пишем функциональные компоненты c хуками в приоритете над классовыми
2. [x] Есть разделение на умные и глупые компоненты: [Smart](https://github.com/Ilph/aston.react/tree/main/src/modules), [Dump](https://github.com/Ilph/aston.react/tree/main/src/ui)
3. [x] Есть рендеринг списков: [MainContent](https://github.com/Ilph/aston.react/blob/main/src/components/main-content.tsx), [Suggests](https://github.com/Ilph/aston.react/blob/main/src/components/suggest.tsx)
4. [x] Реализована хотя бы одна форма: [AuthForm](https://github.com/Ilph/aston.react/blob/main/src/components/auth-form.tsx), [RegForm](https://github.com/Ilph/aston.react/blob/main/src/components/reg-form.tsx)
5. [x] Есть применение Контекст API: [Context](https://github.com/Ilph/aston.react/tree/main/src/context)
6. [x] Есть применение предохранителя: [ErrorBoundary](https://github.com/Ilph/aston.react/tree/main/src/route/route.tsx)
7. [x] Есть хотя бы один кастомный хук: [Hoooks](https://github.com/Ilph/aston.react/tree/main/src/hooks)
8. [x] Хотя бы несколько компонентов используют PropTypes: [Layout](https://github.com/Ilph/aston.react/tree/main/src/components/layout/base-layout-with-header-footer.tsx), [RequireAuth](https://github.com/Ilph/aston.react/tree/main/src/components/hoc/require-auth)
9. [x] Поиск не должен триггерить много запросов к серверу
10. [x] Есть применение lazy + Suspense: [lazy + Suspense](https://github.com/Ilph/aston.react/tree/main/src/route/route.tsx)


## Redux

1. [x] Используем Modern Redux with Redux Toolkit
2. [x] Используем слайсы: [Slices](https://github.com/Ilph/aston.react/tree/main/src/store/auth/auth-slices.ts)
3. [x] Есть хотя бы одна кастомная мидлвара или createListenerMiddleware: [middleware](https://github.com/Ilph/aston.react/tree/main/src/store/middlewares)
4. [x] Используется RTK Query: [RTK Query](https://github.com/Ilph/aston.react/tree/main/src/store/rtk-query)
5. [x] Используется Transforming Responses[: RTK Query](https://github.com/Ilph/aston.react/tree/main/src/store/rtk-query/beers-api.ts)


## **2 уровень (необязательный)**

1. [x] Использование TypeScript: [TypeScript](https://github.com/Ilph/aston.react/blob/main/tsconfig.json)
2. [x] Настроен CI/CD: [CI/CD](https://github.com/Ilph/aston.react/tree/main/.github/workflows)
