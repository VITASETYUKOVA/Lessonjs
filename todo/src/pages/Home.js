import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../Home.css";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(5, "Назва повинна містити щонайменше 5 символів")
      .required("Обов'язкове поле"),
    description: Yup.string()
      .min(5, "Опис повинен містити щонайменше 5 символів")
      .required("Обов'язкове поле"),
    priority: Yup.string().required("Виберіть пріоритет"),
    isUrgent: Yup.boolean(),
  });

  const handleSubmit = (values, { resetForm }) => {
    setTodos([...todos, values]);
    resetForm();
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1>TODO List</h1>
      <Formik
        initialValues={{
          title: "",
          description: "",
          priority: "low",
          isUrgent: false,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="todo-form">
            <div className="form-field">
              <label htmlFor="title">Назва:</label>
              <Field id="title" name="title" placeholder="Введіть назву" />
              <ErrorMessage name="title" component="div" className="error" />
            </div>
            <div className="form-field">
              <label htmlFor="description">Опис:</label>
              <Field
                id="description"
                name="description"
                placeholder="Введіть опис"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="error"
              />
            </div>
            <div className="form-field">
              <label htmlFor="priority">Пріоритет:</label>
              <Field as="select" id="priority" name="priority">
                <option value="low">Низький</option>
                <option value="medium">Середній</option>
                <option value="high">Високий</option>
              </Field>
              <ErrorMessage name="priority" component="div" className="error" />
            </div>
            <div className="form-field">
              <label>
                <Field type="checkbox" name="isUrgent" />
                Срочно
              </label>
            </div>
            <button type="submit" className="submit-button">
              Додати завдання
            </button>
          </Form>
        )}
      </Formik>
      <div className="todo-list">
        <h2>Список задач:</h2>
        {todos.length === 0 ? (
          <p>Задач немає.</p>
        ) : (
          todos.map((todo, index) => (
            <div key={index} className="todo-item">
              <div>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
                <p>Пріоритет: {todo.priority}</p>
                <p>Срочно: {todo.isUrgent ? "Так" : "Ні"}</p>
              </div>
              <button
                onClick={() => deleteTodo(index)}
                className="delete-button"
              >
                Видалити
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
