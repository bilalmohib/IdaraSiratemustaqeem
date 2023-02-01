import {
    Box,
    Button,
    Typography,
} from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

const TopNav = () => {
    return (
        <Box component={"div"} sx={{ backgroundColor: "#839d47" }}>
            <Box
                sx={{
                    width: "90%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: 50,
                    // border: "1px solid red",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight:"lighter"
                }}
            >
                <Box>
                    <Box sx={{ height: 50, paddingTop: 1, display: "flex" }}>
                        <Box sx={{ display: "flex" }}>
                            <CalendarMonthIcon sx={{ fontSize: 30 }} />
                            <Typography sx={{ marginLeft: 2 }} variant="h6" component="h6">
                                2021-09-01
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", marginLeft: 3 }}>
                            <WbSunnyIcon sx={{ fontSize: 30 }} />
                            <Typography sx={{ marginLeft: 2 }} variant="h6" component="h6">
                                Sun rise at 06:00 AM
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", marginLeft: 3 }}>
                            <NightlightRoundIcon sx={{ fontSize: 30 }} />
                            <Typography sx={{ marginLeft: 2 }} variant="h6" component="h6">
                                Sun set at 06:00 PM
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ height: 50 }}>
                        <Button
                            variant="contained"
                            sx={{
                                height: "100%",
                                borderRadius: 0,
                                backgroundColor: "#40448a",
                                '&&:hover': {
                                    backgroundColor: "#40448a",
                                }
                            }}
                        >
                            Support Us
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}
export default TopNav;