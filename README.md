# 餐廳清單

##### 使用者可以建立屬於自己餐廳清單，可以新增、修改、刪除餐廳清單

## Installing

#### 環境

```
- node.js v-10.15.0
- nodemon
- Express
- Express-Handlebars
- body-parse
- Mongoose

```

##### 確認本機是否安裝 [Mongodb](https://www.mongodb.com/download-center/community) 、 [Robo 3T](https://robomongo.org/)

##### 1.開啟終端機到存放專案本機位置並執行:

`git clone https://github.com/Wendy03/SEM3-S4A10-restaurant_CRUD.git`

##### 2.初始

```
1.切換目錄到專案: cd SEM3-S4A10-restaurant_CRUD
2.安裝套件: npm install
3.Robo 3T localhost 上面按右鍵 Create Database，建立一個新的資料庫-restaurant
4.Robo 3T restaurant資料庫中collection 右鍵建立 restaurants 資料夾
5.終端機上執行 todoSeeder.js
 - cd ~/todo/models/seeds
 - node todoSeeder.js
 - 確認Robo 3T 資料已經建立了
```

##### 3.執行程式

```
1. 終端機輸入: nodemon run dev
2. 開啟網頁輸入: http://localhost:3000
```

## 主要功能

##### 1. 使用者可以新增一家餐廳

##### 2. 使用者可以瀏覽一家餐廳的詳細資訊

##### 3. 使用者可以瀏覽全部所有餐廳

##### 4. 使用者可以修改一家餐廳的資訊

##### 5. 使用者可以刪除一家餐廳

## 截圖

###### 1.首頁

![image](https://github.com/Wendy03/SEM3-S4A10-restaurant_CRUD/blob/master/public/img/S4A10%E9%A6%96%E9%A0%81.PNG)

###### 2.餐廳詳細資料

![image](https://github.com/Wendy03/SEM3-S4A10-restaurant_CRUD/blob/master/public/img/S4A10%E5%96%AE%E7%AD%86%E8%B3%87%E6%96%99.PNG)

###### 3.新增

![image](https://github.com/Wendy03/SEM3-S4A10-restaurant_CRUD/blob/master/public/img/S4A10%E6%96%B0%E5%A2%9E.PNG)

###### 4.刪除

![image](https://github.com/Wendy03/SEM3-S4A10-restaurant_CRUD/blob/master/public/img/S4A10%E5%88%AA%E9%99%A4.PNG)
