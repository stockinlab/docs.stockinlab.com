import type {SidebarConfig} from '../../theme/shared';

export const fr: SidebarConfig = {
    '/fr/general': [
        {
            text: 'Guide',
            children: [
                '/fr/general/',
            ],
        },
        {
            text: 'Compte',
            children: [
                '/fr/general/account/settings',
                '/fr/general/account/preferences',
                '/fr/general/account/security',
                '/fr/general/account/teams-management',
            ],
        },
        {
            text: 'Super-administration',
            children: [
                '/fr/general/super-administration/server-configuration',
                '/fr/general/super-administration/teams-management',
                '/fr/general/super-administration/users-management',
                '/fr/general/super-administration/super-administrator-management',
                '/fr/general/super-administration/audit-trail',
                '/fr/general/super-administration/backups',
            ],
        },
    ],
    '/fr/laboratory-information-management-system/': [
        {
            text: 'LIMS',
            children: [
                '/fr/laboratory-information-management-system/',
            ],
        },
        {
            text: 'Enregistrements',
            children: [
                '/fr/laboratory-information-management-system/records/add-record',
                '/fr/laboratory-information-management-system/records/import-record',
                '/fr/laboratory-information-management-system/records/remove-record',
                '/fr/laboratory-information-management-system/records/link-records',
                '/fr/laboratory-information-management-system/records/label',
                '/fr/laboratory-information-management-system/records/edit-record',
                '/fr/laboratory-information-management-system/records/reserve-record',
                '/fr/laboratory-information-management-system/records/search',
                '/fr/laboratory-information-management-system/records/view-record',
                '/fr/laboratory-information-management-system/records/history',
                '/fr/laboratory-information-management-system/records/track-sample-consumption',
            ],
        },
        {
            text: 'Stockage',
            children: [
                '/fr/laboratory-information-management-system/storage/stock',
                '/fr/laboratory-information-management-system/storage/overview',
                '/fr/laboratory-information-management-system/storage/capacity',
            ],
        },
        {
            text: 'Tableau de bord',
            children: [
                '/fr/laboratory-information-management-system/dashboard/parameters-management',
                '/fr/laboratory-information-management-system/dashboard/locations-management',
                '/fr/laboratory-information-management-system/dashboard/categories-management',
                '/fr/laboratory-information-management-system/dashboard/members-management',
                '/fr/laboratory-information-management-system/dashboard/import-workspace',
                '/fr/laboratory-information-management-system/dashboard/audit-trail',
            ],
        },
        {
            text: 'Super-administration',
            children: [
                '/fr/laboratory-information-management-system/super-administration/inventories-management',
                '/fr/laboratory-information-management-system/super-administration/global-parameters-management',
            ],
        },
    ],
    '/fr/electronic-lab-notebook/': [
        {
            text: 'ELN',
            children: [
                '/fr/electronic-lab-notebook/',
            ],
        },
        {
            text: 'Protocoles',
            children: [
                '/fr/electronic-lab-notebook/protocols/',
            ],
        },
        {
            text: 'Projets',
            children: [
                '/fr/electronic-lab-notebook/projects/',
            ],
        },
    ],
    '/fr/tools/': [
        {
            text: 'Outils',
            children: [
                '/fr/tools/serial-dilution-calculator',
            ],
        },
    ],
};
