// MessageParser starter code
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message)
    const lowercase = message.toLowerCase();

    if (lowercase.includes("school" || "college")) {
      this.actionProvider.school();
    }
    if (lowercase.includes("experience")) {
      this.actionProvider.exp();
    }
    if (lowercase.includes("use")) {
      this.actionProvider.use();
    }
    if (lowercase.includes("relocate")) {
      this.actionProvider.relocate();
    }
    if (lowercase.includes("programming languages" || "programming language")) {
      this.actionProvider.program();
    }
    if (lowercase.includes("favorite site")) {
      this.actionProvider.fav();
    }
    if (lowercase.includes("frontend" || "backend")) {
      this.actionProvider.preferred();
    }
  }
}

export default MessageParser;