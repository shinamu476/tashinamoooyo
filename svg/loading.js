var animation = bodymovin.loadAnimation({
container: document.getElementById('Lottie'), 

renderer: 'svg', // 描画形式
loop: true, // trueにしたらループ。1回再生の場合はfalse
autoplay: true, // 自動再生
    path: 'https://shinamu476.github.io/tashinamouyo/svg/loading.json', // the path to the animation json
    name: "Hello World", // 今後のリファレンスとして名前を指定（オプション）
});