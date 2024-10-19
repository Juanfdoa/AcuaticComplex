import OrganizationsModel from "../models/organizations.Model";

class OrganizationsRepository{
    async findAll(options = {}) {
        return await OrganizationsModel.findAll(options);
    }
    
    async findById(id) {
        return await OrganizationsModel.findByPk(id);
    }
    
    async create(orgData) {
        return await OrganizationsModel.create(orgData);
    }

    async update(id, orgData) {
    const org = await OrganizationsModel.findByPk(id);
    if (org) {
        return await org.update(orgData);
    }
    return null;
    }

    async delete(id) {
    const org = await OrganizationsModel.findByPk(id);
    if (org) {
        return await org.destroy();
    }
    return null;
    }
}
    
export default new OrganizationsRepository();