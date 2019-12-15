import { LoggerService } from './services/logger.service';
import { TestService } from './services/test.service';

export class Run {
    // Variables available in the class
    private _testSVC;
    private _logger;

    constructor() {
        // Setting up the test service
        this._testSVC = new TestService();

        // Setting up the logger service
        this._logger = new LoggerService().logger;
    }

    // Entrypoint for the application
    public runSequence() {
        // Getting a response from the test service
        const foo = this._testSVC.testService('Sondre');

        // Logging the response from the test service
        this._logger.info(foo);

    }
}

// Calling the runSqeuence function which will be the entrypoint for the application
new Run().runSequence();
