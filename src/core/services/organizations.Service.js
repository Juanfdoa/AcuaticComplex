import organizationsRepository from "../../infrastructure/repositories/organizations.Repository";

class OrganizationsService {
    async getAllOrganizations() {
        return await organizationsRepository.findAll();
    }

    async getOrganizationById(id) {
        return await organizationsRepository.findById(id);
    }

    async createOrganization(orgData) {
        return await organizationsRepository.create(orgData);
    }

    async updateOrganization(id, orgData) {
        return await organizationsRepository.update(id, orgData);
    }

    async deleteOrganization(id) {
        return await organizationsRepository.delete(id);
    }
}

export default new OrganizationsService();