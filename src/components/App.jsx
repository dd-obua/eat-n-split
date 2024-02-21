import initialFriends from '../initialFriends';

const App = () => {
  return (
    <main className="app">
      <div className="sidebar">
        <FriendsList />
        <form action="">
          <p>
            <img src="" alt="friend" /> <label for="">Friend's name </label>
            <input type="text" />
          </p>
          <p>
            <img src="" alt="friend" /> <label for="">Image URL </label>
            <input type="text" />
          </p>
          <button>Add</button>
        </form>
      </div>

      <form action="">
        <h2>SPLIT A BILL WITH SARAH</h2>
        <p>
          <img src="" alt="Illustration" />
          <label for="">Bill value</label>
          <input type="text" />
        </p>
        <p>
          <img src="" alt="Illustration" />
          <label for="">Bill value</label>
          <input type="text" />
        </p>
        <p>
          <img src="" alt="Illustration" />
          <label for="">Bill value</label>
          <input type="text" />
        </p>
        <p>
          <img src="" alt="Illustration" />
          <label for="">Bill value</label>
          <input type="text" />
        </p>
        <button>Split bill</button>
      </form>
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
      <button className="button">Select</button>
    </li>
  );
};

export default App;
