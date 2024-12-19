// 当网页加载完成时执行
window.onload = function() {
    // 获取按钮和动态文本元素
    const button = document.getElementById('changeTextBtn');
    const dynamicText = document.getElementById('dynamicText');

    // 为按钮添加点击事件
    button.addEventListener('click', function() {
        // 改变动态文本内容
        dynamicText.innerText = '你点击了按钮！';
    });
};
