import { Box, 
    IconButton, 
    Typography, 
    useTheme, 
    Card, 
    CardHeader, 
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Avatar,
    Grid,
    Container
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import { tokens } from "../view/dashboard/theme";
import {useEffect, useState} from 'react'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    }));

const Home = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = (id) => {
        if (id === expanded)
        {
            setExpanded(!id)
        }
        else if (id !== expanded)
        {
            setExpanded(id);
        }
    };

    const [backend_data, set_backend_data] = useState([])
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
        .then(res => res.json())
        .then(data => {
            set_backend_data(data)
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, [])

    useEffect(() => {
        document.title = props.title || "React App";
    }, [props.title]);

    return (
        <Grid container 
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        alignItems="center"
        >
            { backend_data.map((post, i) => (
                    <Grid md={4}>
                        <Box mt="50px" mx = "50px">
                            <Container fixed>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardHeader
                                        avatar={
                                        <Avatar sx={{ bgcolor: colors.redAccent[500] }} aria-label="recipe">
                                            R
                                        </Avatar>
                                        }
                                        action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                        }
                                        title={post.title}
                                        subheader="September 14, 2016"
                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image="/static/images/cards/paella.jpg"
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                        { post.body.substring(0, 50) }
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                        </IconButton>
                                        <IconButton aria-label="share">
                                        <CommentIcon />
                                        </IconButton>
                                        <ExpandMore
                                        expand={expanded}
                                        onClick={() => handleExpandClick(i)}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                        id={i}
                                        >
                                        <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded === i} id={i} timeout="auto" unmountOnExit>
                                        <CardContent>
                                        <Typography paragraph>Method:</Typography>
                                        <Typography paragraph>
                                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                            aside for 10 minutes.
                                        </Typography>
                                        <Typography paragraph>
                                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                            large plate and set aside, leaving chicken and chorizo in the pan. Add
                                            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                            stirring often until thickened and fragrant, about 10 minutes. Add
                                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                        </Typography>
                                        <Typography paragraph>
                                            Add rice and stir very gently to distribute. Top with artichokes and
                                            peppers, and cook without stirring, until most of the liquid is absorbed,
                                            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                            mussels, tucking them down into the rice, and cook again without
                                            stirring, until mussels have opened and rice is just tender, 5 to 7
                                            minutes more. (Discard any mussels that don&apos;t open.)
                                        </Typography>
                                        <Typography>
                                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                                        </Typography>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Container>
                        </Box>
                    </Grid>
                )
            )}
        </Grid>
    );
}

export default Home;
//style="width: 80%;margin-top:-50px;margin-left:35px;"