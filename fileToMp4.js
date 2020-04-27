const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

let cliArgs = process.argv.slice(2);
let fileName = cliArgs[1].match(/(.+?)(\.[^.]*$|$)/)[1];

if (cliArgs.length > 2) {
  console.log('Expected 2 CLI arguments: "mp4||gif PATH_TO_FILE"');
} else {
  switch(cliArgs[0]) {
    case 'mp4':
      ffmpeg(cliArgs[1])
        .format('mp4')
        .videoCodec('mpeg4')
    
        .on('end', () => {
          console.log(`Converted ${cliArgs[1]} to ${fileName}.mp4`);
        })
        .on('error', err => {
          console.log(`Failed to convert ${cliArgs[1]} to mp4`);
        })
        .save(`${fileName}.mp4`);
      break;
    case 'gif':
      ffmpeg(cliArgs[1])
        .size('320x240')
        .on('end', () => {
          console.log(`Converted ${cliArgs[1]} to ${fileName}.gif`);
        })
        .on('error', err => {
          console.log(`Failed to convert ${cliArgs[1]} to gif`);
        })
        .save(`${fileName}.gif`);
      break;
    default:
      console.log(`Expected first CLI arguement to be: "mp4||gif" but got "${cliArgs[0]}" instead`)
  }
}
