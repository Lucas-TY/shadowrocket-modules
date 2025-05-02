/**************************
小红书内容过滤（移除视频内容）
订阅地址: https://raw.githubusercontent.com/Junyi-99/Shadowrocket-Modules/refs/heads/main/scripts/rednote.js
Update: May 3, 2025
Author: @Junyi-99
***************************/

// 获取响应内容
let body = $response.body;
console.log("🍎 小红书脚本开始执行");
try {
    // 尝试解析 JSON
    let obj = JSON.parse(body);
    if (obj.data && obj.data.length > 0) {
        const numBefore = obj.data.length;
        obj.data = obj.data.filter(item => {
            return item.type !== 'video';
        });
        const numAfter = obj.data.length;
        console.log("XHS Feed Filter Before:", numBefore, "After:", numAfter);
        body = JSON.stringify(obj);
    }
} catch (e) {
    console.log("解析响应失败: " + e);
}

// 返回修改后的响应
$done({
    body: body
});
