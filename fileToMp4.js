const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

/*ffmpeg('./bunny.webm')
  .format('mp4')
  .videoCodec('mpeg4')

  .on('end', () => {
    console.log('Converted bunny.webm to bunny.mp4');
  })
  .on('error', err => {
    console.log('Failed to convert webm to mp4');
  })
  .save('bunny.mp4');*/

  ffmpeg('./bunny.mp4')
  .size('320x240')
  .on('end', () => {
    console.log('Converted bunny.mp4 to test.gif');
  })
  .on('error', err => {
    console.log('Failed to convert mp4 to gif');
  })
  .save('test.gif');