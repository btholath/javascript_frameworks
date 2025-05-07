import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import maxImg from './assets/max.jpg';

function App() {
  return (
    <>
      <header>
        <img src={maxImg} alt="An image of Max" />
        <h1>King David</h1>
        <p>Ancient ruler, warrior, psalmist & spiritual leader</p>
      </header>
      <main>
        <p>King David was the second king of Israel and Judah, reigning around 1010–970 BCE.</p>
        <p>
          His name is known throughout history as a shepherd boy who rose to prominence by defeating Goliath and eventually became a unifying king of Israel.

          David is widely regarded not only as a political and military leader but also as the credited author of many of the Psalms — poetic hymns and prayers found in the Bible. His legacy shaped both religious thought and the political history of ancient Israel.
        </p>
      </main>
    </>
  );
}

export default App;
