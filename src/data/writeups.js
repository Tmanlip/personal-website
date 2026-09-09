export const writeups = [
  {
    id: 'cylab-general-skills-ctf',

    title: 'General Skills in CTFs',

    category: 'General',

    platform: 'CyLab',

    event: 'Katalys',

    difficulty: 'Easy',

    status: 'Completed',

    date: '2026',

    summary:
      'Completed the General Skills in CTFs learning path on CyLab Katalys, focusing on foundational CTF skills including number-system conversion, file inspection, command-line navigation, basic networking tools and working with encoded or formatted data.',

    tags: [
      'CTF',
      'Linux',
      'General Skills',
      'Netcat',
      'Python',
      'Encoding',
      'CLI'
    ],

    objective:
      'Develop the foundational technical skills required for Capture The Flag competitions by solving introductory challenges involving data conversion, files, Linux command-line tools, Python and basic network communication.',

    environment: [
      'CyLab Katalys CTF environment',
      'Linux command line',
      'Python',
      'Netcat',
      'CTF-provided challenge files'
    ],

    methodology: [
      {
        title: 'Problem Set 1 — Number Systems & Data Conversion',

        body:
          'Completed the Let\'s Warm Up, 2Warm and Warmed Up challenges. These exercises introduced common CTF data representations and required identifying and converting values between formats such as hexadecimal, decimal and ASCII.'
      },

      {
        title: 'Problem Set 2 — Files, Flags & Networking',

        body:
          'Completed Obedient Cat, Wave a flag, convertme.py and what\'s a net cat?. These challenges introduced reading challenge files, interacting with executable programs, understanding simple Python-based challenges and connecting to remote CTF services using Netcat.'
      },

      {
        title: 'Challenge Analysis',

        body:
          'For each challenge, I first identified the expected input or output format, inspected any provided files and selected the simplest command-line tool appropriate for retrieving or transforming the required information.'
      },

      {
        title: 'Flag Verification',

        body:
          'After solving each challenge, I verified the resulting flag using the CyLab Katalys challenge platform and documented the technique used rather than recording only the final flag.'
      }
    ],

    commands: `
# Examples of commands and concepts practised in the learning path.

# Read a text file
cat filename.txt

# Inspect file information
file filename

# Convert hexadecimal values
python3 -c "print(int('VALUE', 16))"

# Convert a number to ASCII
python3 -c "print(chr(VALUE))"

# Run a Python challenge
python3 convertme.py

# Connect to a CTF-provided network service
nc <CTF_HOST> <CTF_PORT>

# Important:
# Hostnames, ports and flags are intentionally omitted.
# Commands were used only against the authorized CTF environment.
    `,

    result:
      'Successfully completed both introductory problem sets in General Skills in CTFs, building familiarity with common CTF workflows, Linux command-line utilities, data conversion, Python and Netcat.',

    lessons: [
      'Basic Linux command-line knowledge can significantly reduce the time required to solve introductory CTF challenges.',

      'Understanding hexadecimal, decimal and ASCII representations is useful because CTF challenges frequently represent information in different formats.',

      'Netcat is useful for interacting with simple network-based CTF services.',

      'Provided files should be inspected before attempting more complicated techniques.',

      'Small Python scripts can quickly automate conversions and repetitive operations during CTF challenges.'
    ],

    remediation: [
      'This learning path focuses on general CTF skills rather than exploitation of a specific vulnerability, so traditional vulnerability remediation is not directly applicable.',

      'Avoid exposing sensitive information through publicly accessible files or command output.',

      'Restrict unnecessary network services and ensure exposed services require appropriate authentication and authorization.',

      'Validate application input even when the service provides only a simple command-line interface.'
    ]
  },

  {
    id: 'cylab-general-skills-ctf-2',

    title: 'General Skills in CTFs II',

    category: 'General',

    platform: 'CyLab',

    event: 'Katalys',

    difficulty: 'Easy-Medium',

    status: 'Completed',

    date: '2026',

    summary:
      'Completed the second General Skills in CTFs learning path on CyLab Katalys, expanding my command-line CTF workflow through Netcat, Linux filesystem navigation, Python, grep, compressed-file analysis, strings, static binary inspection and command pipelines.',

    tags: [
      'CTF',
      'Linux',
      'Netcat',
      'Python',
      'Grep',
      'Strings',
      'File Analysis',
      'CLI'
    ],

    objective:
      'Strengthen practical CTF problem-solving skills by using Linux command-line utilities to interact with remote services, navigate filesystems, search large datasets, inspect binaries and process command output efficiently.',

    environment: [
      'CyLab Katalys CTF environment',
      'Linux command line',
      'Python 3',
      'Netcat',
      'grep',
      'strings',
      'Archive utilities',
      'CTF-provided files and services'
    ],

    methodology: [
      {
        title: 'Problem Set 1 — Remote Services & Linux Navigation',

        body:
          'Completed Nice netcat..., Tab, Tab, Attack, Python Wrangling and Magikarp Ground Mission. These challenges developed familiarity with Netcat connections, shell tab completion, Python scripts and navigating Linux directories to locate challenge information.'
      },

      {
        title: 'Problem Set 2 — Searching & File Processing',

        body:
          'Completed First Grep, First Find and Big Zip. These exercises focused on efficiently locating information using command-line search utilities and working with larger files or compressed datasets instead of manually inspecting their entire contents.'
      },

      {
        title: 'Problem Set 3 — Binary & Output Analysis',

        body:
          'Completed Static ain\'t always noise, strings it and plumbing. These challenges introduced basic static file inspection, extracting readable strings from binaries and combining Linux commands through pipes to isolate useful information from larger outputs.'
      },

      {
        title: 'Efficient CLI Workflow',

        body:
          'Applied a tool-first workflow by identifying the type and size of the provided data before choosing commands such as grep, find, strings or pipes. This reduced unnecessary manual inspection and made challenge solving more repeatable.'
      },

      {
        title: 'Flag Verification',

        body:
          'Validated each discovered flag through the CyLab Katalys environment and documented the commands and reasoning used to reach the solution.'
      }
    ],

    commands: `
# Representative commands practised during the challenges.

# Connect to a CTF-provided service
nc <CTF_HOST> <CTF_PORT>

# Run Python
python3 script.py

# Search text for a pattern
grep "pico" filename.txt

# Search recursively
grep -R "pico" .

# Locate files
find . -name "filename"

# Inspect file type
file challenge

# Extract readable strings from a binary
strings challenge

# Search extracted strings
strings challenge | grep "pico"

# Inspect archive contents
unzip -l archive.zip

# Extract an archive
unzip archive.zip

# Pipe output between commands
command1 | command2

# Example filtering workflow
cat filename.txt | grep "pico"

# Important:
# Actual challenge flags, hosts and ports are intentionally
# excluded from this public portfolio write-up.
    `,

    result:
      'Successfully completed all three problem sets in General Skills in CTFs II, improving practical Linux command-line proficiency and developing a faster workflow for file discovery, text searching, binary inspection and remote CTF interaction.',

    lessons: [
      'Linux utilities become significantly more powerful when combined through pipes rather than used independently.',

      'grep and find solve different discovery problems: grep searches content while find searches filesystem objects.',

      'The strings utility provides a quick first step when investigating binaries for readable information.',

      'Tab completion improves both speed and accuracy when navigating unfamiliar challenge directories.',

      'Large files should be searched and filtered programmatically rather than inspected manually.',

      'Basic static inspection should generally be attempted before moving to more complicated analysis techniques.',

      'Command-line fluency is an important foundation for more advanced areas such as web exploitation, forensics, reverse engineering and binary exploitation.'
    ],

    remediation: [
      'These exercises primarily teach general CTF and Linux skills rather than demonstrating a single exploitable vulnerability.',

      'Avoid embedding secrets, credentials or sensitive information as plaintext strings inside distributed binaries.',

      'Apply least-privilege permissions to files and directories containing sensitive information.',

      'Do not expose unnecessary network services to untrusted networks.',

      'Review application artifacts before deployment to ensure debugging information, credentials and development files are not unintentionally included.'
    ]
  }
]