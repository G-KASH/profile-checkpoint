// src/App.js
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fullName: 'walter polycap',
        bio: 'Genius  philanthropist',
        imgSrc: 'https://www.freepik.com/premium-vector/school-student-boy-with-bag-profile-photo_313415046.htm',
        profession: 'Engineer & technician',
      },
      shows: false,
      mountedTime: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ shows: !this.state.shows });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { Person, shows, mountedTime } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div style={{ marginTop: '20px' }}>
            <img src={Person.imgSrc} alt={Person.fullName} width="200" />
            <h2>{Person.fullName}</h2>
            <p><strong>Bio:</strong> {Person.bio}</p>
            <p><strong>Profession:</strong> {Person.profession}</p>
          </div>
        )}

        <p style={{ marginTop: '20px' }}>
          Component mounted since: {mountedTime} seconds
        </p>
      </div>
    );
  }
}

export default App;
