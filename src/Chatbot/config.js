import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'

import Options from '../components/Options/Options'
import Quiz from '../components/Quiz/Quiz'

const config = {
  botName: 'LearningBot',
  initialMessages: [
    createChatBotMessage(`Hello. What do you want to learn`, {
      widget: 'options',
    }),
  ],
  widgets: [
    {
      widgetName: 'options',
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: 'javascriptQuiz',
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: 'What is closure?',
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: 'Explain prototypal inheritance',
            answer:
              'Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.',
            id: 2,
          },
        ],
      },
    },
  ],
}

export default config

/**

// Config starter code
import { createChatBotMessage } from 'react-chatbot-kit'
import Avatar from './Avatar'
import React from 'react'
import StartBtn from './StartBtn'
import StartAge from './StartAge'
import data from './data'
import DipslayImage from './DipslayImage'

const config = {
  botName: 'Lawyer-bot',
  initialMessages: [
    createChatBotMessage(`Hi! i'm your lawyer bot how can i help?`, {
      widget: 'startBtn',
    }),
  ],
  customComponents: { botAvatar: (props) => <Avatar {...props} /> },

  state: {
    checker: null,
    data,
    userData: {
      name: '',
      age: 0,
      category: '',
      product: {
        name: '',
        link: '',
        imageUrl: '',
      },
    },
  },

  widgets: [
    {
      widgetName: 'startBtn',
      widgetFunc: (props) => <StartBtn {...props} />,
    },
    {
      widgetName: 'startAge',
      widgetFunc: (props) => <StartAge {...props} />,
    },
    {
      widgetName: 'finalImage',
      widgetFunc: (props) => <DipslayImage {...props} />,
    },
  ],
}
export default config
**/
