// main.js のイメージ（抜粋）
import { Home } from './pages/Home.js';
import { Upload } from './pages/Upload.js';

const app = document.getElementById('app');

// 簡易的な切り替えスイッチ（ルーターの卵）
function router() {
  const path = window.location.hash; // #upload みたいなやつ
  app.innerHTML = ''; // 舞台を一旦片付ける

  if (path === '#upload') {
    app.appendChild(Upload());
  } else {
    app.appendChild(Home());
  }
}

// URLが変わるたびに実行
window.addEventListener('hashchange', router);
// 最初の読み込み時にも実行
router();