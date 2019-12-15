export class TestService {
    // Setting up the first part of our variable as well as specifying the type
    private message: string = 'foo';

    constructor() {
        // Changing the value of our variable
        this.message = 'Hello';
    }

    public testService(name?: string) {
        // Responding with our message variable as well as the optional input variable
        return `${this.message} ${name}!`;
    }
}
