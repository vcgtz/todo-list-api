const { Workplace } = require('../models');

const createDefaultWorkplace = async () => {
  try {
    const totalWorkplaces = await Workplace.count();

    if (!totalWorkplaces) {
      const defaultWorkplace = await Workplace.create({
        name: 'Default',
        description: 'Default workplace',
      });

      console.log(`Workplace ${defaultWorkplace.name} created`);
    }
  } catch (err) {
    console.error(err);
  }
}

const setDefaultsIfTheyDontExists = async () => {
  createDefaultWorkplace();
};

module.exports = {
  createDefaultWorkplace,
  setDefaultsIfTheyDontExists,
}
