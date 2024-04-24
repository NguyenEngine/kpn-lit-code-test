import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResult;
    name: string;
    count: number;
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
    /**
     * Formats a greeting
     * @param name The name to say "Hello" to
     */
    sayHello(name: string): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}
//# sourceMappingURL=lit-button.d.ts.map