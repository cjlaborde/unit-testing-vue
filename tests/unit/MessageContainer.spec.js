import MessageContainer from "@/components/MessageContainer";
import {
    mount
} from "@vue/test-utils";

describe("MessageContainer", () => {
    it("Wraps and mounts MessageDisplay component", () => {
        const wrapper = mount(MessageContainer, {
            /*
                        Stubbing Advantages
                        1) Isolate what you're testing
                        2) Test one thing at a time
                        3) Helps pinpoint what part of your code is broken

                        Disadvantages of overusing stubs
                        1) Maintenance costs
                        2) Decreased coverage/confidence
                        

                        */

            stubs: {
                // substitute for the real component
                MessageDisplay: '<p data-testid="message">Hello from the db!</p>'
            }
        });

        const stubMessage = "Hello from the db!";
        const message = wrapper.find('[data-testid="message"]').element.textContent;
        expect(message).toEqual(stubMessage);
    });
});