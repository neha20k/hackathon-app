import { Button, Card } from "react-bootstrap";
import { IHackathonCard } from "./interface";

const HackathonCard: React.FC<IHackathonCard> = ({
  id,
  title,
  desc,
  tags,
  date,
  votes,
  handleVotes,
  handleDelete,
  handleEdit,
}) => {
  const handleVotesClick = () => {
    handleVotes(id);
  };

  const handleEditClick = () => {
    handleEdit(id);
  };

  const handleDeleteClick = () => {
    handleDelete(id);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Text>{date}</Card.Text>
        <Card.Link>{tags}</Card.Link>
        <Card.Text>
          <Button onClick={handleVotesClick}>votes</Button> {votes}
        </Card.Text>
        <Card.Footer className="d-flex gap-4">
          <Button variant="primary" type="button" onClick={handleEditClick}>
            Edit
          </Button>
          <Button variant="secondary" type="button" onClick={handleDeleteClick}>
            Delete
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default HackathonCard;
