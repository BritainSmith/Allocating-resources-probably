module.exports = {
  getAll: (req, res, next) => {
    const dbInstance = res.app.get("db");

    dbInstance
      .read_bars()
      .then(bars => res.status(200).send(bars))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops it broke." });
        console.log(err);
      });
  }
};
