import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

import { FriendList } from './Friends/FriendList';
import friends from './Friends/friends.json';

import { TransactionHistory } from './Transactions/TransactionHistory';
import transactions from './Transactions/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};