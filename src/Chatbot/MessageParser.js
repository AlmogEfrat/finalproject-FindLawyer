import React from 'react'

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider
  }

  parse(message) {
    console.log(message)
    const lowercase = message.toLowerCase()

    if (lowercase.includes('hello')) {
      this.actionProvider.greet()
    }

    if (lowercase.includes('javascript') || lowercase.includes('js')) {
      this.actionProvider.handleJavascriptQuiz()
    }
  }
}

export default MessageParser

/** 

import React from 'react'

const MessageParser = ({ children, actions }) => {
  const { state } = children.props
  const checker = state && state.checker

  const parse = (message) => {
    if (checker === 'name') {
      actions.afterNameMessage()
      state.userData.name = message
    }

    if (checker === 'age') {
      const age = Number(message)
      actions.finalResult(age)
    }

    if (checker === 'injured') {
      if (message.toLowerCase() === 'yes') {
        const nextQuestion = createChatBotMessage(
          'If there is a medical certificate?',
          {
            widget: 'YesNoOptions',
            option1: 'Yes',
            option2: 'No',
          }
        )
        updateState(nextQuestion, 'medicalCertificate')
      } else {
        const nextQuestion = createChatBotMessage(
          'Continue to the next question...'
        )
        updateState(nextQuestion, 'nextQuestion')
      }
    }

    if (checker === 'medicalCertificate') {
      actions.medicalCertificateResult(message)
    }
  }

  const updateState = (message, checker) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }))
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse,
          actions,
        })
      })}
    </div>
  )
}

export default MessageParser
*/
