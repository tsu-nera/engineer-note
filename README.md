Ruby on Rails Tutorial with React
===

[Ruby on Rails Tutorial by Michael Hartl](https://railstutorial.jp/) の フロントエンドを Reactで実装しました。

## Description

Railsエンジニアならば誰もが知っている[Ruby on Rails Tutorial](https://railstutorial.jp/) 5.1 (第4版)を
実装したリポジトリです。ハイライトは以下の3点です。

- フロントエンドに React を導入 ([react-rails gem](https://github.com/reactjs/react-rails)で実現)
- CSSに [Styled Components](https://github.com/styled-components/styled-components)を導入
- 依存関係の管理に [docker-compose](http://docs.docker.jp/compose/toc.html)を導入

第11章、第12章は実装していません。
テストは実装していません。
その他、実装していない機能もあります。

## Install

```bash
$ git clone https://github.com/tsu-nera/ruby-on-rails-tutorial-with-react.git
$ cd ruby-on-rails-tutorial-with-react
$ docker-compose build
$ docker-compose up -d
```

Enjoy!!

## Authors

[tsu-nera](https://twitter.com/tsu_nera)
