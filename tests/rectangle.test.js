import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle";

test("should calculate rectangle perimeter", () => {
    const rectanglePerimeter = getRectanglePerimeter(3, 4);
    expect(rectanglePerimeter).toBe(14);
});

test("should calculate rectangle area", () => {
    const rectangleArea = getRectangleArea(3, 4);
    expect(rectangleArea).toBe(12);
});

test("should call console.log with correct rectangle info", () => {
    const consoleLogMock = jest.spyOn(global.console, 'log');
    getRectangleInfo(3, 4);
    const expectedRectangleInfo = "The perimeter of a rectangle is 14 and the area is 12";
    expect(consoleLogMock).toBeCalledWith(expectedRectangleInfo);
});