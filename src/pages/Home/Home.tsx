import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HackathonCard from "../../components/Card/Card";
import HackathonModal from "../../components/Modal/Modal";
import { IHackathon } from "./interface";

const Home: React.FC = () => {
  const [hackathonList, setHackathonList] = useState<IHackathon[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editId, setEditId] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortDateOrder, setSortDateOrder] = useState<"asc" | "desc">("asc");

  const retrieveTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem("hackList");
    storedTasks !== null && setHackathonList(JSON.parse(storedTasks));
  };

  useEffect(retrieveTasksFromLocalStorage, []);

  const handleVotes = (id: string) => {
    const newList = hackathonList.map((item) => {
      if (item.id === id) {
        const newItem = { ...item };
        return { ...item, votes: newItem.votes + 1 };
      } else return item;
    });
    setHackathonList(() => {
      localStorage.setItem("hackList", JSON.stringify(newList));
      return newList;
    });
  };

  const handleEdit = (id: string) => {
    setEditId(id);
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    const newList = hackathonList.filter((item) => item.id != id);
    setHackathonList(() => {
      localStorage.setItem("hackList", JSON.stringify(newList));
      return newList;
    });
  };

  const handleSortClicked = () => {
    if (hackathonList.length > 1) {
      const sortedList = [...hackathonList].sort((a, b) => {
        const comparison = a.votes - b.votes;
        return sortOrder === "asc" ? comparison : -comparison;
      });
      setHackathonList(() => {
        localStorage.setItem("hackList", JSON.stringify(sortedList));
        return sortedList;
      });
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    }
  };

  const handleDateSortClicked = () => {
    if (hackathonList.length > 1) {
      const sortedList = [...hackathonList].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        const comparison = dateA.getTime() - dateB.getTime();
        return sortDateOrder === "asc" ? comparison : -comparison;
      });
      setHackathonList(() => {
        localStorage.setItem("hackList", JSON.stringify(sortedList));
        return sortedList;
      });
      setSortDateOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    }
  };

  return (
    <Container fluid>
      <Row className="bg-info text-white py-2 mb-2">
        <Col><h1>Hack Ideas</h1></Col>
      </Row>
      <Row>
        <Col>
          <h4 className="mb-4">Hackathons List</h4>
        </Col>
        <Col className="text-end">
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Add Hackathon
          </Button>
          <HackathonModal
            show={showModal}
            handleClose={() => {
              setEditId("");
              setShowModal(false);
            }}
            hackathonList={hackathonList}
            setHackathonList={setHackathonList}
            editId={editId}
            title={editId ? "Edit" : "Add"}
          />
        </Col>
      </Row>
      <Row>
        {
          hackathonList.length > 1 && (
            <Col className="d-flex gap-4">
              <Button onClick={handleSortClicked}>
                Sort by votes: {sortOrder}
              </Button>
              <Button onClick={handleDateSortClicked}>
                Sort by date : {sortDateOrder}
              </Button>
            </Col>
          )
        }
        <ListGroup>
          {hackathonList?.map((hackathon) => (
            <ListGroup.Item
              key={hackathon.id}
              style={{ width: "20rem", border: "none" }}
            >
              <HackathonCard
                {...hackathon}
                handleVotes={handleVotes}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    </Container>
  );
};

export default Home;
