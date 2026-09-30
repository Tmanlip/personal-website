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
  },
  {
    id: 'multicloud-forge',

    title: 'MultiCloud Forge',

    category: 'Cloud Architecture',

    type: 'Multi-Cloud Infrastructure & DevOps',

    summary:
      'A production-inspired multi-cloud infrastructure engineering lab that provisions, deploys, monitors and validates serverless workloads across AWS and Microsoft Azure using Terraform, GitHub Actions and OIDC federation.',

    status: 'Completed',

    featured: true,

    tags: [
      'AWS',
      'Azure',
      'Terraform',
      'GitHub Actions',
      'DevOps',
      'IaC',
      'OIDC',
      'Serverless',
      'CloudWatch',
      'Application Insights',
      'Python',
      'PowerShell'
    ],

    overview:
      'MultiCloud Forge is a multi-cloud infrastructure engineering project designed to demonstrate Infrastructure as Code, cloud networking, serverless computing, CI/CD, federated identity, observability, automated testing and multi-cloud resilience. Independent AWS and Azure environments are provisioned through Terraform while GitHub Actions provides automated validation and deployment using passwordless OIDC authentication.',

    objectives: [
      'Provision AWS and Azure infrastructure from a single Terraform project',
      'Implement reusable Infrastructure as Code modules for both cloud providers',
      'Deploy serverless Python workloads using AWS Lambda and Azure Functions',
      'Build a GitHub Actions CI/CD pipeline for validation and deployment',
      'Replace permanent CI/CD cloud credentials with OIDC federation',
      'Implement monitoring and alerting across AWS and Azure',
      'Validate infrastructure and application health automatically',
      'Simulate application-level multi-cloud failover behavior',
      'Maintain a low-cost lab architecture targeting less than US$10 per month'
    ],

    images: [
      {
        title: 'Multi-Cloud Architecture',
        src: '/images/projects/multicloud-forge/architecture.png',
        alt: 'MultiCloud Forge AWS and Azure architecture diagram',
        caption:
          'Overall architecture showing Terraform-managed AWS and Azure infrastructure, GitHub Actions CI/CD, OIDC federation, serverless workloads and observability services.'
      },

      {
        title: 'Network Architecture',
        src: '/images/projects/multicloud-forge/network.png',
        alt: 'MultiCloud Forge AWS VPC and Azure VNet network architecture',
        caption:
          'Network architecture showing AWS VPC and Azure VNet segmentation, application subnets, private subnets and network security controls.'
      },

      {
        title: '1. GitHub Actions CI/CD Run',
        src: '/images/projects/multicloud-forge/output-01.png',
        alt: 'GitHub Actions Terraform CI/CD workflow execution',
        caption:
          'Detailed GitHub Actions workflow run showing the Terraform CI/CD pipeline execution and job status.'
      },

      {
        title: '2. Recent CI/CD Pipeline Runs',
        src: '/images/projects/multicloud-forge/output-02.png',
        alt: 'Recent MultiCloud Forge GitHub Actions workflow runs',
        caption:
          'Recent Terraform CI workflow executions on the main branch, demonstrating repeatable automated pipeline runs.'
      },

      {
        title: '3. Terraform Infrastructure Validation',
        src: '/images/projects/multicloud-forge/output-03.png',
        alt: 'MultiCloud Forge Terraform infrastructure validation test',
        caption:
          'Python-based infrastructure validation confirming the expected Terraform-managed cloud resources.'
      },

      {
        title: '4. Multi-Cloud Health Check',
        src: '/images/projects/multicloud-forge/output-04.png',
        alt: 'AWS and Azure multi-cloud health check results',
        caption:
          'Automated connectivity testing of the AWS Lambda and Azure Function health endpoints.'
      },

      {
        title: '5. Failover Simulation',
        src: '/images/projects/multicloud-forge/output-05.png',
        alt: 'MultiCloud Forge application failover simulation',
        caption:
          'Application-level failover simulation using an intentionally unavailable AWS endpoint to verify fallback to the healthy Azure workload.'
      },

      {
        title: '6. AWS CloudWatch Observability',
        src: '/images/projects/multicloud-forge/output-06.png',
        alt: 'AWS CloudWatch alarm status for MultiCloud Forge',
        caption:
          'AWS CloudWatch alarm inspection showing the configured Lambda error monitoring state, threshold and metric.'
      },

      {
        title: '7. Azure 5xx Telemetry',
        src: '/images/projects/multicloud-forge/output-07.png',
        alt: 'Azure Log Analytics HTTP 5xx telemetry query',
        caption:
          'Azure Log Analytics query displaying HTTP 5xx telemetry collected from the Azure Function application.'
      },

      {
        title: '8. Controlled Azure Function Failure',
        src: '/images/projects/multicloud-forge/output-08.png',
        alt: 'Controlled Azure Function HTTP failure request',
        caption:
          'Controlled request to the Azure Function failure endpoint used to generate observable HTTP error telemetry.'
      },

      {
        title: '9. Azure Monitor Alert',
        src: '/images/projects/multicloud-forge/output-09.png',
        alt: 'Azure Monitor alert in Fired state',
        caption:
          'Azure Monitor verification showing the Function application error alert entering the Fired state after controlled failure generation.'
      }
    ],

    highlights: [
      'Terraform-managed infrastructure across AWS and Microsoft Azure',
      'Reusable Terraform modules for networking, compute and monitoring',
      'AWS Lambda and Azure Functions serverless workloads',
      'GitHub Actions CI/CD pipeline with automated Terraform deployment',
      'Passwordless AWS and Azure authentication through GitHub OIDC federation',
      'AWS CloudWatch monitoring and metric alarms',
      'Azure Application Insights and Log Analytics telemetry',
      'Azure Monitor scheduled query alerting for server-side failures',
      'Automated Terraform infrastructure validation using Python',
      'Automated AWS and Azure health endpoint validation',
      'Application-level AWS-to-Azure failover simulation',
      'Controlled failure endpoints for observability testing',
      'Cost-conscious architecture targeting less than US$10 per month'
    ],

    architecture: [
      'GitHub Actions CI/CD',
      'GitHub OIDC Federation',
      'Terraform Infrastructure as Code',
      'AWS VPC',
      'AWS Lambda',
      'AWS CloudWatch',
      'Azure Virtual Network',
      'Azure Functions',
      'Azure Application Insights',
      'Azure Log Analytics',
      'Azure Monitor',
      'Python Validation Layer'
    ],

    cloudArchitecture: [
      {
        provider: 'AWS',
        region: 'ap-southeast-1',
        components: [
          'VPC',
          'Public Subnet',
          'Private Subnet',
          'Internet Gateway',
          'NAT Gateway',
          'Route Tables',
          'Security Groups',
          'Network ACLs',
          'AWS Lambda',
          'CloudWatch',
          'IAM'
        ]
      },

      {
        provider: 'Microsoft Azure',
        region: 'Southeast Asia',
        components: [
          'Resource Group',
          'Virtual Network',
          'Application Subnet',
          'Private Subnet',
          'Network Security Groups',
          'Azure Functions',
          'Application Insights',
          'Log Analytics',
          'Azure Monitor',
          'Microsoft Entra Workload Identity Federation'
        ]
      }
    ],

    cicd: [
      'Terraform formatting and validation',
      'Application validation',
      'AWS authentication through GitHub OIDC',
      'Azure authentication through GitHub OIDC',
      'Terraform plan',
      'Terraform apply on the main branch',
      'Infrastructure validation',
      'Application health validation',
      'Failover validation'
    ],

    securityControls: [
      {
        name: 'GitHub OIDC Federation',
        description:
          'Allows GitHub Actions to authenticate to AWS and Azure without storing permanent cloud access keys or client secrets in the CI/CD pipeline.'
      },

      {
        name: 'AWS IAM Deployment Role',
        description:
          'GitHub Actions assumes a dedicated AWS IAM role using AssumeRoleWithWebIdentity.'
      },

      {
        name: 'Microsoft Entra Workload Identity',
        description:
          'GitHub Actions authenticates to Azure through federated workload identity credentials.'
      },

      {
        name: 'Network Segmentation',
        description:
          'AWS and Azure workloads use separate application and private network segments with Security Groups and Network Security Groups controlling access.'
      },

      {
        name: 'Infrastructure as Code',
        description:
          'Cloud infrastructure is defined through Terraform, providing reproducible and reviewable infrastructure configuration.'
      }
    ],

    observability: [
      {
        provider: 'AWS',
        services: [
          'CloudWatch',
          'Lambda Metrics',
          'CloudWatch Metric Alarm'
        ],
        description:
          'AWS Lambda telemetry is monitored through CloudWatch with metric alarms used to detect application errors.'
      },

      {
        provider: 'Azure',
        services: [
          'Application Insights',
          'Log Analytics',
          'Azure Monitor',
          'Scheduled Query Alert'
        ],
        description:
          'Azure Function telemetry is collected through Application Insights and Log Analytics, with Azure Monitor alerts detecting HTTP 5xx failures.'
      }
    ],

    validation: [
      {
        name: 'Infrastructure Validation',
        script: 'tests/infrastructure/test_terraform.py',
        purpose:
          'Validates that the expected Terraform-managed AWS and Azure infrastructure exists.'
      },

      {
        name: 'Health Validation',
        script: 'tests/connectivity/test_health.py',
        purpose:
          'Tests AWS Lambda and Azure Function health endpoints and verifies that both cloud workloads respond successfully.'
      },

      {
        name: 'Failover Validation',
        script: 'tests/failover/test_failover.py',
        purpose:
          'Simulates AWS workload unavailability and verifies that the application-level resilience logic identifies the healthy Azure workload.'
      }
    ],

    testing: [
      'Terraform infrastructure validation completed successfully',
      'AWS Lambda health endpoint responds successfully',
      'Azure Function health endpoint responds successfully',
      'Multi-cloud health validation confirms both workloads are operational',
      'Simulated AWS failure correctly selects the healthy Azure workload',
      'AWS CloudWatch alarm configuration is successfully retrieved',
      'Azure Application Insights records controlled HTTP 5xx telemetry',
      'Azure Monitor alert successfully enters the Fired state after controlled failure generation',
      'GitHub Actions successfully performs CI/CD validation and deployment'
    ],

    verification: [
      {
        command:
          'gh run list --workflow terraform.yml --limit 3',
        purpose:
          'Verify recent Terraform CI/CD workflow executions.'
      },

      {
        command:
          'python tests\\infrastructure\\test_terraform.py',
        purpose:
          'Run automated Terraform infrastructure validation.'
      },

      {
        command:
          'python tests\\connectivity\\test_health.py $awsHealth $azureHealth',
        purpose:
          'Validate application health across AWS and Azure.'
      },

      {
        command:
          'python tests\\failover\\test_failover.py $fakeAwsHealth $azureHealth',
        purpose:
          'Simulate AWS failure and validate Azure failover behavior.'
      },

      {
        command:
          'aws cloudwatch describe-alarms --alarm-names "mcf-dev-health-errors"',
        purpose:
          'Inspect the AWS CloudWatch application error alarm.'
      },

      {
        command:
          'az monitor log-analytics query',
        purpose:
          'Query Azure Log Analytics for HTTP 5xx application telemetry.'
      },

      {
        command:
          'az rest --method get .../providers/Microsoft.AlertsManagement/alerts',
        purpose:
          'Verify that the Azure Monitor application error alert reaches the Fired state.'
      }
    ],

    repositoryStructure: [
      '.github/workflows - GitHub Actions CI/CD',
      'application/aws-lambda - AWS Lambda application',
      'application/azure-function - Azure Function application',
      'diagrams - Architecture and network diagrams',
      'docs - Engineering documentation',
      'terraform/environments - Environment configuration',
      'terraform/modules - Reusable Terraform modules',
      'tests/infrastructure - Terraform infrastructure tests',
      'tests/connectivity - Multi-cloud health tests',
      'tests/failover - Failover simulation tests'
    ],

    outcome:
      'MultiCloud Forge demonstrates an end-to-end multi-cloud engineering workflow spanning infrastructure provisioning, cloud networking, serverless computing, CI/CD, federated identity, observability and automated resilience testing. The completed environment provisions independent AWS and Azure workloads, authenticates CI/CD pipelines without permanent cloud credentials, validates infrastructure and application health automatically, and demonstrates application-level failover behavior while maintaining a cost-conscious serverless architecture.',

    code: `Infrastructure: Terraform 1.16.2
  Cloud Providers: AWS + Microsoft Azure
  AWS Region: ap-southeast-1
  Azure Region: Southeast Asia

  Compute:
  - AWS Lambda
  - Azure Functions

  Networking:
  - AWS VPC
  - Azure VNet
  - Public / Application Subnets
  - Private Subnets
  - Security Groups / NSGs

  CI/CD:
  - GitHub Actions
  - Terraform Plan / Apply
  - Automated Validation

  Authentication:
  - GitHub OIDC
  - AWS IAM AssumeRoleWithWebIdentity
  - Microsoft Entra Workload Identity Federation

  Observability:
  - AWS CloudWatch
  - Azure Application Insights
  - Azure Log Analytics
  - Azure Monitor

  Testing:
  - Terraform Infrastructure Validation
  - Multi-Cloud Health Validation
  - Failover Simulation

  Cost Target:
  < US$10/month`
  }
]