import { NextApiRequest, NextApiResponse } from 'next'
import * as line from '@line/bot-sdk';

const config = {
  channelAccessToken: '',
};

const client = new line.Client(config);

export default ({ query: { word } }: { query: { word: string } }, res: NextApiResponse) => {
  console.info('res data', word)
  client.broadcast({
    type: "text",
    text: 'word'
  }).then(data => console.log(data))
    .catch(e => console.log(e))
  res.status(200).json({ message: `you requested for ${word} ` });
};