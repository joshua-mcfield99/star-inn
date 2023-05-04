import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import formidable from 'formidable';
import sharp from 'sharp';
import { addLiveBarAlt, clearLiveBarAlts, liveBarAlts } from '../../helpers/new-live-bar-alts';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'Live_bar');

if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const form = formidable({
    multiples: false,
    uploadDir: UPLOAD_DIR,
    fields: [{name: 'newImage'}]
});

const writeFile = promisify(fs.writeFile);

export const config = {
    api: {
        bodyParser: false,
    },
};

const removeFiles = (dirPath) => {
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (err, files) => {
            if (err) {
                reject(err);
                return;
            }
            
            const unlinkPromises = files.map((file) => {
                const filePath = path.join(dirPath, file);
                return promisify(fs.unlink)(filePath);
            });
            
            Promise.all(unlinkPromises)
            .then(() => resolve())
            .catch((err) => reject(err));
        });
    });
};

export default async function handler(req, res) {
    await removeFiles(UPLOAD_DIR);
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed', code: 'METHOD_NOT_ALLOWED' });
        return;
    }
    
    try {
        const { newImage, altText } = await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve({ newImage: files.newImage, altText: fields.altText });
                }
            });
        });
        
        if (!newImage) {
            res.status(400).json({ message: 'No file uploaded', code: 'NO_FILE_UPLOADED' });
            return;
        }
        
        const fileExtension = path.extname(newImage.originalFilename);
        
        if (!['.jpg', '.jpeg', '.png'].includes(fileExtension.toLowerCase())) {
            console.error('Invalid file type');
            res.status(400).json({ message: 'Invalid file type', code: 'INVALID_FILE_TYPE' });
            return;
        }
        
        const fileName = `LiveBar.png`;
        const filePath = path.join(UPLOAD_DIR, fileName);
        console.log(newImage.filepath);
        if (!newImage.filepath) {
            console.error('File path is undefined');
            res.status(400).json({ message: 'File path is undefined', code: 'FILE_PATH_UNDEFINED' });
            return;
        }
        
        await writeFile(filePath, await sharp(newImage.filepath).png().toBuffer());
        console.log('File uploaded successfully');
        console.log('Alt text:', altText);
        await clearLiveBarAlts();
        addLiveBarAlt(altText);
        res.status(200).json({ message: 'File uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', code: 'SERVER_ERROR' });
    }
};

