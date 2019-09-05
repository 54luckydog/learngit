## login

request:

```json
{
"uuid":"string",
"unionid":"string",
"wxinfo":{    //object
    nickname:"string"//昵称
    imageUrl:"string"//头像
} 
}
```

response:

```json
{
"code":0,//状态 number
"msg":{},//请求成功还是失败 string
}
```



## log//日志

request:

```json
{
"pageid":0,//number,这是页码
"count":10//number，这是每页显示多少条
}
```

response:

```json
{
"code":0,//number,状态
"msg":{},//请求成功还是失败，string
}
```

## photo//相册

### getphotoinfo

request

```json
{
"userid":""//string
}
```

response:

```json
{
"code":0,//状态 number
"msg":{},//请求成功还是失败 string
}
```

## upload//上传图片

request

```json
{
"photodata":"base64/图片"//建议选择图片上传方式 string
}
```

response

```json
{
"code":0,//状态  number
"msg":{},//请求成功还是失败 string
}
```

## delete//删除图片

request

```json
{
"photoId":"xxxxx"//图片id  string
}
```

response

```json
{
"code":0,//状态  number
"msg":{},//请求成功还是失败 string
}
```

## grandChoise//土地选择

grand

request

```json
{
"cmd":"获取未销售土地列表",//string	
"params":{              //object
"dapengid":"0-100" //   number
}
}
```

response:

```json
{
"code":0,//状态  number
"msg":{},//请求成功还是失败 string
}
```

## getgrand

request

```json
{
"dapengid":0,//大棚号 number
"grandid":0//土地号 number
}
```

response

```json
"code":0,//状态  number
"msg":{},//请求成功还是失败 string
```

# 游戏主界面

### 获取土地信息

request

```json
{}
```

response

```json
"code":0,//状态  number
"msg":{},//请求成功还是失败 string
```

## 操作

### 道具使用

request

```json
{
"cmd":water/weed//water水，weed草 ，insect虫，fertilizer施肥
"userid":""   //用户id ，string
}
```

response

```json
"code":0,//状态  number
"msg":{},//请求成功还是失败 string
```

### 种植

request

```json
{
"grandId":"",
"种子ID":""//seedid
}
```

response

```json
"code":0,//状态  number
"msg":{},//请求成功还是失败 string
```

## 商城

### 获取商品列表

request

```json
//没有请求数据
```

response

```json
{
"code":0,//状态  number
"msg":{},//请求成功还是失败 string
}
```

### 购买

request

```json
{
    "itemid":""//购买道具id
}
```

response

```json
"code":0,//状态  number
"msg":{},//请求成功还是失败 string
```

## 背包

### 请求背包信息

request

```json
{}
```

response

```json
"code":0,//状态  number
"msg":{},//请求成功还是失败 string
```

### 使用道具

request

```JSON
{
    "itemid":""//道具ID  string
    "params":{}//参数    object
}
```

response

```json
{
"code":0,//状态  number
"msg":{},//请求成功还是失败 string
}
```

### 邻居

request

```
{}
```

response

```json
{
"code":0,//状态  number
"msg":{},//请求成功还是失败 string
}
```

