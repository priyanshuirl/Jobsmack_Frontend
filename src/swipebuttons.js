import React from "react"
import "./swipebuttons.css"
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from "@mui/material";
function SwipeButtons() {
    return (
        <div>
            <p className="instrc">Swipe Right/Left on the cards to see more job listings.</p>
            <div className="swipeButtons" onClick={() => { window.location.reload(); }}>
                <IconButton className="swipeButtons__repeat">
                    <ReplayIcon fontSize="large" />
                </IconButton>
                <IconButton className="swipeButtons__left">
                    <CloseIcon fontSize="large" />
                </IconButton>
                <IconButton className="swipeButtons__star">
                    <StarRateIcon fontSize="large" />
                </IconButton>
                <IconButton className="swipeButtons__right">
                    <FavoriteIcon fontSize="large" />
                </IconButton>
                <IconButton className="swipeButtons__lightning">
                    <FlashOnIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    )
}
export default SwipeButtons;