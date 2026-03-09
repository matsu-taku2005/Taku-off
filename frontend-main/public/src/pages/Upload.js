// Upload.js
export function Upload() {
  const container = document.createElement('div');
  container.innerHTML = `
    <h2>動画をアップロード</h2>
    <div style="border: 2px dashed #ccc; padding: 20px; text-align: center;">
      <input type="file" id="videoFile" accept="video/*" />
      <button id="uploadBtn" style="margin-top: 10px;">アップロード開始！</button>
    </div>
    <p id="status"></p>
  `;

  // ボタンを押した時の動きを「演出」する
  const btn = container.querySelector('#uploadBtn');
  btn.addEventListener('click', async () => {
    const fileInput = container.querySelector('#videoFile');
    const status = container.querySelector('#status');

    if (!fileInput.files[0]) {
      alert('動画ファイルを選んでくださいね！');
      return;
    }

    status.innerText = "送信中... (backend-videoへ配送しています)";
    
    // ここでバックエンド(5001番)へデータを送る（後で実装）
    console.log("ファイル送信の準備ができました:", fileInput.files[0].name);
  });

  return container;
}