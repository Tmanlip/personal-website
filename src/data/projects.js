export const projects = [
  {
    id: 'coffee-network',
    title: 'Coffee Shop Enterprise Network',
    category: 'Packet Tracer',
    type: 'Networking Lab',
    summary: 'Segmented Cisco Packet Tracer network using VLANs, router-on-a-stick, SSH management and guest isolation.',
    status: 'Completed',
    featured: true,
    tags: ['Cisco', 'VLAN', '802.1Q', 'Router-on-a-Stick', 'SSH'],
    highlights: [
      'VLAN 10 Management, VLAN 20 POS, VLAN 30 Guest Wi-Fi and VLAN 99 Network Management',
      '802.1Q trunk between Coffee-SW and Coffee-RT',
      'Router subinterfaces for inter-VLAN routing',
      'SSH version 2 and local privileged administrator',
      'Access-port segmentation and PortFast configuration'
    ],
    architecture: [
      'Coffee-RT router',
      'Coffee-SW access switch',
      'Management devices',
      'POS terminals',
      'Guest wireless network'
    ],
    code: `enable\nconfigure terminal\n\nvlan 10\n name MANAGEMENT\nvlan 20\n name POS\nvlan 30\n name GUEST_WIFI\nvlan 99\n name NETWORK_MANAGEMENT\n\ninterface gigabitEthernet0/1\n switchport mode trunk\n switchport trunk allowed vlan 10,20,30,99\n\ninterface range fastEthernet0/1-5\n switchport mode access\n switchport access vlan 10\n spanning-tree portfast\n\ninterface range fastEthernet0/6-10\n switchport mode access\n switchport access vlan 20\n spanning-tree portfast\n\ninterface fastEthernet0/11\n switchport mode access\n switchport access vlan 30\n spanning-tree portfast`
  },
  {
    id: 'aslaw-cloud',
    title: 'ASLAW Smart Legal System',
    category: 'Cloud Architecture',
    type: 'Cloud Web Application',
    summary: 'Secure legal case-management platform with React, Laravel, PostgreSQL and Azure services.',
    status: 'In Development',
    featured: true,
    tags: ['Azure', 'React', 'Laravel', 'PostgreSQL', 'Key Vault', 'Blob Storage'],
    highlights: [
      'React frontend and Laravel REST API',
      'Azure Static Web Apps and App Service deployment',
      'Azure Blob Storage for documents',
      'Managed Identity and Key Vault integration',
      'RBAC, audit logging, MFA/OTP and encrypted document workflows'
    ],
    architecture: [
      'Azure Static Web Apps',
      'Azure App Service',
      'PostgreSQL',
      'Azure Blob Storage',
      'Azure Key Vault',
      'Managed Identity'
    ],
    code: `Frontend: React + TypeScript\nBackend: Laravel / PHP\nDatabase: PostgreSQL\nDocument Storage: Azure Blob Storage\nSecrets: Azure Key Vault\nIdentity: Managed Identity\nHosting: Azure Static Web Apps + App Service`
  },
  {
    id: 'tagging-compliance',
    title: 'Multi-Cloud Tagging Compliance Dashboard',
    category: 'Cloud Architecture',
    type: 'Cloud Governance',
    summary: 'Governance dashboard for monitoring resource tagging compliance across Azure, AWS and OCI.',
    status: 'Completed',
    featured: true,
    tags: ['Azure', 'AWS', 'OCI', 'Governance', 'Compliance'],
    highlights: [
      'Cross-cloud tagging visibility',
      'Resource compliance reporting',
      'Standardized tagging policy model',
      'Dashboard-oriented governance workflow'
    ],
    architecture: ['Azure Resource Groups', 'AWS Organizations', 'OCI Compartments', 'Compliance dashboard'],
    code: `Goal: Standardize cloud resource tags\nScope: Azure + AWS + OCI\nOutput: Compliance dashboard and governance reporting`
  },
]
