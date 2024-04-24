var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ref, createRef } from 'lit/directives/ref.js';
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
        this.buttonRef = createRef();
        this.fireGifSources = [
            "https://gifdb.com/images/high/one-piece-ace-body-on-fire-2u2nfim5jsa9qxze.gif",
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGE2bmdlbzN4bXV0MmpqdDF5MzBkczUzanRkYjRrYng1aGhjZ2llciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pi0A1X7MG5TTq/giphy.gif",
            "https://media.giphy.com/media/6r4fo21qhu7rW/giphy.gif?cid=790b7611azf0lzx13pc8v3eyt6rngb70hou9r3x3fh0sdimt&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            "https://media.giphy.com/media/XJMFmuG2zzjCE/giphy.gif?cid=790b76112wb8h2c43la5dtwnba3qo3vcjt032m7em5j8xold&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            "https://media.giphy.com/media/3XYuxLiRtIu76/giphy.gif?cid=790b76112wb8h2c43la5dtwnba3qo3vcjt032m7em5j8xold&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            "https://25.media.tumblr.com/ce4b5330ef4272c2d162ff14c55c126e/tumblr_mss2lxtJqd1sg962ho1_500.gif",
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDg3MDluNWRmY2JyNW5ieG1teGVjaHBleXl4ZDg2ajB2MTE4NWpnaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yr7n0u3qzO9nG/giphy.gif"
        ];
    }
    render() {
        return html `
            <button ${ref(this.buttonRef)} @click=${this.onClick}>
                <label for="button">🔥 Click Count:</label> ${this.count}
            </button>
            <div>
                ${this.count > 0 ? html `<img src=${this.getImageSrc()} alt="fire" width="150">` : ''}
            </div>
        `;
    }
    onClick() {
        this.count++;
        this.doShake();
        // event for external listeners
        this.dispatchEvent(new CustomEvent('onLitClicked'));
    }
    doShake() {
        const fireIcon = this.buttonRef.value;
        const maxShakeDuration = 0.15;
        const shakeDuration = Math.min(0.067 * this.count, maxShakeDuration);
        fireIcon.classList.add('dynamic-shake');
        fireIcon.style.setProperty('--shake-distance', `${this.count}px`);
        fireIcon.style.setProperty('--shake-duration', `${shakeDuration}s`);
        setTimeout(() => {
            fireIcon.classList.remove('dynamic-shake');
        }, shakeDuration * 1000);
    }
    getImageSrc() {
        return this.fireGifSources[this.clampIndex(this.count - 1)];
    }
    clampIndex(index) {
        return Math.min(Math.max(index, 0), this.fireGifSources.length - 1);
    }
};
MyElement.styles = css `
    :host {
    --lit-active-color: #FFFFFF;
    --lit-active-color: #FFFFFF;
    --lit-hover-color: #eb6b34;
    --lit-neutral-color: #7dbf65;
    }
    
    button {
      background-color: var(--lit-neutral-color);
      color: white;
      padding: 8px 16px;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 16px;
    }
   
    button:hover { 
      cursor: pointer;
      background-color: var(--lit-hover-color);
    }
    
    button:active {
      color: black;
      background-color: var(--lit-active-color);
      border: 1px solid black;
    }
      
    .dynamic-shake {
        --shake-distance: 2px;
        --shake-duration: 0.1s;

      animation-name: shaker;
      animation-duration: var(--shake-duration);
      transform-origin: 50% 50%;
      animation-timing-function: linear;
    }

    @keyframes shaker {
      0% { transform: translate(var(--shake-distance), 0); }
      50% { transform: translate(calc(-1 * var(--shake-distance)), 0); }
      100% { transform: translate(var(--shake-distance), 0); }
    }
  `;
__decorate([
    property({ type: Number })
], MyElement.prototype, "count", void 0);
MyElement = __decorate([
    customElement('lit-button')
], MyElement);
export { MyElement };
//# sourceMappingURL=lit-button.js.map