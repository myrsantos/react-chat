import { ChatBubble } from './ChatBubble';
import { SentMessageBox } from './SentMessageBox';
import { Stack } from '@mui/material';

export const ChatContainer = () => (
  <>
    <div
      style={{
        maxHeight: 'calc(100vh - 280px)',
        margin: '40px 0',
        overflow: 'auto',
      }}
    >
      <Stack spacing={4}>
        <ChatBubble></ChatBubble>
        <ChatBubble></ChatBubble>
        <ChatBubble></ChatBubble>
        <ChatBubble></ChatBubble>
        <ChatBubble></ChatBubble>
        <ChatBubble></ChatBubble>
        <ChatBubble></ChatBubble>
        <ChatBubble></ChatBubble>
        <ChatBubble self></ChatBubble>
      </Stack>
    </div>
    <div style={{ maxHeight: '130px' }}>
      <SentMessageBox
        sendMsg={(val) => {
          console.log(val);
        }}
      ></SentMessageBox>
    </div>
  </>
);
