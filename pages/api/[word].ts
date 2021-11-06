import { NextApiResponse } from 'next'
import * as line from '@line/bot-sdk';

const config = {
  channelAccessToken: process.env.NEXT_PUBLIC_LINE_ACCESS_TOKEN!,
  channelSecret: process.env.NEXT_PUBLIC_LINE_CHANNEL_SECRET!
};

const client = new line.Client(config);

export default async ({ query: { word } }: { query: { word: string } }, res: NextApiResponse) => {
  console.info('res data', word)
  await client.broadcast({
    type: "text",
    text: word
  }).then(data => console.log("送信完了しました。",data))
    .catch(e => console.log(e))
  res.status(200).json({ message: `you requested for ${word} ` });
};