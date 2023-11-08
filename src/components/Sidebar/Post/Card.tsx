import React, { FC, ReactElement, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControlLabel, Switch } from "@mui/material";
import { TCard } from "./Types/TCard";
import { useTheme } from "@mui/material/styles";
import { customTheme } from "../../../Theme/customTheme";
import { TwitterShareButton, TwitterIcon } from "react-share";

export const BasicCard: FC<TCard> = (props): ReactElement => {
  const { topic = "Add a Post", result = "Lorem" } = props;
  const [isPosted, setIsPosted] = useState(false);
  const theme = useTheme();

  return (
    <Card sx={{ backgroundColor: "#a2a2c2", maxWidth: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Topic: {topic}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Keywords: Keywords
        </Typography>
        <Typography variant="body2">{result}</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <FormControlLabel
            label="To Post"
            control={
              <Switch
                color="success"
                onChange={() => setIsPosted((prevV) => !prevV)}
                sx={{ fontSize: "2px" }}
              />
            }
          />
          {isPosted ? (
            <Button
              variant="contained"
              size="small"
              color="warning"
              style={{
                fontSize: "11px",
                backgroundColor: theme.palette.success.light,
              }}
            >
              Posted!
            </Button>
          ) : (
            <Button
              size="small"
              color="primary"
              sx={{
                color: "#fff",
                fontSize: "11px",
              }}
            >
              Post
              <TwitterShareButton
                className="shareBtn col-md-1 col-sm-1 col-xs-1"
                url="https://twitter.com/home"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
