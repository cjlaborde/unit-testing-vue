import LoginForm from "@/components/LoginForm.vue";
import {
    mount
} from "@vue/test-utils";

describe("LoginForm", () => {
    it("emits an event with a user data payload", () => {
        const wrapper = mount(LoginForm);
        // 1. Find text input
        // const input = wrapper.find('input[type="text"]');
        // use data-testid in LoginForm Template instead to better detect inputs
        const input = wrapper.find('[data-testid="name-input"]');
        // 2. Set value for text
        input.setValue("John Bond");
        // 3. Set Simulate form submit
        //
        wrapper.trigger("submit");
        // 4. Assert event has been emitted
        const formSubmittedCalls = wrapper.emitted("formSubmitted");
        expect(formSubmittedCalls).toHaveLength(1);
        // 5. Assert payload is correct
        const expectedPayload = {
            name: "John Bond"
        };
        // if you console log expectedPayload result will be
        // [[], [ 'name': 'Adam Jahr' } ]]
        expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(
            expectedPayload
        );
    });
});