# Илья (Ilya_D)

4ed1d2eb-30d

# Taskana App

Учебный проект на React + Vite.

## Быстрый старт

- Установка зависимостей: `npm install`
- Запуск проекта в dev-режиме: `npm run dev`
- Сборка production-версии: `npm run build`

## Структура проекта

- `src/assets` - общие стили, переменные, reset и шрифты
- `src/layouts` - каркас приложения (`AppLayout`, `Header`, `Content`, `NavBar`, `SideBar`)
- `src/pages` - страницы приложения (сейчас `IncomingTasks`)
- `src/components` - переиспользуемые UI-компоненты (`MainContainer`, `TaskList`, `Footer`, `Statistic`)

## Примечания

- Глобальные стили подключаются из `src/main.jsx` через `src/assets/global.css`.
- CSS для компонентов оформлен через модули `*.module.css`.
- Изображения и иконки в `public`
