import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import DiscoverPage from "./pages/DiscoverPage";
import Person from './components/Person';
import Lonely from './components/Lonely';
import data from './data.json';
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;

  const removedPersonFromDataSrc = (peopleSource, userId) =>
    peopleSource.filter(user => user.id !== userId);

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newSuperLikedUsers = [...superLikedUsers];
    const newDislikedUsers = [...dislikedUsers];

    switch (action) {
      case 'ADD_TO_LIKED_USERS':
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId);
          newLikedUsers.push(data[userId]);

          setLikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case 'ADD_TO_DISLIKED_USERS':
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId);
          newDislikedUsers.push(data[userId]);

          setDislikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case 'ADD_TO_SUPERLIKED_USERS':
        if (!people[activeUser].superLikedUsers.includes(userId)) {
          newPeople[activeUser].superLikedUsers.push(userId);
          newSuperLikedUsers.push(data[userId]);

          setSuperLikedUsers(newSuperLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      default:
        return people;
    }
  };

  return (
    <div className="main">
      <Nav />
      <Routes>
        <Route path="/" element={<DiscoverPage />} />
        {people[1] ? (
        <Route path="/person" element={<Person key={people[1].id}
          person={people[1]}
          modifySuperficialChoices={modifySuperficialChoices}
          likedUsers={likedUsers}
         /> } />
         ) : (
          <Route path="/lonely" element={<Lonely
            activeUserImage={people[activeUser].image}
            likedUsers={likedUsers}
            superLikedUsers={superLikedUsers}
          /> } />
         )}
      </Routes>
      
    </div>
  );
}

export default App;
