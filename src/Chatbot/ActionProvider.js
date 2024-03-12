import React from 'react'

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage
    this.setState = setStateFunc
  }

  greet = () => {
    const message = this.createChatBotMessage('Hello friend.')
    this.addMessageToState(message)
  }

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      'Fantastic. Here is your quiz. Good luck!',
      {
        widget: 'javascriptQuiz',
      }
    )

    this.addMessageToState(message)
  }

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }))
  }
}

export default ActionProvider

/**import React from 'react'

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const afterNameMessage = () => {
    const message = createChatBotMessage('What is your age?', {
      widget: 'StartAge',
    })
    updateState(message, 'age')
  }

  const finalResult = (age) => {
    if (age < 18) {
      const message = createChatBotMessage(
        "You are a minor, Afrotopos' intervention is required"
      )
      updateState(message)
    } else {
      const message = createChatBotMessage('Are you injured?', {
        widget: 'YesNoOptions',
        option1: 'Yes',
        option2: 'No',
      })
      updateState(message, 'injured')
    }
  }

  const medicalCertificateResult = (choice) => {
    if (choice === 'Yes') {
      const message = createChatBotMessage('Continue to the next question...')
      updateState(message, 'nextQuestion')
    } else {
      const message = createChatBotMessage(
        'Issue a confirmation and get back to us'
      )
      updateState(message)
    }
  }

  const updateState = (message, checker) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }))
  }

  const initialAction = () => {
    const message = createChatBotMessage('Type in your name to begin.')
    updateState(message, 'name')
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            finalResult,
            medicalCertificateResult,
            afterNameMessage,
          },
        })
      })}
    </div>
  )
}

export default ActionProvider
**/
