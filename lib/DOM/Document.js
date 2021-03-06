import Element from './Element';
import HTMLVideoElement from './HTMLVideoElement';
import HTMLImageElement from './HTMLImageElement';
import HTMLCanvasElement from './HTMLCanvasElement';

class Document extends Element {
  body = new Element('BODY');
  documentElement = new Element('HTML');

  constructor() {
    super('#document');
    this.readyState = 'complete';
  }

  createElement(tagName) {
    switch ((tagName || '').toLowerCase()) {
      case 'video':
        return new HTMLVideoElement(tagName);
      case 'img':
        return new HTMLImageElement(tagName);
      case 'canvas':
        return new HTMLCanvasElement(tagName);
      case 'iframe':
        // Return nothing to keep firebase working.
        return null;
      default:
        return new Element(tagName);
    }
  }

  createElementNS(tagName) {
    const element = this.createElement(tagName);
    element.toDataURL = () => ({});
    return element;
  }

  getElementById(id) {
    return new Element('div');
  }
}

export default Document;
