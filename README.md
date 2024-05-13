<div align="center">
  <img src="/IMAGES/NotWordle.png" alt="NotWordle Image" width=750>
</div>

# Wordle Clone in React <img src="/IMAGES/React-Dark.svg" width=30 alt="React Icon"> <img src="/IMAGES/Vite-Dark.svg" width=30 alt="Vite Icon">
 
This project was made following the [Build a Wordle Clone in REACTJS](https://www.youtube.com/watch?v=WDTNwmXUz2c) tutorial by [PedroTech](https://github.com/machadop1407) and deployed on Vercel <img src="/IMAGES/Vercel-Dark.svg" width=16 alt="Vercel Icon">. Go take a look of it: [NotWordle](https://not-wordle-navy.vercel.app/) <img src="/public/favicon.ico" width=16 alt="W Icon">.

**This project was created solely to practice React. You can play the original Wordle game here: [Wordle](https://www.nytimes.com/games/wordle/index.html)**

### How to run the project

#### Installing Dependencies

```bash
npm i
```

#### Starting the Project

```bash
npm run dev
```

### Things you can learn from this tutorial:

- useEffect hook
- useContext hook
- useCallback hook
- Conditional rendering
- Matrix rendering

### Bugs fixed within this tutorial: 

Here are the bugs that I encountered while following the tutorial:

- Letters that appear in the correct word but not in the correct position were not being highlighted in yellow. (Modified to uppercase the correct word in almost const of the Letter.jsx file)
  
  **Before**
  ``` javascript
   const almost =
    !correct && letter !== "" && correctWord.includes(letter);
  ```
  **After**
  ``` javascript
   const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  ``` 
- The GameOver component was not being displayed when the correct word was guessed in any attempt. (Modified the todaysWord from words.js file to uppercase)

  **Before**
  ``` javascript
   todaysWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  ```
  **After**
  ``` javascript
   todaysWord = wordArray[Math.floor(Math.random() * wordArray.length)].toUpperCase();
  ```
- If the word that you entered is not a word, but it is the sixth attempt, it still counts as an attempt and the game over is triggered. (Modified the 'onEnter' function condition in the App.jsx file to assess the final attempt, which previously did not verify whether the entered sequence was an actual word from the bank.)

  **Before**
  ``` javascript
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  ```
  **After**
  ``` javascript
    if (currAttempt.attempt === 5 && wordSet.has(currWord.toLowerCase())) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  ```

  **In the next table you can see the bugs that were mentioned before**

<table>
  <tr>
    <th align="center">BUG :bug:</th>
    <th align="center">DESCRIPTION :information_source:</th>
  </tr>
  <tr>
    <td>
      <img src="/IMAGES/yellowLetterAndGameOver.png" alt="NotWordle Image" width="500">
    </td>
    <td align="left">
      <p>
        - In the first attempt (RIGHT word), you can see that the letters R, I, and T appear in the correct word (WRITE word); however, these letters are not highlighted in yellow (letters that appear in the correct word but not in the correct position).
      <p>
      <p>
        - In the third attempt, all the letters of the word WRITE appear in green, indicating that the word has been guessed. However, the keyboard remains on the screen instead of the GameOver component, which displays the correct word and the number of attempts taken to guess it. This allows you to continue entering words until the game ends, even if you have already guessed the correct word, resulting in a losing GameOver message.
      </p>
    </td>
  </tr>
    <tr>
    <td>
      <img src="/IMAGES/notAWordAttempt.png" alt="NotWordle Image" width="500">
    </td>
    <td align="left">
      <p>
        - In the sixth attempt, although the entered word is displayed in black, signifying that it is not recognized as a valid word, it is still counted as an attempt, leading to the triggering of the GameOver component. Similar to the other five attempts, users have the option to delete an invalid word.
      <p>
    </td>
  </tr>
</table>

### To Do

<table>
  <tr>
    <th align="center">Task</th>
    <th align="center">Completed?</th>
  </tr>
  <tr>
    <td align="center">
      Change design 
    </td>
    <td align="center">
      :heavy_check_mark:
    </td>
  </tr>
  <tr>
    <td align="center">
      Create "Rush" mode 
    </td>
    <td align="center">
      :heavy_check_mark:
    </td>
  </tr>
  <tr>
    <td align="center">
      Restart game feature
    </td>
    <td align="center">
      :heavy_check_mark:
    </td>
  </tr>
    <tr>
    <td align="center">
      Fully responsive
    </td>
    <td align="center">
      :heavy_multiplication_x:
    </td>
  </tr>
</table>



