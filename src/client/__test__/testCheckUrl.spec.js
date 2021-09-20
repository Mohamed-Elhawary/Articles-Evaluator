import {checkUrl} from "../js/checkURL";

describe('Test check URL functionality', () => {

    test('Test the checkURL function', () => {
        expect(checkUrl).toBeDefined();
    });

    test('return false if invalid url', () => {
        expect(checkUrl('hawary')).toBeFalsy()
    });

    test('return true if valid url', () => {
        expect(checkUrl('https://example.com')).toBeTruthy()
    });
});