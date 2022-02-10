// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  school = () => {
    const message = this.createChatBotMessage("University of Richmond Fullstack Flex Bootcamp");
    this.addMessageToState(message);
  }

  exp = () => {
    const message = this.createChatBotMessage("2 years of experience");
    this.addMessageToState(message);
  }

  use = () => {
    const message = this.createChatBotMessage("Visual Studio Code and github");
    this.addMessageToState(message);
  }

  relocate = () => {
    const message = this.createChatBotMessage("open to it");
    this.addMessageToState(message);
  }

  fav = () => {
    const message = this.createChatBotMessage("WIP");
    this.addMessageToState(message);
  }

  program = () => {
    const message = this.createChatBotMessage("JavaScript, Python, CSS, HTML, jQuery, Bootstrap, Node.js, Express, MySQL, MongoDB, Handlebar, Sequelize, and integrating APIs");
    this.addMessageToState(message);
  }

  preferred = () => {
    const message = this.createChatBotMessage("perferred frontend but comfortable with backend as well");
    this.addMessageToState(message);
  }

  // update bot
  addMessageToState(message) {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }))
  }
}


export default ActionProvider;