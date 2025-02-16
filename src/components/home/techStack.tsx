import {Grid} from "@mui/material";

export default function TechStack() {
    return (
        <Grid spacing={0}>
            <Grid item xs={12} sm={6}>
                <i className="devicon-bootstrap-plain" />
                <i className="devicon-mongodb-plain" />
                <i className="devicon-mysql-plain" />
                <i className="devicon-npm-original-wordmark" />
                <i className="devicon-php-plain" />
                <i className="devicon-postgresql-plain" />
                <i className="devicon-react-plain" />
                <i className="devicon-redux-plain" />
                <i className="devicon-vite-plain" />
                <i className="devicon-yii-plain" />
                <i className="devicon-zend-plain" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <i className="devicon devicon-apple-original"/>
                <i className="devicon-azure-plain"/>
                <i className="devicon-composer-plain" />
                <i className="devicon-debian-plain" />
                <i className="devicon-docker-plain" />
                <i className="devicon-git-plain" />
                <i className="devicon-jetbrains-plain" />
                <i className="devicon-phpstorm-plain" />
                <i className="devicon-ubuntu-plain" />
            </Grid>
        </Grid>
    )
}