import type {FC} from 'react';
import React, {memo, useEffect, useState} from 'react';

import resets from './_resets.module.css';
import {AkarIconsCircleXIcon} from './assets/AkarIconsCircleXIcon';
import {BxImagesIcon} from './assets/BxImagesIcon';
import QuestionsDataService from "../services/QuestionsService";
import {FrameRightSide} from './FrameRightSide';
import classes from './UserExperience.module.css';

interface Props {
  className?: string;
}

interface data {
  id: number;
  title: string;
  description: string;
}

/* @figmaId 7:48 */
export const UserExperience: FC<Props> = memo(function UsersAskingQ(props = {}) {
  const [qDialogVisibility, setQDialogVisibility] = useState(false);
  const [pListVisibility, setPListVisibility] = useState(true);
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionContent, setQuestionContent] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    retrieveQuestionsFromDataStore();
  }, [pListVisibility]);

  const onChangeQuestionTitle = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const questionTitle = e.target.value;
    setQuestionTitle(questionTitle);
  };

  const onChangeQuestionContent = (e: React.ChangeEvent<HTMLTextAreaElement>)=> {
    const questionContent = e.target.value;
    setQuestionContent(questionContent);
  };

  async function submitQuestionToDataStore() {
    let data = {
      title: questionTitle,
      description: questionContent
    };
    await QuestionsDataService.create(data)
        .then(response => {
          if (response) {
            console.log(response);
          } else {
            console.log("Response is undefined");
          }
        })
        .catch(e => {
          console.log(e);
          alert("POST Request-"+e);
        });
  }

  async function retrieveQuestionsFromDataStore() {
    await QuestionsDataService.getAll()
        .then(async response => {
          if (response) {
            await setQuestions(response.data);
            console.log(response.data);
          } else {
            console.log("Response is undefined");
          }
        })
        .catch(e => {
          console.log(e);
          alert("GET Request-"+e);
        });
  }

  function showQuestion() {
    setQDialogVisibility(true);
    setPListVisibility(false);
  }

  function closeQuestion() {
    setQDialogVisibility(false);
    setPListVisibility(true);
  }

  async function postQuestion() {
    if (questionTitle.trim() === "") {
      alert("Question Title is empty");
    } else if (questionContent.trim() === "") {
      alert("Question Content is empty");
    } else {
      await submitQuestionToDataStore();
      setQuestionTitle("");
      setQuestionContent("");
      setQDialogVisibility(false);
      setPListVisibility(true);
      await retrieveQuestionsFromDataStore();
    }
  }

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.Header}></div>
      <button onClick={showQuestion} className={classes.askQuestionButton}>
        <div className={classes.askAQuestion}>Ask a question</div>
      </button>
      <div className={classes.frameLogo}>
        <div className={classes.frameLogo1}>
          <div className={classes.logoImage}></div>
          <div className={classes.nearProtocol}>Protocol</div>
        </div>
      </div>

      <FrameRightSide/>

      <div className={classes.frameNewQuestion} style={{display: qDialogVisibility ? "block" : "none"}}>
        <div className={classes.frameNewQuestion1}>
          <div className={classes.NewQuestionFrame}>
            <div className={classes.DialogHeaderFrame}>
              <div className={classes.newQuestion}>New Question</div>
              <div className={classes.akarIconsCircleX}>
                <button onClick={closeQuestion}>
                  <AkarIconsCircleXIcon className={classes.icon}/>
                </button>
              </div>
            </div>
            <div className={classes.QuestionTitleFrame}>
              <input
                  type="text"
                  className="form-control"
                  maxLength={256}
                  placeholder="Write question title here"
                  value={questionTitle}
                  onChange={onChangeQuestionTitle}
              />
            </div>
            <div className={classes.QuestionFrame}>
                  <textarea
                      style={{resize: "none"}}
                      maxLength={10000}
                      rows={8}
                      className="form-control"
                      placeholder="Write actual question here"
                      value={questionContent}
                      onChange={onChangeQuestionContent}
                  />
            </div>
            <div className={classes.DialogLine}></div>
            <div className={classes.SubmitFrame}>
              <div className={classes.questionLine}></div>
              <div className={classes.submitFrame1}>
                <div className={classes.submitFrame2}>
                  <div className={classes.aa}>Aa</div>
                  <div className={classes.bxImages}>
                    <BxImagesIcon className={classes.icon}/>
                  </div>
                </div>
                <div className={classes.submitFrame3}>
                  <button onClick={postQuestion} className={classes.btnPost}>
                    <div className={classes.post}>Post</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-group">
        {questions &&
            questions.map((question: data, index) => (
                <li>
                  <div className={classes.feed_list} style={{display: pListVisibility ? "block" : "none"}}>
                    <div className={classes.postedQuestionFrame}>
                      <div className={classes.postedQuestionFrame1}>
                        <div className={classes.postedQuestionFrame2}>
                          <div className={classes.question_title}>
                            {question.title}
                          </div>
                          <div className={classes.question_content}>
                            {question.description}
                          </div>
                        </div>
                        <div className={classes.postedQuestionLine}></div>
                      </div>
                    </div>
                    <div className={classes.askByFrame}>
                      <div className={classes.askByGroupFrame}>
                        <div className={classes.askedBy}>Asked by:</div>
                      </div>
                      <div className={classes.askByFrame1}>
                        <div className={classes.avatar_portrait1}></div>
                        <div className={classes.AskByFrame2}>
                          <div className={classes.pseudoNearExpert2}>Pseudo Near Expert</div>
                          <div className={classes._2Answers1Question}>2 Answers . 1 Question</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
            ))}
      </ul>
    </div>
  );
});
