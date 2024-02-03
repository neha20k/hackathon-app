import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import { IHackathonModal } from "./interface";
import { IHackathon } from "../../pages/Home/interface";
import toast from "react-hot-toast";
import { FORM_INITIAL_STATE } from "../../helper/constants";
import HackathonForm from "../Form/Form";

const HackathonModal: React.FC<IHackathonModal> = ({
  show,
  handleClose,
  setHackathonList,
  hackathonList,
  editId = "",
  title,
}) => {
  const [formState, setFormState] = useState<IHackathon>(FORM_INITIAL_STATE);

  const handleSubmit = () => {
    const isInvalid = Object.keys(formState).filter(
      (key) => key != "votes" && formState[key as keyof IHackathon] === ""
    ).length;
    if (!isInvalid) {
      if (editId) {
        try {
          setHackathonList((prevList) => {
            const updatedList = prevList.map((item) =>
              item.id === editId ? { ...item, ...formState } : item
            );
            localStorage.setItem("hackList", JSON.stringify(updatedList));
            return updatedList;
          });
          toast.success("Successfully updated hackathon details!");
        } catch (error) {
          toast.error("Failed to update hackathon details!");
        }
      } else {
        try {
          setHackathonList((prevList) => {
            const newHackathon = { ...formState };
            const updatedList = [...prevList, newHackathon];
            localStorage.setItem("hackList", JSON.stringify(updatedList));
            return updatedList;
          });
          toast.success("Successfully added new hackathon!");
        } catch (error) {
          toast.error("Failed to add new hackathon!");
        }
      }
    } else {
      toast.error(
        `Hackathon not ${title.toLowerCase()}ed. Please fill all the details!`
      );
    }
    setFormState(FORM_INITIAL_STATE);
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title} Hackathon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <HackathonForm
          editId={editId}
          hackathonList={hackathonList}
          handleSubmit={handleSubmit}
          formState={formState}
          setFormState={setFormState}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" type="button" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          {title}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HackathonModal;
