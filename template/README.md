# {{ name }}

> {{ description }}

## vayne 使用文档 https://vaynejs.github.io

## Installation
```
yarn add {{ name }} -D
npm i {{ name }} -D
```

## Usage
在__.vaynerc.js__ 引入
```js
module.exports = {
  plugins: [
    '{{ name }}' // 获取简写 stylelint
  ]
}
```

## Config 
> 在.vaynerc.js 
```js
module.exports = {
  插件名字: {

  }
}
```