import { data } from "./src/game/data";
window.onload = () => {
  setTimeout(function () {
    let preloader = document.getElementById("preloader");
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
    }
  }, 1000);
  console.log(innerWidth + " " + innerHeight);
  const bgAudio = new Audio("music/gameBg.mp3");
  bgAudio.volume = 0.008;
  const start = document.querySelector(".start");
  const startBtn = document.querySelector(".start .content button");
  const startContent = document.querySelector(".start .content");
  const startLevel = document.querySelector(".start .level");
  const startLevelItem = document.querySelectorAll(
    ".start .level .level__item"
  );
  const levelBtn = document.querySelectorAll(".level .pages span");
  const levelPages = document.querySelectorAll(".level .page");
  const game = document.querySelector(".game");
  const gameTitle = document.querySelector(".game .game__inner h2");
  const gameQuestion = document.querySelector(".game__inner-content h3");
  const gameAnswersBox = document.querySelector(".game__inner-answers");
  const gameAnswers = document.querySelectorAll(".game__inner-answers p");
  const gameBtn = document.querySelector(".game__inner-content button");
  const gameContent = document.querySelector(".game .game__inner-content");
  const gameCount = document.querySelector(".game .counter .count");
  const gameQuant = document.querySelector(".game .counter .quantity");
  const gameTrues = document.querySelector(".game .counter .trues");
  const gameFalses = document.querySelector(".game .counter .falses");
  const gameQuestionResult = document.querySelector(".questionResult");
  const gameModal = document.querySelector(".game .modal");
  const gameModalTitle = document.querySelector(".game .modal__inner .title");
  const gameModalBtn = document.querySelector(".game .modal__inner .btn");
  const gameTimer = document.querySelector(".game .timer");
  const gameTimerText = document.querySelector(".game .timer__body");
  const gameTimerBg = document.querySelector(".game .timer__bg");
  const gameModalToMenuBtn = document.querySelector(
    ".game .modal__inner .toMenu-btn"
  );
  const prevBtn = document.querySelector(".prev");
  const timeOutToMenuBtn = document.querySelector(".timeOutToMenu");
  const win = document.querySelector(".win");
  const winBtn = document.querySelector(".win .win__btn");
  const thinker = document.querySelector(".thinker");
  const aristotel = document.querySelector(".aristotel");
  const kant = document.querySelector(".kant");
  const nietzsche = document.querySelector(".nietzsche");
  const myResults = document.querySelector(".myResults");
  const myResultsList = document.querySelector(".myResults__list");
  const myResultsBox = document.querySelector(".myResults__box");
  const myResultsBtn = document.querySelector(".myResultsBtn");
  const myResultGlobalTime = document.querySelector(".myResults__globalTime");
  const myResultNullBtn = document.querySelector(".myResults__null-btn");
  let globalTime = 0;
  let globalTimeArr = [];
  let globalTimeArrSum;
  let answerBool = false;
  let falsesBool = true;
  let deletedQuestions = [];
  let resultArr = [];
  let levels = [
    // data[0].name,
    // data[1].name,
    // data[2].name,
    // data[3].name,
    // data[4].name,
    // data[5].name,
    // data[6].name,
  ];

  const allLevels = [];
  data.forEach((item) => allLevels.push(item.name));
  if (innerHeight < 780 && innerWidth < 1380) {
    gameTimer.style = "width: 80px; height: 80px; margin-bottom: 15px;";
    gameTimerText.style = "font-size: 28px";
    gameTitle.style = "padding-top: 8vh; font-size: 50px;";
    gameQuestion.style = "font-size: 18px; margin-bottom: 15px;";
    gameAnswersBox.style = "gap: 15px; margin-bottom: 20px;";
    gameAnswers.forEach((item) => (item.style.fontSize = "16px"));
  }
  if (innerHeight < 770 && innerWidth < 470) {
    gameQuestion.style.fontSize = "16px";
    gameAnswersBox.style = "gap: 5px; margin-bottom: 15px;";
    gameAnswers.forEach(
      (item) => (item.style = "min-width: 310px; font-size: 14px;")
    );
  }
  if (innerHeight < 600 && innerWidth < 400) {
    gameTitle.style = "font-size: 35px;";
    gameQuestion.style = "font-size: 14px; margin-bottom: 10px";
    gameTimer.style = "width: 80px; height: 80px; margin-bottom: 15px;";
    gameTimerText.style = "font-size: 25px ";
    gameAnswers.forEach((item) => (item.style = "padding: 5px"));
  }

  function shuffle(array) {
    // перемешка
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const toMenu = () => {
    win.classList.contains("active") ? win.classList.remove("active") : "";
    gameModal.classList.remove("active");
    start.classList.remove("hidden");
    startLevel.classList.remove("active");
    startContent.classList.remove("hidden");
    gameTimerBg.classList.remove("active");
  };
  const toGlav = () => {
    if (startLevel.classList.contains("active")) {
      prevBtn.onclick = () => {
        startLevel.classList.remove("active");
        startContent.classList.remove("hidden");
        prevBtn.classList.remove("active");
        aristotel.classList.remove("hidden");
        thinker.classList.remove("hidden");
        kant.classList.remove("active");
        nietzsche.classList.remove("active");
      };
    }
  };

  levelBtn.forEach((item) => {
    item.onclick = () => {
      levelBtn.forEach((btns) => btns.classList.remove("active"));
      item.classList.add("active");
      levelPages.forEach((page) => {
        if (item.dataset.id == page.dataset.id) {
          page.classList.contains("hidden")
            ? page.classList.remove("hidden")
            : "";
          page.classList.add("active");
        } else {
          page.classList.contains("active")
            ? page.classList.remove("active")
            : "";
          page.classList.add("hidden");
        }
      });
    };
  });

  myResultsBtn.onclick = () => {
    const storageResultsArr = localStorage.getItem("resultArr");
    resultArr = JSON.parse(storageResultsArr)
      ? JSON.parse(storageResultsArr)
      : [];
    prevBtn.classList.add("active");
    prevBtn.onclick = () => {
      prevBtn.classList.remove("active");
      myResults.classList.remove("active");
    };
    if (resultArr.length > 0) {
      myResultsBox.style.display = "block";
      const storageGlobalTimeArr = localStorage.getItem("time");
      if (storageGlobalTimeArr) {
        globalTimeArr = JSON.parse(storageGlobalTimeArr);
      }
      globalTimeArrSum = globalTimeArr.reduce((acc, val) => acc + val, 0);
      myResultNullBtn.classList.remove("hidden");
      let minText;
      let secText;
      let minutes = Math.floor(globalTimeArrSum / 60);
      let seconds = globalTimeArrSum % 60;
      const setTimeTextes = (time, text, text1, text2) => {
        if (time === 1) {
          return text;
        } else if (time === 2 || time === 3 || time === 4) {
          return text1;
        } else {
          return text2;
        }
      };
      minText = setTimeTextes(minutes, "минута", "минуты", "минут");
      secText = setTimeTextes(seconds, "секунда", "секунды", "секунд");
      const totalTimeText = "Общее время игры: ";
      myResultGlobalTime.innerHTML =
        totalTimeText +
        (minutes > 0
          ? `<br> ${minutes} ${minText} <br> ${seconds} ${secText}`
          : `<br> ${seconds} ${secText}`);
      myResultsList.innerHTML = "";
      for (let i = 0; i < resultArr.length; i++) {
        myResultsList.insertAdjacentHTML(
          "beforeend",
          `
            <li class="myResults__list-item">
                <h3 class="myResult__name">
                    ${resultArr[i].id}. – 
                    <span>${resultArr[i].name}</span>
                </h3>
                <div style="display:flex; gap: 10px;">
                <p class="myResult__trues">
                Правильных: 
                <span>${resultArr[i].trues}</span>
                </p>
                <p class="myResult__falses">
                Ошибок: 
                <span>${resultArr[i].falses}</span>
                </p>
                </div>
            </li>
            `
        );
      }
      myResultNullBtn.onclick = () => {
        minutes = 0;
        seconds = 0;
        globalTime = 0;
        globalTimeArr = [];
        globalTimeArrSum = 0;
        resultArr = [];
        levels = [];
        myResultsList.innerText = "";
        myResultGlobalTime.innerHTML = "";
        myResultNullBtn.classList.add("hidden");
        myResultsBox.style.display = "none";
        localStorage.clear();
        generate();
      };
    }
    myResults.classList.add("active");
  };
  startBtn.onclick = () => {
    if (bgAudio.paused) {
      bgAudio.play().catch((error) => {
        console.error("Ошибка при воспроизведении фоновой музыки:", error);
      });
      bgAudio.loop = true;
    }
    startContent.classList.add("hidden");
    startLevel.classList.add("active");
    prevBtn.classList.add("active");
    aristotel.classList.add("hidden");
    thinker.classList.add("hidden");
    kant.classList.add("active");
    nietzsche.classList.add("active");
    toGlav();
  };
  const generate = () => {
    const levelsStorage = localStorage.getItem("levels");
    if (JSON.parse(levelsStorage)) {
      levels = JSON.parse(levelsStorage);
    }
    !levels.length ? levels.push(data[0].name) : "";
    startLevelItem.forEach((levelItem, index) => {
      // удалем все заблокированные классы, чтобы обновить их кол-во
      levelItem.classList.remove("notAvailable");
      const blockedItems = [...levelItem.children];
      blockedItems[0].innerText = index + 1;
      blockedItems[0].style.backgroundColor = null;
      if (levels.includes(levelItem.dataset.id)) {
        levelItem.onclick = () => {
          const globalTimeInterval = setInterval(() => globalTime++, 1000);
          gameFalses.innerText = 0;
          gameCount.innerText = 0;
          startLevel.classList.remove("active");
          start.classList.add("hidden");
          let levelArr = data.find((obj) => obj.name === levelItem.dataset.id);
          game.style.backgroundImage = `url(${levelArr.img})`;
          deletedQuestions.length > 0
            ? (levelArr.questions = [
                ...levelArr.questions,
                ...deletedQuestions,
              ])
            : "";
          let nextArrItemIndex;
          data.forEach((item, index) =>
            item.name == levelArr.name ? (nextArrItemIndex = index + 1) : ""
          );
          const setContentInGame = () => {
            gameTitle.innerText = levelArr.name;
            index = Math.floor(Math.random() * levelArr.questions.length);
            game.style.backgroundImage = `url(${levelArr.img})`;
            gameQuestion.innerText = levelArr.questions[index].question;
            const answers = [
              ...levelArr.questions[index].falseAnswers,
              levelArr.questions[index].trueAnswer,
            ];
            shuffle(answers); // вызов перемешки
            gameAnswers.forEach((answer, idx) => {
              answer.innerText = answers[idx];
              answer.onclick = () => {
                answerBool = true;
                gameAnswers.forEach((item) => item.classList.remove("active"));
                answer.classList.add("active");
              };
            });
          };
          gameQuant.innerText = levelArr.questions.length;
          let index;
          let timeInt;
          let timer = 30;
          const timerFunc = () => {
            gameTimerText.innerText = timer + "c";
            gameTimer.classList.add("active");
            gameTimerBg.classList.add("active");
            // setTimeout(() => {
            timeInt = setInterval(() => {
              gameTimerText.innerText =
                parseInt(gameTimerText.innerText) - 1 + "с";
              if (parseInt(gameTimerText.innerText) == 0) {
                clearInterval(timeInt);
                gameModalTitle.innerText = "Время истекло!";
                gameModalBtn.innerText = "Попробовать еще раз";
                gameModalBtn.onclick = () => {
                  answerBool = true;
                  gameFalses.innerText = 0;
                  gameCount.innerText = 0;
                  gameTimerBg.classList.remove("active");
                  gameModal.classList.remove("active");
                  gameAnswers.forEach((item) =>
                    item.classList.remove("active")
                  );
                  // возвращаем удаленные вопросы
                  levelArr.questions = [
                    ...levelArr.questions,
                    ...deletedQuestions,
                  ];
                  setTimeout(() => timerFunc(), 10);
                  setContentInGame();
                  deletedQuestions = [];
                };
                timeOutToMenuBtn.onclick = () => {
                  clearInterval(globalTimeInterval);
                  globalTimeArr.push(globalTime);
                  localStorage.setItem("time", JSON.stringify(globalTimeArr));
                  globalTime = 0;
                  levelArr.questions = [
                    ...levelArr.questions,
                    ...deletedQuestions,
                  ];
                  deletedQuestions = [];
                  toMenu();
                  prevBtn.classList.remove("active");
                };
                gameModal.classList.add("active");
              }
            }, 1000);
            // }, 1200);
          };
          timerFunc();
          setContentInGame();
          prevBtn.onclick = () => {
            clearInterval(globalTimeInterval);
            setTimeout(() => gameTimerBg.classList.remove("active"), 500);
            start.classList.remove("hidden");
            gameModal.classList.remove("active");
            startLevel.classList.add("active");
            gameAnswers.forEach((item) => item.classList.remove("active"));
            levelArr.questions = [...levelArr.questions, ...deletedQuestions];
            deletedQuestions = [];
            setTimeout(() => clearInterval(timeInt), 1200);
            toGlav();
          };
          gameBtn.onclick = () => {
            if (answerBool && falsesBool) {
              answerBool = false;
              setTimeout(() => (answerBool = true), 1500);
              const isTrueAnswer = [...gameAnswers].find((item) =>
                item.classList.contains("active")
              );
              const pushResults = () => {
                const findedEl = resultArr.find(
                  (item) => item.id == levelArr.id
                );
                if (findedEl) {
                  findedEl.name = levelArr.name;
                  findedEl.trues = gameCount.innerText;
                  findedEl.falses = gameFalses.innerText;
                  const newResults = [
                    findedEl.name,
                    findedEl.trues,
                    findedEl.falses,
                  ];
                  const storageResArr = JSON.parse(
                    localStorage.getItem("resultArr")
                  );
                  console.log(storageResArr);
                  const findEl = storageResArr.find(
                    (item) => item.name == newResults[0]
                  );
                  if (findEl) {
                    findEl.trues = newResults[1];
                    findEl.falses = newResults[2];
                    localStorage.setItem(
                      "resultArr",
                      JSON.stringify(storageResArr)
                    );
                    console.log(storageResArr);
                  }
                } else {
                  resultArr.push({
                    id: levelArr.id,
                    name: levelArr.name,
                    trues: gameCount.innerText,
                    falses: gameFalses.innerText,
                  });
                  localStorage.setItem("resultArr", JSON.stringify(resultArr));
                }
              };
              if (
                isTrueAnswer &&
                isTrueAnswer.innerText === levelArr.questions[index].trueAnswer
              ) {
                gameQuestionResult.innerHTML = "&#10004;";
                gameCount.innerText = parseInt(gameCount.innerText) + 1;
                parseInt(gameCount.innerText) == 1
                  ? (gameTrues.innerText = "правильный")
                  : (gameTrues.innerText = "правильных");
                const deletes = levelArr.questions.splice(index, 1);
                deletedQuestions.push(...deletes); // удаленные добавляем в массив
                gameAnswers.forEach((item) => item.classList.remove("active"));
                if (levelArr.questions.length > 0) {
                  clearInterval(timeInt);
                  gameContent.classList.add("active");
                  setTimeout(() => {
                    setContentInGame();
                    gameContent.classList.remove("active");
                    gameTimerBg.classList.remove("active");
                    setTimeout(() => timerFunc(), 200);
                  }, 1000);
                } else {
                  clearInterval(timeInt);
                  setTimeout(() => {
                    gameTimerText.innerText = timer + "c";
                    gameTimerBg.classList.remove("active");
                  }, 1000);
                  if (
                    JSON.stringify(levels) == JSON.stringify(allLevels) &&
                    levelArr.name == allLevels[allLevels.length - 1]
                  ) {
                    clearInterval(globalTimeInterval);
                    globalTimeArr.push(globalTime);
                    localStorage.setItem("time", JSON.stringify(globalTimeArr));
                    globalTime = 0;
                    startLevel.classList.remove("active");
                    start.classList.remove("hidden");
                    prevBtn.classList.remove("active");
                    win.classList.add("active");
                    kant.classList.remove("active");
                    nietzsche.classList.remove("active");
                    aristotel.classList.remove("hidden");
                    thinker.classList.remove("hidden");
                    levelArr.questions = [
                      ...levelArr.questions,
                      ...deletedQuestions,
                    ];
                    deletedQuestions = [];
                    winBtn.onclick = () => {
                      win.classList.remove("active");
                      pushResults();
                      toMenu();
                    };
                    generate();
                  } else {
                    clearInterval(globalTimeInterval);
                    globalTimeArr.push(globalTime);
                    localStorage.setItem("time", JSON.stringify(globalTimeArr));
                    globalTime = 0;
                    gameModalTitle.innerText = "Победа!";
                    gameModalBtn.innerText = "Перейти на следующий уровень";
                    // возвращаем удаленные вопросы
                    levelArr.questions = [
                      ...levelArr.questions,
                      ...deletedQuestions,
                    ];
                    // после победы добавим новый уровень
                    deletedQuestions = [];
                    !levels.includes(data[nextArrItemIndex].name)
                      ? levels.push(data[nextArrItemIndex].name)
                      : "";
                    localStorage.setItem("levels", JSON.stringify(levels));
                    pushResults();
                    gameModalBtn.onclick = () => {
                      start.classList.remove("hidden");
                      gameModal.classList.remove("active");
                      startLevel.classList.add("active");
                      generate();
                    };
                    gameModalToMenuBtn.classList.add("active");
                    const activeModalBtn = document.querySelector(
                      ".game .modal__inner .toMenu-btn.active"
                    );
                    // кнопка на главное меню
                    activeModalBtn.onclick = () => {
                      toMenu();
                      prevBtn.classList.remove("active");
                      gameAnswers.forEach((item) =>
                        item.classList.remove("active")
                      );
                      kant.classList.remove("active");
                      nietzsche.classList.remove("active");
                      aristotel.classList.remove("hidden");
                      thinker.classList.remove("hidden");
                      generate();
                    };
                    !win.classList.contains("active")
                      ? gameModal.classList.add("active")
                      : "";
                  }
                }
              } else if (falsesBool && isTrueAnswer) {
                falsesBool = false;
                setTimeout(() => (falsesBool = true), 1500);
                gameQuestionResult.innerHTML = "&#10006;";
                gameFalses.innerText = +gameFalses.innerText + 1;
              }
              if (!win.classList.contains("active") && isTrueAnswer) {
                gameQuestionResult.classList.add("active");
                setTimeout(
                  () => gameQuestionResult.classList.remove("active"),
                  1000
                );
              }
            }
          };
        };
      } else {
        levelItem.classList.add("notAvailable");
        levelItem.onclick = () => null;
        const blockedItems = [...levelItem.children];
        blockedItems[0].innerText = "✖";
        blockedItems[0].style.backgroundColor = "#111";
      }
    });
  };
  generate();
};
