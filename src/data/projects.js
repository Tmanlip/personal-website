export const projects = [
  {
    id: 'coffee-network',

    title: 'Coffee Shop Enterprise Network',

    category: 'Packet Tracer',

    type: 'Networking Lab',

    summary:
      'A segmented small-business network designed in Cisco Packet Tracer using VLANs, Router-on-a-Stick, DHCP, SSH management and ACL-based guest isolation.',

    status: 'Completed',

    featured: true,

    tags: [
      'Cisco',
      'Packet Tracer',
      'VLAN',
      '802.1Q',
      'Router-on-a-Stick',
      'DHCP',
      'ACL',
      'SSH',
      'IPv4',
      'PVST'
    ],

    overview:
      'This project demonstrates the design and implementation of a segmented network for a coffee shop environment. Business devices, Point-of-Sale systems, guest users and network infrastructure are separated into dedicated VLANs. Inter-VLAN routing is provided using Router-on-a-Stick, while DHCP provides automatic addressing and ACLs prevent guest devices from reaching protected internal networks.',

    objectives: [
      'Separate business, POS, guest and infrastructure traffic using VLANs',
      'Provide inter-VLAN communication through Router-on-a-Stick',
      'Automatically assign IPv4 addresses using DHCP',
      'Provide secure switch administration through SSH',
      'Prevent guest users from accessing internal business networks',
      'Create a structured IP addressing scheme for easier administration'
    ],

    images:
      [{title: 'Network Topology',
       src: '/images/projects/coffee-network/topology.png',
       alt: 'Coffee Shop network topology created in Cisco Packet Tracer',
       caption: 'Complete network topology showing the router, switch, Management devices, POS devices and Guest Wi-Fi network.'
      },
    ],

    networkSegmentation: [
      {
        vlan: '10',
        purpose: 'Management Office',
        network: '192.168.10.0/24',
        gateway: '192.168.10.1'
      },
      {
        vlan: '20',
        purpose: 'POS Devices',
        network: '192.168.20.0/24',
        gateway: '192.168.20.1'
      },
      {
        vlan: '30',
        purpose: 'Guest Wi-Fi',
        network: '192.168.30.0/24',
        gateway: '192.168.30.1'
      },
      {
        vlan: '99',
        purpose: 'Network Management',
        network: '192.168.99.0/24',
        gateway: '192.168.99.1'
      }
    ],

    highlights: [
      'Four VLANs separating management, POS, guest and infrastructure traffic',
      'IEEE 802.1Q trunk between Coffee-SW and Coffee-RT',
      'Router subinterfaces providing inter-VLAN routing',
      'Centralized DHCP services from the router',
      'Dedicated VLAN 99 for network infrastructure management',
      'SSH version 2 for secure switch administration',
      'Extended ACL preventing guest access to internal networks',
      'PVST and PortFast configuration on access interfaces'
    ],

    architecture: [
      'ISP / external network',
      'Coffee-RT edge and inter-VLAN router',
      'Coffee-SW access switch',
      'VLAN 10 Management Office',
      'VLAN 20 POS',
      'VLAN 30 Guest Wi-Fi',
      'VLAN 99 Network Management'
    ],

    implementation: [
      {
        title: 'VLAN Configuration',

        description:
          'Four VLANs were created to logically separate devices according to their role within the coffee shop.',

        code: `enable
configure terminal

vlan 10
 name MANAGEMENT

vlan 20
 name POS

vlan 30
 name GUEST_WIFI

vlan 99
 name NETWORK_MANAGEMENT`
      },

      {
        title: 'Switch Access Ports',

        description:
          'Access interfaces were assigned to the appropriate VLAN according to the connected device type.',

        code: `interface range fastEthernet 0/1 - 5
 description MANAGEMENT_OFFICE_DEVICES
 switchport mode access
 switchport access vlan 10
 spanning-tree portfast

interface range fastEthernet 0/6 - 10
 description POS_DEVICES
 switchport mode access
 switchport access vlan 20
 spanning-tree portfast

interface fastEthernet 0/11
 description GUEST_WIRELESS_ACCESS_POINT
 switchport mode access
 switchport access vlan 30
 spanning-tree portfast`
      },

      {
        title: '802.1Q Trunk',

        description:
          'The connection between the switch and router carries traffic for VLANs 10, 20, 30 and 99 using IEEE 802.1Q tagging.',

        code: `interface gigabitEthernet 0/1
 description TO_COFFEE_RT
 switchport trunk encapsulation dot1q
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30,99`
      },

      {
        title: 'Switch Management Interface',

        description:
          'VLAN 99 provides a dedicated management network for infrastructure devices such as the switch.',

        code: `interface vlan 99
 description SWITCH_MANAGEMENT
 ip address 192.168.99.2 255.255.255.0
 no shutdown

ip default-gateway 192.168.99.1`
      },

      {
        title: 'Router-on-a-Stick',

        description:
          'Router subinterfaces act as the default gateways for each VLAN and allow controlled communication between network segments.',

        code: `interface gigabitEthernet 0/1.10
 description MANAGEMENT_OFFICE_GATEWAY
 encapsulation dot1Q 10
 ip address 192.168.10.1 255.255.255.0

interface gigabitEthernet 0/1.20
 description POS_GATEWAY
 encapsulation dot1Q 20
 ip address 192.168.20.1 255.255.255.0

interface gigabitEthernet 0/1.30
 description GUEST_WIFI_GATEWAY
 encapsulation dot1Q 30
 ip address 192.168.30.1 255.255.255.0

interface gigabitEthernet 0/1.99
 description NETWORK_MANAGEMENT_GATEWAY
 encapsulation dot1Q 99
 ip address 192.168.99.1 255.255.255.0`
      },

      {
        title: 'DHCP Configuration',

        description:
          'The router provides automatic IPv4 addressing for devices connected to the Management, POS and Guest VLANs.',

        code: `ip dhcp excluded-address 192.168.10.1 192.168.10.20
ip dhcp excluded-address 192.168.20.1 192.168.20.20
ip dhcp excluded-address 192.168.30.1 192.168.30.20

ip dhcp pool MANAGEMENT_OFFICE
 network 192.168.10.0 255.255.255.0
 default-router 192.168.10.1

ip dhcp pool POS_DEVICES
 network 192.168.20.0 255.255.255.0
 default-router 192.168.20.1

ip dhcp pool GUEST_WIFI
 network 192.168.30.0 255.255.255.0
 default-router 192.168.30.1`
      },

      {
        title: 'Guest Network Isolation',

        description:
          'An extended ACL prevents devices on the Guest Wi-Fi network from initiating connections toward the Management, POS and Network Management VLANs.',

        code: `ip access-list extended GUEST_RESTRICTIONS
 deny ip 192.168.30.0 0.0.0.255 192.168.10.0 0.0.0.255
 deny ip 192.168.30.0 0.0.0.255 192.168.20.0 0.0.0.255
 deny ip 192.168.30.0 0.0.0.255 192.168.99.0 0.0.0.255
 permit ip 192.168.30.0 0.0.0.255 any

interface gigabitEthernet 0/1.30
 ip access-group GUEST_RESTRICTIONS in`
      },

      {
        title: 'Secure SSH Management',

        description:
          'SSH version 2 and local authentication were configured to provide encrypted remote administration of the switch.',

        code: `ip domain-name tman.local
username tmanlip privilege 15 secret <password>

crypto key generate rsa

ip ssh version 2

line vty 0 15
 login local
 transport input ssh`
      }
    ],

    securityControls: [
      {
        name: 'VLAN Segmentation',
        description:
          'Separates devices according to their operational role and reduces unnecessary Layer 2 exposure.'
      },
      {
        name: 'Guest ACL',
        description:
          'Blocks Guest Wi-Fi devices from initiating communication with Management, POS and Network Management networks.'
      },
      {
        name: 'Dedicated Management VLAN',
        description:
          'Places infrastructure management interfaces on VLAN 99 rather than user-facing networks.'
      },
      {
        name: 'SSH Version 2',
        description:
          'Provides encrypted remote administration instead of insecure plaintext protocols such as Telnet.'
      },
      {
        name: 'PortFast',
        description:
          'Allows end-device access interfaces to transition quickly into the forwarding state.'
      }
    ],

    verification: [
      {
        command: 'show vlan brief',
        purpose: 'Verify VLAN creation and access-port assignments.'
      },
      {
        command: 'show interfaces trunk',
        purpose: 'Verify trunk status and permitted VLANs.'
      },
      {
        command: 'show ip interface brief',
        purpose: 'Verify router subinterfaces and management interface status.'
      },
      {
        command: 'show ip dhcp binding',
        purpose: 'Verify DHCP leases assigned to network clients.'
      },
      {
        command: 'show ip route',
        purpose: 'Verify connected VLAN networks in the routing table.'
      },
      {
        command: 'show access-lists',
        purpose: 'Verify ACL configuration and matching traffic.'
      }
    ],

    testing: [
      'Management devices successfully receive addresses from the VLAN 10 DHCP pool.',
      'POS devices successfully receive addresses from the VLAN 20 DHCP pool.',
      'Guest devices successfully receive addresses from the VLAN 30 DHCP pool.',
      'Management and POS networks can communicate through inter-VLAN routing when permitted.',
      'Guest devices cannot initiate connections to VLAN 10.',
      'Guest devices cannot initiate connections to VLAN 20.',
      'Guest devices cannot initiate connections to VLAN 99.',
      'The Coffee-SW management interface is reachable through VLAN 99 from authorized networks.',
      'SSH can be used for encrypted remote switch administration.'
    ],

    outcome:
      'The final topology provides a structured and more secure small-business LAN. Business-critical POS systems are separated from guest users, infrastructure management is isolated within a dedicated VLAN, and communication between network segments is centrally controlled by the router. The project demonstrates practical Cisco switching, routing, VLAN design, DHCP, ACL and secure device-management skills.',

    code: `! VLAN Creation
vlan 10
 name MANAGEMENT
vlan 20
 name POS
vlan 30
 name GUEST_WIFI
vlan 99
 name NETWORK_MANAGEMENT

! Router Trunk
interface gigabitEthernet0/1
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30,99

! Management Devices
interface range fastEthernet0/1-5
 switchport mode access
 switchport access vlan 10
 spanning-tree portfast

! POS Devices
interface range fastEthernet0/6-10
 switchport mode access
 switchport access vlan 20
 spanning-tree portfast

! Guest Access Point
interface fastEthernet0/11
 switchport mode access
 switchport access vlan 30
 spanning-tree portfast`
  },

  {
    id: 'aslaw-cloud',

    title: 'ASLAW Smart Legal System',

    category: 'Cloud Architecture',

    type: 'Cloud Web Application',

    summary:
      'Secure legal case-management platform with React, Laravel, PostgreSQL and Azure services.',

    status: 'In Development',

    featured: true,

    tags: [
      'Azure',
      'React',
      'Laravel',
      'PostgreSQL',
      'Key Vault',
      'Blob Storage'
    ],

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

    code: `Frontend: React + TypeScript
Backend: Laravel / PHP
Database: PostgreSQL
Document Storage: Azure Blob Storage
Secrets: Azure Key Vault
Identity: Managed Identity
Hosting: Azure Static Web Apps + App Service`
  },

  {
    id: 'tagging-compliance',

    title: 'Multi-Cloud Tagging Compliance Dashboard',

    category: 'Cloud Architecture',

    type: 'Cloud Governance',

    summary:
      'Governance dashboard for monitoring resource tagging compliance across Azure, AWS and OCI.',

    status: 'Completed',

    featured: true,

    tags: [
      'Azure',
      'AWS',
      'OCI',
      'Governance',
      'Compliance'
    ],

    highlights: [
      'Cross-cloud tagging visibility',
      'Resource compliance reporting',
      'Standardized tagging policy model',
      'Dashboard-oriented governance workflow'
    ],

    architecture: [
      'Azure Resource Groups',
      'AWS Organizations',
      'OCI Compartments',
      'Compliance dashboard'
    ],

    code: `Goal: Standardize cloud resource tags
Scope: Azure + AWS + OCI
Output: Compliance dashboard and governance reporting`
  }
]