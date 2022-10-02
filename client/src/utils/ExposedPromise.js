/**
 * This is a promise that has its `resolve` and `reject` actions actionable from outside of the promise.
 * 
 * Used for interacting with `react-toastify`
 * 
 * The structure of this promise is:
 * @example {
 *    resolve: Function // (The promise success / complete function)
 *    reject: Function // (The promise fail / error function)
 *    promise: Promise // (The promise the aforementioned functions originate from)
 * }
 */
 class ExposedPromise {
    /**
     * The success function to mark this promise as successful / completed.
     * @type {Function}
     */
    resolve = undefined;
    /**
     * The fail function to mark this promise as unsuccessful / errored.
     * @type {Function}
     */
    reject = undefined;
    /**
     * The promise this promise is made of.
     * @type {Promise}
     */
    promise = undefined;

    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}

export default ExposedPromise;