import React from "react";
import Profile from "./profile";
import "./App.css";
import MyComponent from "./classComponent";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter:0,
      index: 0,
      profiles: [
        {
          name: "John Snow",
          imageUrl:
            "https://vignette.wikia.nocookie.net/game-of-thrones-le-trone-de-fer/images/f/fa/Jon_Snow.png/revision/latest?cb=20190525012401&path-prefix=fr",
          description: "character of GOT"
        },
        {
          name: "Brad Pitt",
          imageUrl:
            "https://www.gstatic.com/tv/thumb/persons/1366/1366_v9_bc.jpg",
          description: "Hollywood actor"
        },
        {
          name: "luke Skywalker",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Luke_Skywalker.png/220px-Luke_Skywalker.png",
          description: "Jedi"
        },
        {
          name: "Ben Stiller",
          imageUrl:
            "https://i.pinimg.com/236x/e4/48/40/e448402ef5d313161cbba2b185fa98fa--funny-guys-funny-people.jpg",
          description: "American comedian, actor"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyComponent />
          <div>
            {this.state.profiles.map((character, currentIndex) => (
              <button
                onClick={() =>
                  this.setState({
                    index: currentIndex
                  })
                }
              >
                {character.name}
              </button>
            ))}
          </div>
          <Profile
            name={this.state.profiles[this.state.index].name}
            imageUrl={this.state.profiles[this.state.index].imageUrl}
            description={this.state.profiles[this.state.index].description}
          />
        </header>
      </div>
    );
  }
}

export default App;
