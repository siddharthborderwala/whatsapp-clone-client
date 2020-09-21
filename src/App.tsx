import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';

import MyAnimatedSwitch from './components/AnimatedSwitch';

import ChatsListScreen from './components/ChatsListScreen';
import ChatRoomScreen from './components/ChatRoomScreen';

const redirectToChats = () => <Redirect to="/chats" />;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MyAnimatedSwitch>
        <Route exact path="/chats" component={ChatsListScreen} />
        <Route
          exact
          path="/chat/:chatId"
          component={({ match }: RouteComponentProps<{ chatId: string }>) => (
            <ChatRoomScreen chatId={match.params.chatId} />
          )}
        />
      </MyAnimatedSwitch>
      <Route exact path="/" render={redirectToChats} />
    </BrowserRouter>
  );
};

export default App;
