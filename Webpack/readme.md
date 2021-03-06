## Webpack

Сборщик проекта. Работает с импортами, поэтому идеальная среда для вебпака - это модульная система.
По умолчанию вебпак умеет работать с файлами js и css, а также имеет под капотом какую-то свою минимальную базовую настройку
(например, lazy-loading), 
но если мы хотим указать для вебпака свои правила сборки, то мы создаем webpack.config.js и все в нем описываем, 
а этот конфиг указываем аргументом  при  вызове вебпака в скриптах в файле package.json:
```json
"scripts": {
    "start": "webpack --config webpack.config.js",
    "dev": "webpack-dev-server --config webpack.config.js"
  }
  ```
  Перед началом работы устанавливаем webpack в свой проект:
  `npm install --save-dev webpack`
  `npm install --save-dev webpack-cli` - Command Line Interface
  
  затем создаем файл webpack.config.js и приступаем к его настройке (смотрим файл с  комментариями)
  #### Работа с картинками
  Для картинок понадобился бы, например, file-loader
  [Если картинку для использования затягивают в файл через импорт, а вебпак при сборке переложит ее в другой место, 
  то вебпак сам разрулит это изменение импорта]
  
  Сами картинки в прод режиме будут затягиваться, например, из CDN(ContentDeliveryNetwork). 
  Для таких случаев и для работы с другой статикой в вебпаке используется webpack_public_path
  С его помощью задается адрес, где лежит статика.
  ```js
  __webpack_public_path=process.env.PATH_TO_CDN
  ```