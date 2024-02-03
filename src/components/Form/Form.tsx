import Form from "react-bootstrap/esm/Form";
import { FORM_INITIAL_STATE, TAG_OPTIONS } from "../../helper/constants";
import { useEffect } from "react";
import { IHackathonForm } from "./interface";
import { v4 as uuidv4 } from "uuid";

const HackathonForm: React.FC<IHackathonForm> = ({
  editId,
  hackathonList,
  handleSubmit,
  formState,
  setFormState,
}) => {
  useEffect(() => {
    if (editId) {
      let item = hackathonList?.filter((item) => item.id === editId);
      if (item.length > 0) {
        setFormState(item[0]);
      }
    } else {
      setFormState(FORM_INITIAL_STATE);
    }
  }, [editId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      id: uuidv4(),
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitleId" className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title here"
          value={formState.title}
          name="title"
          onChange={(e) => handleChange(e)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formDescId" className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter desc here"
          name="desc"
          value={formState.desc}
          onChange={(e) => handleChange(e)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formTagId" className="mb-3">
        <Form.Label>Tag</Form.Label>
        <Form.Select
          aria-label="select-tags"
          name="tags"
          value={formState.tags}
          onChange={(e) => handleChange(e)}
          required
        >
          <option>Select tags</option>
          {TAG_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="formTagId" className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={formState.date}
          onChange={(e) => handleChange(e)}
          required
        />
      </Form.Group>
    </Form>
  );
};

export default HackathonForm;
