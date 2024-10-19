import organizationsService from '../core/services/organizations.Service.js';

class OrganizationsController {
    async getAllOrganizations(req, res) {
        try {
            const organizations = await organizationsService.getAllOrganizations();
            res.status(200).json(organizations);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener las organizaciones' });
        }
    }

    async getOrganizationById(req, res) {
        const { id } = req.params;
        try {
            const organization = await organizationsService.getOrganizationById(id);
            if (organization) {
                res.status(200).json(organization);
            } else {
                res.status(404).json({ message: 'Organización no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener la organización' });
        }
    }

    async createOrganization(req, res) {
        try {
            const newOrganization = await organizationsService.createOrganization(req.body);
            res.status(201).json(newOrganization);
        } catch (error) {
            if (error.message === 'Ya existe una organización con ese nombre') {
                res.status(400).json({ message: error.message });
            } else {
                console.log(error);
                res.status(500).json({ message: 'Error al crear la organización' });
            }
        }
    }

    async updateOrganization(req, res) {
        const { id } = req.params;
        try {
            const updatedOrganization = await organizationsService.updateOrganization(id, req.body);
            if (updatedOrganization) {
                res.status(200).json(updatedOrganization);
            } else {
                res.status(404).json({ message: 'Organización no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar la organización' });
        }
    }

    async deleteOrganization(req, res) {
        const { id } = req.params;
        try {
            const deletedOrganization = await organizationsService.deleteOrganization(id);
            if (deletedOrganization) {
                res.status(200).json({ message: 'Organización eliminada' });
            } else {
                res.status(404).json({ message: 'Organización no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar la organización' });
        }
    }
}

export default new OrganizationsController();