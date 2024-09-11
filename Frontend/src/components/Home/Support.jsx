import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button, TextField, Divider } from "@mui/material";
import YouTube from 'react-youtube';

const trainingVideos = [
  { id: "dQw4w9WgXcQ", title: "Mine Safety Basics" },
  { id: "3JZ_D3ELwEo", title: "How to Use Safety Equipment" },
];

const articles = [
  {
    title: "Understanding Mine Safety Regulations",
    description: "A comprehensive guide to the latest safety regulations in mining.",
  },
  {
    title: "Emergency Procedures in Mining",
    description: "Step-by-step procedures for handling emergencies in the mining industry.",
  },
];

const Support = () => {
  return (
    <div style={{ paddingTop: '102px', paddingBottom: '102px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Container>
        {/* Training Videos Section */}
        <Grid container spacing={4} style={{ marginBottom: '40px' }}>
          <Grid item xs={12}>
            <Typography variant="h4" style={{ fontWeight: 600, marginBottom: '20px' }}>
              Training Videos
            </Typography>
            <Grid container spacing={2}>
              {trainingVideos.map((video) => (
                <Grid item xs={12} md={6} lg={4} key={video.id}>
                  <Card style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <YouTube videoId={video.id} opts={{ height: '200', width: '100%' }} />
                    <CardContent style={{ padding: '16px' }}>
                      <Typography variant="h6" style={{ fontWeight: 600 }}>
                        {video.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Articles Section */}
        <Grid container spacing={4} style={{ marginBottom: '40px' }}>
          <Grid item xs={12}>
            <Typography variant="h4" style={{ fontWeight: 600, marginBottom: '20px' }}>
              Articles
            </Typography>
            {articles.map((article, index) => (
              <Card key={index} style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
                <CardContent style={{ padding: '16px' }}>
                  <Typography variant="h6" style={{ fontWeight: 600 }}>
                    {article.title}
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: '10px', color: '#555' }}>
                    {article.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>

        {/* Contact Support Section */}
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" style={{ fontWeight: 600, marginBottom: '20px' }}>
              Contact Support
            </Typography>
            <Card style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <CardContent style={{ padding: '16px' }}>
                <form noValidate autoComplete="off">
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    style={{ marginBottom: '16px' }}
                  />
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    style={{ marginBottom: '16px' }}
                  />
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    style={{ marginBottom: '16px' }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop: '16px' }}
                  >
                    Send
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Support;
