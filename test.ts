app.get('*', function(req, res) {
  res.sendFile(__dirname + "/dist/M152-Projekt-Frontend/index.html");
});
