TopClient = require("./topClient").TopClient;
var client = new TopClient({
  appkey: "12292183",
  appsecret: "e4f256f672321b00a59550dea7aaf398",
  REST_URL: "http://gw.api.taobao.com/router/rest",
});

let preview_param = {
  item_major_pic: "", //商品主体图片
  item_id: 5555551211,
  task_type: 2, //任务类型:1 普通合图，只把主图itemMajorPic+dynamicDatas合成；2 自动价格合图，会合成itemMajorPic+dynamicDatas和自动价格图层
  isv_task_id: "",
  template_dsl: "",
  dynamic_datas: [
    {
      data_type: "",
      data_value: "",
      layer_index: "",
    },
  ],
  price_rule: {
    make_up_num: 1,
    price_express_type: 3,
    make_up_type: 1,
    sell_profit_string1: "",
    sell_profit_string2: "",
    use_price_rule: true,
    sku_id: 5454,
  },
};
client.execute(
  "taobao.picasso.pictag.merge.preview",
  {
    preview_param: JSON.stringify(preview_param),
  },
  function (error, response) {
    if (!error) console.log(response);
    else console.log(error);
  }
);
