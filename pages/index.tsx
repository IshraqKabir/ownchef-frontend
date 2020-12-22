import Container from "@material-ui/core/Container"
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
      </Box>
    </Container>
  )
}
