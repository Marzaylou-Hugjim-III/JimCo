import React from 'react';
// import { Table, Card } from 'react-bootstrap';
import Header from './header';
import Username from './username';
// import Gameswon from './gameswon';


class Profile extends React.Component {
  render() {
    return (
      <>
          <Header />
          <div><h1>Profile</h1>
            <div className="profile">
              <div className="horizon-flex">
                {/* <Gameswon /> */}
                <div className="verti-flex">
                  <Username/>
                </div>
              </div >
            </div>
          </div >
      </>
    );
  }
}

export default Profile;
