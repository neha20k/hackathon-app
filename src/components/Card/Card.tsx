import { Button, Card } from "react-bootstrap";
import { IHackathonCard } from "./interface";
import "./Card.css"

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
    <Card style={{ width: "24rem" }}>
      <Card.Body>
        <Card.Title>{title.toUpperCase()}</Card.Title>
        <Card.Subtitle>Description: {desc}</Card.Subtitle>
        <Card.Text>Date: {date}</Card.Text>
        <Card.Link>{tags}</Card.Link>
        <Card.Text onClick={handleVotesClick}><button className="buttonStyles">Click to upvote</button>{" "}{votes}</Card.Text>
        <Card.Footer className="d-flex justify-content-between">
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
