export default class Repository {
  constructor(model) {
    this.model = model;
  }

  async create(data, options = {}) {
    return await this.model.create(data, options);
  }

  async count(whereClause = {}, options = {}) {
    return await this.model.count({
      where: whereClause,
      ...options
    });
  }

  async exists(whereClause, options = {}) {
    const count = await this.model.count({
      where: whereClause,
      ...options
    });

    return count > 0;
  }

  async findOne(whereClause, options = {}) {
    return await this.model.findOne({
      where: whereClause,
      ...options
    });
  }

  async findAll(whereClause = {}, options = {}) {
    return await this.model.findAll({
      where: whereClause,
      ...options
    });
  }

  async findById(id, options = {}) {
    return await this.model.findByPk(id, options);
  }

  async update(data, whereClause, options = {}) {
    return await this.model.update(data, {
      where: whereClause,
      ...options
    });
  }

  async destroy(whereClause, options = {}) {
    return await this.model.destroy({
      where: whereClause,
      ...options
    });
  }
}
