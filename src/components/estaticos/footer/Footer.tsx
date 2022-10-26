import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import './Footer.css';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let footerComponent;

    if (token != "") {

        footerComponent =
            <Grid className='footer' container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="textos">Siga-nos no GitHub</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/autonominas" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="textos" >Juntas somos ainda mais fortes!</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" align="center" gutterBottom className="textos" >Todos os direitos reservados ©Autonominas 2022</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    );
}

export default Footer;