var dr_jsRoot = 'https://cdn.jsdelivr.net/gh/791377533/js/';
try {
    const {getApi} = $.require("hiker://page/utiliy?rule=道长仓库Pro");
    var 模板 = getApi('importUrl')+"2505";
    require(模板);
    预处理(模板)
}catch (e) {
    log('预处理执行失败:'+e.message);
    var 模板 = dr_jsRoot+'dr.js';
    require(模板);
    预处理(模板)
}