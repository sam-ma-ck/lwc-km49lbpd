import { LightningElement } from "lwc";

export default class App extends LightningElement {

  inputValue = '';

  inputValueList = [];

  handleKeyUp(event) {
    const isEnterKey = event.keyCode === 13;
    if (isEnterKey) {
      this.inputValue = event.target.value;
      var inputMap = new Map();
      inputMap['val'] = this.inputValue;
      this.inputValueList.push(inputMap);
      this.inputValue = '';
    }
  }

  handleRemove(event) {
    console.log(event.target.dataset.id);
    this.inputValueList = this.inputValueList.filter(e => e.val !== event.target.dataset.id);
  }

}
