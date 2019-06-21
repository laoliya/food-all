# food_vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
# food
        描述数据库设计，后台API列表，前端功能描述以及职责划分

## 一，数据库设计
        1.数据库使用的是mysql数据库。
        2.数据库里面包含的四部分内容的数据表，分别是与用户相关的表，和与菜谱相关的表，以及与瘦身相关的故事和有关健康的知识
        3.数据库一共设计了10个数据表。
        与用户相关的是user表和collection_menu_list表，
        和与菜谱相关的表的是menu，collection_menu_list,food_material,steps,book,
        与瘦身相关的表是star,lose_weight,fire_class,lose_class里面包含的是瘦身相关的知识
## 二，后台API列表
### 1.首页API
        1>一日三餐/meal
        2>瘦身日记  '/indexDiary'
        3>首页和明星一起瘦身  /indexStar
        4>享瘦之旅  /travel
        5>燃烧吧卡路里  /fire
        6>瘦身小课堂  /indexClass
### 2.二级API
        1>瘦身日记二级页面  /dairy
        2>用户相关  登录  /login，注册  /reg，判断是否登录  /islogin
        3>菜谱  /mealsList   2.带参数传递查找菜谱'/meals/search'
### 3.查询菜谱图片、标题等 
        "/getTitle",
### 4.查询菜谱食材 
        "/getFoods" 
### 5.查询菜谱步骤
        "/getSteps",查询要推荐的菜谱 
### 6.获取菜谱详情页随机推荐
        "/getRecom"
### 7.设置菜谱收藏数量 
        “/setCollect"
## 三，前端功能描述
        用户进入网站之后可以浏览首页推荐的各种减肥食谱和减健康相关的文章，
        在用户注册登录之后，点击任意一个菜谱的可以看到菜谱相关的详情，点击收藏之后
        可以在个人中心看到自己收藏的文章，在菜谱详情页会随机推荐与浏览内容相关的文章
        方便用户查找，同时也会随机滚动广告。
        用户可以点击网站上面的电子食谱选择订阅或者收藏
        用户退出该网页之后浏览其他网站再次进入网站的时候不需要重新登录
## 四，成员指责划分
    1.团长王丽和成员代小佩负责数据库的设计和后端接口的完成，团长负责将网站进行分解，交给组员完成自己相应的任务。
    2.团员李志琪负责Ps网站需要的图片和静态页面编写，将网页相关的内容添加到数据库里面，以及将静态网页和数据库连接起来
    3.团员代小佩负责静态页面编写，将网页相关的内容添加到数据库里面，以及将静态网页和数据库连接起来
    4.团员乔雅心负责静态页面编写，将网页相关的内容添加到数据库里面，以及将静态网页和数据库连接起来
    5.团员刘旭负责静态页面编写，将网页相关的内容添加到数据库里面，以及将静态网页和数据库连接起来 



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
