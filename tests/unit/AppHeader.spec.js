import AppHeader from "@/components/AppHeader";
import {
    mount
} from "@vue/test-utils";

// Describe creates a block of test, aka a "test suite"
describe("AppHeader", () => {
    // Creates a Jest test
    test("If user is not logged, do not show logout button", async () => {
        // wrapper give us access to functions to test the component
        const wrapper = mount(AppHeader);
        // An assertion about the expected outcome
        // inside expect() the value to apply matchers against
        // toBe() checks that a value is what you expect.
        // expect(true).toBe(true);
        // expect button to not be visible
        expect(wrapper.find("button").isVisible()).toBe(false);
    });

    test("if user is logged in, show logout button", async () => {
        const wrapper = mount(AppHeader);
        await wrapper.setData({
            loggedIn: true
        });
        expect(wrapper.find("button").isVisible()).toBe(true);
    });
});

// If user is logged in, show logout button