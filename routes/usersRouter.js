const express=require('express');

const router=express.Router();



router.get('/', (req, res) => {
  const { limit, offset } = req.query
  if (limit && offset) {
    res.json({ limit: limit, offset: offset })
  } else {
    res.send("no hay parametros")
  }
})

module.exports = router;
