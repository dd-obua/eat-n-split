import { useState } from 'react';
import initialFriends from '../initialFriends';

const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};

const App = () => {
  return (
    <main className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add friend</Button>
      </div>
      <FormSplitBill />
    </main>
  );
};

const FriendsList = () => {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

const Friend = ({ friend }) => {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">You owe Clark {Math.abs(friend.balance)}&euro;</p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}&euro;
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>Select</Button>
    </li>
  );
};

const FormAddFriend = () => {
  return (
    <form className="form-add-friend">
      <label>Friend</label>
      <input type="text" />

      <label>Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
};

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with x</h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧍 Your expense</label>
      <input type="text" />

      <label> 🧑‍🤝‍🧑 X's expense </label>
      <input type="text" disabled />

      <label>🤑Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default App;
