import Menu from "@material-ui/core/Menu";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import { Box } from '@mui/material';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import { color } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(""));
        toast.info("Usuário deslogado", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token !== "") {
        navbarComponent = <AppBar className="header">
            <Toolbar variant="dense" className="toolbar">
                <Link to="/apresentacao" style={{textDecoration: 'none'}}>
                <Box className="cursor">
                    <div className="container-logo"></div>
                    <Typography variant="h5" color="inherit">
                        Autonominas
                    </Typography>
                </Box>
                </Link>
                <Box className="navegate">
                    
                    <Link to="/feed" className="text-decorator-none navs">
                        <div className="container-navs">
                            <span>Feed</span>
                        </div>
                    </Link>
                    <Link to="/temas" className="text-decorator-none navs">
                        <div className="container-navs">
                            <span>Temas</span>
                        </div>
                    </Link>
                    <Link to="/formulariotema" className="text-decorator-none navs">
                        <div className="container-navs">
                            <span>CadTema</span>
                        </div>
                    </Link>
                    <Link to="/educativa" className="text-decorator-none navs">
                        <div className="container-navs">
                            <span>Videos</span>
                        </div>
                    </Link>
                    <Link to="/posts" className="text-decorator-none navs">
                        <div className="container-navs">
                            <span>Posts</span>
                        </div>
                    </Link>
                    <Box mx={1} className="cursor navs" onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    );
}

export default Navbar;