const chokidar = require('chokidar'); // ファイル監視ライブラリ
const { processVideo } = require('./processor');

console.log('Taku-off Worker: 動画監視を開始しました...');

// shared_storage内のraw_videosフォルダを監視
const watcher = chokidar.watch('/app/shared_storage/youtube_clone/raw_videos', {
  persistent: true,
  ignoreInitial: true
});

watcher.on('add', (filePath) => {
  const filename = filePath.split('/').pop();
  console.log(`新着動画検知: ${filename}`);
  processVideo(filename);
});