import { LitElement } from 'lit';
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResult;
    count: number;
    buttonRef: import("lit-html/directives/ref").Ref<HTMLButtonElement>;
    fireGifSources: string[];
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
    private doShake;
    private getImageSrc;
    private clampIndex;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}
//# sourceMappingURL=lit-button.d.ts.map