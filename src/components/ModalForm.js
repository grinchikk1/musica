import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PatternFormat } from "react-number-format";
import * as Yup from "yup";
import Button from "./Button";
import "../styles/ModalForm.scss";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Введіть ім'я"),
  lastName: Yup.string().required("Введіть прізвище"),
  age: Yup.number().required("Введіть вік").positive("Введіть додатнє число"),
  address: Yup.string().required("Введіть адресу"),
  phone: Yup.string()
    .required("Введіть номер телефону")
    .matches(
      /^\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
      "Невірний номер телефону. Введіть у форматі (###)###-##-##"
    )
    .test("complete-phone", "Введіть повний номер", (value) => {
      return value && value.replace(/[^0-9]/g, "").length === 10;
    }),
});

export default function ModalForm({
  cart,
  closeButton,
  onRequestClose,
  isOpen,
  handleModalClose,
  deleteAllFromCart,
}) {
  if (!isOpen) {
    return null;
  }

  const onSubmit = async (values) => {
    deleteAllFromCart();
    handleModalClose();
    // console.log("Processing order...");
    // await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Order completed!");
    console.group("Придбані товари:");
    console.log(cart.map((cart) => cart.title).join(", "));
    console.groupEnd();
    console.group("Інформація про користувача:");
    console.log(
      [
        values.lastName,
        values.firstName,
        values.age,
        values.address,
        values.phone,
      ].join(", ")
    );
    console.groupEnd();
  };

  return (
    <div className="modal-overlay" onClick={onRequestClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Заповніть форму</h2>
          {closeButton && (
            <button className="modal-close" onClick={onRequestClose}>
              &times;
            </button>
          )}
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            age: "",
            address: "",
            phone: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnMount
        >
          <Form className="modal-form-content">
            <div className="modal-form-box-field">
              <div className="modal-form-item">
                <label htmlFor="firstName">Ім'я: </label>
                <Field type="text" id="firstName" name="firstName" />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <div className="modal-form-item">
                <label htmlFor="lastName">Прізвище: </label>
                <Field type="text" id="lastName" name="lastName" />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <div className="modal-form-item">
                <label htmlFor="age">Вік: </label>
                <Field type="number" id="age" name="age" />
                <ErrorMessage
                  name="age"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <div className="modal-form-item">
                <label htmlFor="address">Адреса: </label>
                <Field type="text" id="address" name="address" />
                <ErrorMessage
                  name="address"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <div className="modal-form-item">
                <label htmlFor="phone">Номер телефону: </label>
                <Field type="text" id="phone" name="phone">
                  {({ form }) => {
                    return (
                      <PatternFormat
                        format="(###)###-##-##"
                        mask="#"
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(###)###-##-##"
                        onValueChange={(values) => {
                          form.setFieldValue("phone", values.formattedValue);
                        }}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="phone"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
            </div>
            <Button
              type="submit"
              backgroundColor="goldenrod"
              text="Checkout"
              onClick={() => {}}
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
}
