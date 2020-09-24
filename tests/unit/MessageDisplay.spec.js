import MessageDisplay from "@/components/MessageDisplay";
import {
    mount
} from "@vue/test-utils";
import {
    getMessage
} from "@/services/axios.js";
// Vue-test-utils can't access promises enqueued within lifecycle hooks
// so we use flush-promises to resolve this issue.
import flushPromises from "flush-promises";

// Mocks a module with an auto-mocked version when it is being required.
// we pass the path to module we are mocking
jest.mock("@/services/axios.js");

// function to run before each test
// Clears the mock.calls and mock.intances properties of all mocks.
// Equivalent to calling .mockClear() on every mocked function
// useful for second test or you get error, since test 1 called it before resulting in 2 calls instead of 1.
beforeEach(() => {
    jest.clearAllMocks();
});

describe("MessageDisplay", () => {
    it("Calls getMessage and display message", async () => {
        const mockMessage = "Hello from the db!";
        // Now getMessage meanswe are refering to the mock above
        // it mocks an axios api call which returns a promise as a resolve for the
        // value we are expecting, our real api to return
        // we pass now the object inside db.json
        getMessage.mockResolvedValueOnce({
            // value to resolve with
            text: mockMessage
        });
        // mock the API call
        const wrapper = mount(MessageDisplay);
        // wait for promise to resolve
        // Resolves promises
        await flushPromises();
        // check that call happened once
        // toHaveBeenCalledTimes Ensures that a mock function is called an exact number of times
        expect(getMessage).toHaveBeenCalledTimes(1);
        // check that component displays message
        // Grabs the p tag with data-testid="message" in the template of the component
        const message = wrapper.find('[data-testid="message"]').element.textContent;
        expect(message).toEqual(mockMessage);
    });
    it("Displays an error when getMessage call fails", async () => {
        const mockError = "Oops! Something went wrong.";
        getMessage.mockRejectedValueOnce(mockError);
        const wrapper = mount(MessageDisplay);
        // wait for promise to resolve
        await flushPromises();
        // check that call happened once
        expect(getMessage).toHaveBeenCalledTimes(1);
        // check that component displays error
        const error = wrapper.find('[data-testid="error"]').element.textContent;
        expect(error).toEqual(mockError);
    });
});