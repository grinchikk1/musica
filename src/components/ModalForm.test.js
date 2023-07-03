import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, screen } from "@testing-library/react";
import ModalForm from "./ModalForm";

describe("ModalForm", () => {
  // snapshot test
  it("renders a form with correct fields", () => {
    const tree = renderer.create(<ModalForm isOpen={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("ModalForm validation", () => {
    const cart = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ];
    render(
      <ModalForm
        cart={cart}
        closeButton={true}
        onRequestClose={() => {}}
        handleModalClose={() => {}}
        isOpen={true}
        deleteAllFromCart={() => {}}
      />
    );

    expect(screen.getByText("Ім'я:")).toBeInTheDocument();
    expect(screen.getByText("Прізвище:")).toBeInTheDocument();
    expect(screen.getByText("Вік:")).toBeInTheDocument();
    expect(screen.getByText("Адреса:")).toBeInTheDocument();
    expect(screen.getByText("Номер телефону:")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Ім'я:"), {
      target: { value: "Dmytro" },
    });
    fireEvent.change(screen.getByLabelText("Прізвище:"), {
      target: { value: "Shyk" },
    });
    fireEvent.change(screen.getByLabelText("Вік:"), {
      target: { value: 30 },
    });
    fireEvent.change(screen.getByLabelText("Адреса:"), {
      target: { value: "Main Street" },
    });
    fireEvent.change(screen.getByLabelText("Номер телефону:"), {
      target: { value: "(123)456-78-90" },
    });

    fireEvent.click(screen.getByText("Checkout"));
  });
});
