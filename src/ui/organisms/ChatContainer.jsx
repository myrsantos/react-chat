import {ChatBubble} from './ChatBubble';
import {SentMessageBox} from './SentMessageBox';
import { Stack } from '@mui/material';

export const ChatContainer = ({self}) => (
  <>
  <div style={{maxHeight: "calc(100vh - 170px)", margin: "20px 0", overflow: "auto"}}>
    <Stack spacing={2}>

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
  <div style={{maxHeight: "130px"}}>
    <SentMessageBox sendMsg={(val) => {console.log(val);}}></SentMessageBox>
  </div>
  </>
)