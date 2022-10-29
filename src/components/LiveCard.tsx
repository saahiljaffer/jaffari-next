import { Button, Card } from "react-daisyui";

export const LiveCard = ({ name, link }: { name: string; link: string }) => {
  return (
    <Card className="m-4 rounded-md bg-primary text-primary-content">
      <Card.Body>
        <Card.Title tag="h2" className="text-lg">
          {name}
        </Card.Title>
        <Card.Actions className="justify-center">
          <Button href={link} color="accent" fullWidth>
            Watch Now
          </Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};
