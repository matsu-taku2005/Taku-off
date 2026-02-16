const ffmpeg = require('fluent-ffmpeg');

const processVideo = (filename) => {
  const inputPath = `/app/shared_storage/youtube_clone/raw_videos/${filename}`;
  const outputPath = `/app/shared_storage/youtube_clone/processed_videos/${filename.split('.')[0]}.mp4`;
  const thumbPath = `/app/shared_storage/youtube_clone/thumbnails/`;

  // 1. 動画を視聴用に変換 (MP4 / 720p)
  ffmpeg(inputPath)
    .output(outputPath)
    .videoCodec('libx264')
    .size('1280x720')
    .on('end', () => console.log('動画変換完了！'))
    .run();

  // 2. 1秒目の地点でサムネイルを生成
  ffmpeg(inputPath)
    .screenshots({
      timestamps: ['1'],
      filename: `${filename.split('.')[0]}-thumb.png`,
      folder: thumbPath,
      size: '320x240'
    });
};