import RandomNumber from "@/components/RandomNumber";
import {
    mount
} from "@vue/test-utils";

describe("RandomNumber", () => {
    test("By default, randomNumber data value should be 0", () => {
        const wrapper = mount(RandomNumber);
        expect(wrapper.html()).toContain("<span>0</span>");
    });

    test("If button is clicked, randomNumber should be 1 and 10", async () => {
        const wrapper = mount(RandomNumber);
        // find button and click it
        await wrapper.find("button").trigger("click");
        // parseInt since we want it to be integer
        const randomNumber = parseInt(wrapper.find("span").element.textContent);
        // min value 1
        expect(randomNumber).toBeGreaterThanOrEqual(1);
        // max value 10
        expect(randomNumber).toBeLessThanOrEqual(10);
    });

    test("If button is clicked, randomNumber should be between 200 and 300", async () => {
        const wrapper = mount(RandomNumber, {
            propsData: {
                min: 200,
                max: 300
            }
        });
        // find button and click it
        await wrapper.find("button").trigger("click");
        // parseInt since we want it to be integer
        const randomNumber = parseInt(wrapper.find("span").element.textContent);
        // min value 1
        expect(randomNumber).toBeGreaterThanOrEqual(200);
        // max value 10
        expect(randomNumber).toBeLessThanOrEqual(300);
    });
});