import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    /**
     * Event Handler to handle the timeup event from <clock-timer>
     */
    ontimeup() {
        // eslint-disable-next-line no-alert
        alert('Time Up');
    }
}
