import { useEffect, useState } from 'react';
import { setChatIntoStorage,getChatFromStorage } from '../../helpers/chat';
import { CHAT, SELF_DATA } from '../../helpers/variable';
import { ChatBubble } from './ChatBubble';
import { SentMessageBox } from './SentMessageBox';
import { Stack } from '@mui/material';
import { getSelfFromStorage } from '../../helpers/login';

export const ChatContainer = () => {
  const [chats, setChats] = useState([])
  const [selfId, setSelfId] = useState(false)

  useEffect(() => {
    setSelfId(getSelfFromStorage().id);
    window.addEventListener(SELF_DATA, () => {setSelfId(getSelfFromStorage().id)}, false);
    setChats(getChatFromStorage());
    window.addEventListener(CHAT, () => {setChats(getChatFromStorage())}, false);
  }, []);

  return (<>
    <div
      style={{
        maxHeight: 'calc(100vh - 280px)',
        margin: '40px 0',
        overflow: 'auto',
      }}
    >
      <Stack spacing={4} direction="column-reverse">
      {chats.map((chat) => {
            return (
              <ChatBubble self={selfId === chat.id} chat={chat}></ChatBubble>
            );
          })}
      </Stack>
    </div>
    <div style={{ maxHeight: '130px' }}>
      <SentMessageBox
        sendMsg={(val) => {
          setChatIntoStorage(val);
        }}
      ></SentMessageBox>
    </div>
  </>
)
}
