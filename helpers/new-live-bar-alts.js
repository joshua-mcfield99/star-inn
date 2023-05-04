import path from 'path';
import fs from 'fs';

const JSON_FILE_PATH = path.join(process.cwd(), 'data', 'liveBarAlts.json');

let liveBarAlts = [];

const saveLiveBarAlts = () => {
  fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(liveBarAlts));
};

const loadLiveBarAlts = () => {
  if (fs.existsSync(JSON_FILE_PATH)) {
    const data = fs.readFileSync(JSON_FILE_PATH);
    try {
      liveBarAlts = JSON.parse(data);
    } catch (err) {
      console.error(`Failed to parse liveBarAlts.json: ${err}`);
    }
  }
};

const addLiveBarAlt = (altText) => {
  liveBarAlts.push(altText);
  saveLiveBarAlts();
};

const clearLiveBarAlts = () => {
  liveBarAlts = [];
  saveLiveBarAlts();
};

loadLiveBarAlts();

export { liveBarAlts, addLiveBarAlt, clearLiveBarAlts };