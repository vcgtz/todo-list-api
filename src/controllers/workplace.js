const index = (req, res) => {
  res.json({
    status: 'ok',
    data: {
      method: 'index',
    },
  });
};

const store = (req, res) => {
  res.json({
    status: 'ok',
    data: {
      method: 'store',
    },
  });
};

const show = (req, res) => {
  res.json({
    status: 'ok',
    data: {
      method: 'show',
    },
  });
};

const update = (req, res) => {
  res.json({
    status: 'ok',
    data: {
      method: 'update',
    },
  });
};

const destroy = (req, res) => {
  res.json({
    status: 'ok',
    data: {
      method: 'destroy',
    },
  });
};

module.exports = {
  index,
  store,
  show,
  update,
  destroy,
};
