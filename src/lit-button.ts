import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ref, createRef} from 'lit/directives/ref.js';


@customElement('lit-button')
export class MyElement extends LitElement { 
    static override styles = css`
    button {
      background-color: #6200ee;
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

    @property({type: Number}) count = 0;
    buttonRef = createRef<HTMLButtonElement>();

    fireGifSources =
        [
            "https://gifdb.com/images/high/one-piece-ace-body-on-fire-2u2nfim5jsa9qxze.gif",
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGE2bmdlbzN4bXV0MmpqdDF5MzBkczUzanRkYjRrYng1aGhjZ2llciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pi0A1X7MG5TTq/giphy.gif",
            "https://media.giphy.com/media/6r4fo21qhu7rW/giphy.gif?cid=790b7611azf0lzx13pc8v3eyt6rngb70hou9r3x3fh0sdimt&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            "https://media.giphy.com/media/XJMFmuG2zzjCE/giphy.gif?cid=790b76112wb8h2c43la5dtwnba3qo3vcjt032m7em5j8xold&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            "https://media.giphy.com/media/3XYuxLiRtIu76/giphy.gif?cid=790b76112wb8h2c43la5dtwnba3qo3vcjt032m7em5j8xold&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            "https://25.media.tumblr.com/ce4b5330ef4272c2d162ff14c55c126e/tumblr_mss2lxtJqd1sg962ho1_500.gif",
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDg3MDluNWRmY2JyNW5ieG1teGVjaHBleXl4ZDg2ajB2MTE4NWpnaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yr7n0u3qzO9nG/giphy.gif"
        ];
    
    override render() {
        return html`
            <button ${ref(this.buttonRef)} @click=${this._onClick} part="button">
                <label for="button">🔥 Click Count:</label> ${this.count}
            </button>
            <div>
                ${this.count > 0 ? html`<img src=${this.getImageSrc()} alt="fire" width="150">` : ''}
            </div>
        `;
    }

    private _onClick() {
        this.count++;
        this.doShake();
        
        // event for external listeners
        this.dispatchEvent(new CustomEvent('onLitClicked'));
    }

    
    private doShake() {
        const fireIcon = this.buttonRef.value!;
        const maxShakeDuration = 0.15;
        let shakeDuration = Math.min(0.067 * this.count, maxShakeDuration);
        
        fireIcon.classList.add('dynamic-shake');
        fireIcon.style.setProperty('--shake-distance', `${this.count}px`);
        fireIcon.style.setProperty('--shake-duration', `${shakeDuration}s`);
        setTimeout(() => {
            fireIcon.classList.remove('dynamic-shake');
        }, 700);
    }

    private getImageSrc() {
        return this.fireGifSources[this.clampIndex(this.count - 1)]
    }

    private clampIndex(index: number) {
        return Math.min(Math.max(index, 0), this.fireGifSources.length - 1);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}
