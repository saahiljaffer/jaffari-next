import { Button, Card } from "react-daisyui";

export const CentreCard = ({
  name,
  description,
  link,
  image,
}: {
  name: string;
  description: string;
  link: string;
  image: string;
}) => {
  return (
    <Card className="m-4 rounded-md bg-primary text-primary-content">
      <Card.Image src={image} alt="Shoes" />
      <Card.Body>
        <Card.Title tag="h2">{name}</Card.Title>
        <p>{description}</p>
        <Card.Actions className="justify-end">
          <Button href={link} color="accent" variant="outline">
            Visit
          </Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};
