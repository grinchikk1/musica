import React from "react";
import renderer from "react-test-renderer";
import Modal from "./Modal";

describe("Modal Component", () => {
  // snapshot test
  it("renders correctly when isOpen is true", () => {
    const tree = renderer
      .create(
        <Modal
          header="Modal Header"
          closeButton={true}
          text="Modal Content"
          actions={<button>Close</button>}
          isOpen={true}
          onRequestClose={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
