import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export declare enum KeyboardStyle {
    Light = "light",
    Dark = "dark"
}
export declare enum KeyboardResizeMode {
    Native = "native",
    Ionic = "ionic",
    Body = "body",
    None = "none"
}
export declare enum KeyboardSoftInputMode {
    UNSPECIFIED = 0x00,
    RESIZE = 0x10,
    PAN = 0x20,
    NOTHING = 0x30
}
/**
 * @name Keyboard
 * @premier keyboard
 * @capacitorincompatible true
 * @description
 * Keyboard plugin for Cordova.
 *
 * Requires Cordova plugin: `cordova-plugin-ionic-keyboard`. For more info, please see the [Keyboard plugin docs](https://github.com/ionic-team/cordova-plugin-ionic-keyboard).
 *
 * @usage
 * ```typescript
 * import { Keyboard } from '@ionic-native/keyboard/ngx';
 *
 * constructor(private keyboard: Keyboard) { }
 *
 * ...
 *
 * this.keyboard.show();
 *
 * this.keyboard.hide();
 *
 * ```
 */
export declare class Keyboard extends IonicNativePlugin {
    /**
     * Check keyboard status visible or not.
     * @returns {boolean}
     */
    isVisible: boolean;
    /**
     * Hide the keyboard accessory bar with the next, previous and done buttons.
     * @param hide {boolean}
     */
    hideFormAccessoryBar(hide: boolean): void;
    /**
     * Hide the keyboard if shown.
     */
    hide(): void;
    /**
     * Force keyboard to be shown.
     */
    show(): void;
    /**
     * Programatically set the resize mode
     * @param mode {string}
     */
    setResizeMode(mode: KeyboardResizeMode): void;
    /**
     * Programatically set the soft input mode
     * @param mode {number}
     */
    setSoftInputMode(mode: KeyboardSoftInputMode): void;
    /**
     * Programatically set Keyboard style
     * @param mode {string}
     */
    setKeyboardStyle(style: KeyboardStyle): void;
    /**
     * Programatically enable or disable the WebView scroll
     * @param mode {string}
     */
    disableScroll(disable: boolean): void;
    /**
     * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    onKeyboardShow(): Observable<any>;
    /**
     * Creates an observable that notifies you when the keyboard will show. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    onKeyboardWillShow(): Observable<any>;
    /**
     * Creates an observable that notifies you when the keyboard did show. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    onKeyboardDidShow(): Observable<any>;
    /**
     * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    onKeyboardHide(): Observable<any>;
    /**
     * Creates an observable that notifies you when the keyboard will hide. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    onKeyboardWillHide(): Observable<any>;
    /**
     * Creates an observable that notifies you when the keyboard did hide. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    onKeyboardDidHide(): Observable<any>;
}
