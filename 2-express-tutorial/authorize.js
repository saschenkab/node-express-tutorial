const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "sasche") {
    req.user = { name: "sasche", id: 22 };
    next();
  } else {
    console.log("Unauthorized");
    return res.status(401).send("Unauthorized");
  }

  console.log("Authorized");
  next();
};

module.exports = authorize;
