pm.sendRequest({
  url: "http://edufront.lagou.com/front/user/login",
  method: 'POST',
  header: {
    'Accept': '*/*',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: {
    mode: 'urlencoded',
    urlencoded: [{
      key: 'phone',
      value: '18201288771'
    }, {
      key: 'password',
      value: '111111'
    }]
  }
}, function (err, res) {
  // 提取 Response Body 中的 token 值, 并添加到 Headers 中
  console.log(res.json().content.access_token)
  pm.collectionVariables.set("authorization", value);
  pm.request.headers.add({ key: 'authorization', value })
});
