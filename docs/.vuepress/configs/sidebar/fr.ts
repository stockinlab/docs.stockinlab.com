import type {SidebarConfig} from "../../theme/shared";

export const fr: SidebarConfig = {
    '/general': [
        {
            title: 'Guide',
            collapsable: false,
            children: [
                '',
            ],
        },
        {
            title: 'Compte',
            collapsable: false,
            children: [
                'account/settings',
                'account/preferences',
                'account/security',
                'account/teams-management',
            ],
        },
        {
            title: 'Super-administration',
            collapsable: false,
            children: [
                'super-administration/server-configuration',
                'super-administration/teams-management',
                'super-administration/users-management',
                'super-administration/super-administrator-management',
                'super-administration/audit-trail',
                'super-administration/backups',
            ],
        },
    ],
    '/laboratory-information-management-system/': [
        {
            title: 'LIMS',
            collapsable: false,
            children: [
                '',
            ],
        },
        {
            title: 'Enregistrements',
            collapsable: false,
            children: [
                'records/add-record',
                'records/remove-record',
                'records/link-records',
                'records/label',
                'records/edit-record',
                'records/reserve-record',
                'records/search',
                'records/view-record',
                'records/history',
                'records/track-sample-consumption',
            ],
        },
        {
            title: 'Stockage',
            collapsable: false,
            children: [
                'storage/stock',
                'storage/overview',
                'storage/capacity',
            ],
        },
        {
            title: 'Tableau de bord',
            collapsable: false,
            children: [
                'dashboard/parameters-management',
                'dashboard/locations-management',
                'dashboard/categories-management',
                'dashboard/members-management',
                'dashboard/import-workspace',
                'dashboard/audit-trail',
            ],
        },
        {
            title: 'Super-administration',
            collapsable: false,
            children: [
                'super-administration/inventories-management',
                'super-administration/global-parameters-management',
            ],
        },
    ],
    '/electronic-lab-notebook/': [
        {
            title: 'ELN',
            collapsable: false,
            children: [
                '',
            ],
        },
        {
            title: 'Protocoles',
            collapsable: false,
            children: [
                'protocols/',
            ],
        },
        {
            title: 'Projets',
            collapsable: false,
            children: [
                'projects/',
            ],
        },
    ],
    '/tools/': [
        {
            title: 'Outils',
            collapsable: false,
            children: [
                'serial-dilution-calculator',
            ],
        },
    ],
};
