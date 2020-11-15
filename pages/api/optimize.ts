import { NextApiRequest, NextApiResponse } from 'next';
import { File, IncomingForm } from 'formidable';
import * as fs from 'fs';
import { optimizeSVG } from 'sssvg';

// Disable Next.js body parsing
export const config = {
    api: {
        bodyParser: false
    }
};

export default (req: NextApiRequest, res: NextApiResponse) => {
    return new Promise(async (resolve, reject) => {
        const form = new IncomingForm({});
        form
            .on('file', (name: string, file: File) => {
                const data = fs.readFileSync(file.path);
                optimizeSVG(file.name, data.toString('utf8'), {
                    crop: true,
                    viewBox: {
                        x: 0,
                        y: 0,
                        height: 1000,
                        width: undefined
                    }
                }).then((optimized) => {
                    resolve(res.status(200).json({
                        svg: Buffer.from(optimized).toString('base64')
                    }));
                }).catch((err) => {
                    reject(res.status(500).send(err));
                });
            })
            .on('aborted', () => {
                reject(res.status(500).send('Aborted'));
            });

        await form.parse(req);
    });
}
