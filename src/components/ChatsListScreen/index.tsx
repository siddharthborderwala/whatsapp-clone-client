import React from 'react';
import { History } from 'history';
import styled from 'styled-components';

import ChatsList from './ChatsList';
import ChatsNavbar from './ChatsNavbar';

const Container = styled.div`
  height: 100vh;
`;

interface ChatListScreenProps {
  history: History;
}

const ChatListScreen: React.FC<ChatListScreenProps> = ({ history }) => {
  return (
    <Container>
      <ChatsNavbar />
      <ChatsList history={history} />
    </Container>
  );
};

export { ChatListScreen as default };
