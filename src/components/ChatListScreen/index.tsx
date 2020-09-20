import React from 'react';
import styled from 'styled-components';

import ChatList from './ChatList';
import ChatsNavbar from './ChatsNavbar';

const Container = styled.div`
  height: 100vh;
`;

const ChatListScreen: React.FC = () => {
  return (
    <Container>
      <ChatsNavbar />
      <ChatList />
    </Container>
  );
};

export { ChatListScreen as default };
