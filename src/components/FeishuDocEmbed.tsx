import { FC } from 'react';

interface FeishuDocEmbedProps {
  docUrl: string;
}

const FeishuDocEmbed: FC<FeishuDocEmbedProps> = ({ docUrl }) => {
  return <iframe src={docUrl} width='100%' height='600px' allowFullScreen />;
};

export default FeishuDocEmbed;
