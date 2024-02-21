const App = () => {
  return (
    <div className="app">
      <div>
        <ul>
          <li>
            <img src="" alt="Person" />
            <h3>Clark</h3>
            <p>You owe Clark 7&euro;</p>
          </li>
          <li>
            <img src="" alt="Person" />
            <h3>Clark</h3>
            <p>You owe Clark 7&euro;</p>
          </li>
          <li>
            <img src="" alt="Person" />
            <h3>Clark</h3>
            <p>You owe Clark 7&euro;</p>
          </li>
        </ul>
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
    </div>
  );
};

export default App;
