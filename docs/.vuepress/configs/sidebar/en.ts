import type {SidebarConfig} from '../../theme/shared';

export const en: SidebarConfig = {
    '/general': [
        {
            text: 'Guide',
            children: [
                '/general/',
            ],
        },
        {
            text: 'Account',
            children: [
                '/general/account/settings',
                '/general/account/preferences',
                '/general/account/security',
                '/general/account/teams-management',
            ],
        },
        {
            text: 'Super-administration',
            children: [
                '/general/super-administration/server-configuration',
                '/general/super-administration/teams-management',
                '/general/super-administration/users-management',
                '/general/super-administration/super-administrator-management',
                '/general/super-administration/audit-trail',
                '/general/super-administration/backups',
            ],
        },
    ],
    '/laboratory-information-management-system/': [
        {
            text: 'LIMS',
            children: [
                '/laboratory-information-management-system/',
            ],
        },
        {
            text: 'Records',
            children: [
                '/laboratory-information-management-system/records/add-record',
                '/laboratory-information-management-system/records/import-record',
                '/laboratory-information-management-system/records/remove-record',
                '/laboratory-information-management-system/records/link-records',
                '/laboratory-information-management-system/records/label',
                '/laboratory-information-management-system/records/edit-record',
                '/laboratory-information-management-system/records/reserve-record',
                '/laboratory-information-management-system/records/search',
                '/laboratory-information-management-system/records/view-record',
                '/laboratory-information-management-system/records/history',
                '/laboratory-information-management-system/records/track-sample-consumption',
            ],
        },
        {
            text: 'Storage',
            children: [
                '/laboratory-information-management-system/storage/stock',
                '/laboratory-information-management-system/storage/overview',
                '/laboratory-information-management-system/storage/capacity',
            ],
        },
        {
            text: 'Dashboard',
            children: [
                '/laboratory-information-management-system/dashboard/parameters-management',
                '/laboratory-information-management-system/dashboard/locations-management',
                '/laboratory-information-management-system/dashboard/categories-management',
                '/laboratory-information-management-system/dashboard/members-management',
                '/laboratory-information-management-system/dashboard/import-workspace',
                '/laboratory-information-management-system/dashboard/audit-trail',
            ],
        },
        {
            text: 'Super-administration',
            children: [
                '/laboratory-information-management-system/super-administration/inventories-management',
                '/laboratory-information-management-system/super-administration/global-parameters-management',
            ],
        },
    ],
    '/electronic-lab-notebook/': [
        {
            text: 'ELN',
            children: [
                '/electronic-lab-notebook/',
            ],
        },
        {
            text: 'Protocols',
            children: [
                '/electronic-lab-notebook/protocols/',
            ],
        },
        {
            text: 'Projects',
            children: [
                '/electronic-lab-notebook/projects/',
            ],
        },
    ],
    '/tools/': [
        {
            text: 'Tools',
            children: [
                '/tools/',
                '/tools/serial-dilution-calculator',
            ],
        },
    ],
};
