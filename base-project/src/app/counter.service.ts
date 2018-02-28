export class CountService {
    actToInactive = 0;
    inacToactive = 0;

    activeToInactive() {
        this.actToInactive++;
        console.log('Acive to Inactive user' + this.actToInactive);
    }

    inactiveToActive() {
        this.inacToactive++;
        console.log('Inactive  to active user ' + this.inacToactive);
    }
}
