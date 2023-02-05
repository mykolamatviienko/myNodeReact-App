/**
 * Required External Modules
 */
const express = require("express");

/**
 * App Variables
 */
const PORT = process.env.PORT || 3001;
const app = express();

/**
 *  App Configuration
 */
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

/**
 * Routes Definitions
 */
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
