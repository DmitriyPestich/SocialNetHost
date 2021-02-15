import React from "react";
import { create, act } from "react-test-renderer";
import ProfileStatusHook from "./ProfileStatusHook";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        let component;
        act(() => {
            component = create(<ProfileStatusHook status="SUBSCRIBE TO BASIC" />);
        });
        const instance = component.root;
        expect(instance.props.status).toBe("SUBSCRIBE TO BASIC");
    });
    test("after creation <span> should be displayed", () => {
        let component;
        act(() => {
            component = create(<ProfileStatusHook status="SUBSCRIBE TO BASIC" />);
        });
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation <input> shouldn`t be displayed", () => {
        let component;
        act(() => {
            component = create(<ProfileStatusHook status="SUBSCRIBE TO BASIC" />);
        });
        const instance = component.root;
        expect(() => {
            const input = instance.findByType("input");
        }).toThrow();
    });
    test("mockCallback should be called 1 time", () => {
        const mockCallback = jest.fn();
        let component;
        act(() => {
            component = create(<ProfileStatusHook status="SUBSCRIBE TO BASIC" updateProfileStatus={mockCallback}/>);
        });
        const instance = component.root;
        const span = instance.findByType("span");
        act(() => span.props.onDoubleClick());
        const input = instance.findByType("input");
        act(() => input.props.onBlur());
        expect(mockCallback.mock.calls.length).toBe(1);
    });
    test("text in span sould be SUBSCRIBE TO BASIC", () => {
        let component;
        act(() => {
            component = create(<ProfileStatusHook status="SUBSCRIBE TO BASIC" />);
        });
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span.children[0]).toBe("SUBSCRIBE TO BASIC");
    });
    test("after click on the span it must be hidden and input must be show and him value should be SUBSCRIBE TO BASIC", () => {
        let component;
        act(() => {
            component = create(<ProfileStatusHook status="SUBSCRIBE TO BASIC" />);
        });
        const instance = component.root;
        const span = instance.findByType("span");
        act(() => span.props.onDoubleClick());
        const input = instance.findByType("input");
        expect(input.props.value).toBe("SUBSCRIBE TO BASIC");
        expect(() => {
            const span = instance.findByType("span");
        }).toThrow();
    });
});
