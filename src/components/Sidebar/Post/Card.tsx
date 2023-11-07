import React, { FC, ReactElement } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControlLabel, Switch } from "@mui/material";
import { TCard } from "./Types/TCard";

export const BasicCard: FC<TCard> = (props): ReactElement => {
  const { topic = "Add a Post", result = "Lorem" } = props;
  return (
    <Card sx={{ backgroundColor: "#a2a2c2", minWidth: 275 }}>
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
                color="warning"
                onChange={(e) => console.log("Hello")}
                sx={{ fontSize: "2px" }}
              />
            }
          />
          <Button
            variant="outlined"
            size="small"
            color="primary"
            sx={{ color: "#fff", fontSize: "11px" }}
          >
            Posted!
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
