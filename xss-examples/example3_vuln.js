import escapeHtml from "escape-html";

app.get('/search', (req, res) => {
  const q = req.query.q || '';
  res.send(`<h1>Results for ${escapeHtml(q)}</h1>`);
});
