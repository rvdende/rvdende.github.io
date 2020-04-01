/** checks bundle for file changes, reloads page if it has changed.
 * this is only really useful while developing.
 */
export class Reloader {
    lastVer = '';
    constructor(urlfile: string, delay: number) {
        this.getfile(urlfile);
        setInterval(() => {
            this.getfile(urlfile);
        }, delay);
    }

    getfile(urlfile: string) {
        fetch(urlfile, { method: 'get' })
            .then(res => { return res.text() })
            .then(text => {
                if (text !== this.lastVer) {
                    if (this.lastVer !== '') {
                        window.location.reload();
                    }
                    this.lastVer = text;
                }
            });
    }
}