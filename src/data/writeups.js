export const writeupCollections = [
  {
    id: 'general-skills-in-ctfs',

    title: "General Skills in CTF's",

    type: 'Learning Path',

    platform: 'CyLab / picoCTF',

    status: 'Completed',

    description:
      'A collection of general CTF challenges focused on foundational skills including number systems, Linux commands, file navigation, Python execution, netcat, grep, find, strings, piping and basic binary inspection.',

    tags: [
      'General Skills',
      'Linux',
      'Terminal',
      'Python',
      'Networking',
      'File Analysis'
    ],

    progress: {
      solved: 16,
      total: 16
    },

    writeups: [
      {
        id: 'lets-warm-up',

        title: "Let's Warm Up",

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A hexadecimal-to-ASCII conversion challenge introducing hexadecimal representation and character encoding.',

        objective:
          'Convert the hexadecimal value 0x70 into its corresponding ASCII character and submit it using the picoCTF flag format.',

        environment: [
          'Web browser',
          'ASCII table',
          'Hexadecimal conversion'
        ],

        methodology: [
          {
            title: '1. Identify the hexadecimal value',

            body:
              'The provided hexadecimal value was 0x70.'
          },

          {
            title: '2. Convert hexadecimal to ASCII',

            body:
              'I converted the hexadecimal value into its corresponding ASCII character.'
          },

          {
            title: '3. Format the answer',

            body:
              'The resulting character was placed inside the picoCTF flag format.'
          }
        ],

        commands: `
# Python can also be used for the conversion

python3 -c "print(chr(0x70))"
        `,

        result:
          'Successfully converted the hexadecimal value to its ASCII representation and completed the challenge.',

        lessons: [
          'Hexadecimal values are commonly used to represent bytes and characters.',
          'ASCII provides numerical representations for characters.',
          'Python can quickly convert between encoded numerical values and characters.'
        ],

        remediation: []
      },

      {
        id: '2warm',

        title: '2Warm',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A decimal-to-binary conversion challenge introducing basic number system conversion.',

        objective:
          'Convert the decimal number 42 from base 10 into binary base 2.',

        environment: [
          'Web browser',
          'Calculator',
          'Python'
        ],

        methodology: [
          {
            title: '1. Identify the decimal value',

            body:
              'The challenge provided the decimal value 42.'
          },

          {
            title: '2. Convert decimal to binary',

            body:
              'I converted the base-10 number into its base-2 representation.'
          },

          {
            title: '3. Submit the result',

            body:
              'The binary value was placed inside the required picoCTF flag format.'
          }
        ],

        commands: `
python3 -c "print(bin(42))"
        `,

        result:
          'Successfully converted the decimal value into binary and completed the challenge.',

        lessons: [
          'Binary is the base-2 number system used internally by computers.',
          'Understanding conversions between decimal, hexadecimal and binary is useful in cybersecurity.',
          'Python provides built-in functions for number system conversion.'
        ],

        remediation: []
      },

      {
        id: 'warmed-up',

        title: 'Warmed Up',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A hexadecimal-to-decimal conversion exercise covering basic number system knowledge.',

        objective:
          'Convert 0x3D from hexadecimal into decimal.',

        environment: [
          'Web browser',
          'Calculator',
          'Python'
        ],

        methodology: [
          {
            title: '1. Identify the number system',

            body:
              'The 0x prefix indicates that the provided value is hexadecimal.'
          },

          {
            title: '2. Convert the value',

            body:
              'I converted the hexadecimal number into its decimal equivalent.'
          },

          {
            title: '3. Format the answer',

            body:
              'The decimal result was submitted using the required picoCTF flag format.'
          }
        ],

        commands: `
python3 -c "print(int('3D', 16))"
        `,

        result:
          'Successfully converted the hexadecimal number into decimal.',

        lessons: [
          'The 0x prefix commonly identifies hexadecimal values.',
          'Hexadecimal is frequently encountered when analyzing memory, packets and binary data.',
          'Understanding different number bases is an important foundational cybersecurity skill.'
        ],

        remediation: []
      },

      {
        id: 'obedient-cat',

        title: 'Obedient Cat',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A Linux command-line challenge demonstrating how to download and read the contents of a file.',

        objective:
          'Download the provided file and display its contents to locate the flag stored in plain text.',

        environment: [
          'Linux',
          'Terminal',
          'wget',
          'cat'
        ],

        methodology: [
          {
            title: '1. Download the file',

            body:
              'I downloaded the challenge file into the Linux environment using wget.'
          },

          {
            title: '2. Verify the downloaded file',

            body:
              'I listed the current directory to confirm that the file had been downloaded successfully.'
          },

          {
            title: '3. Display the file contents',

            body:
              'I used the cat command to print the contents of the file directly to the terminal.'
          }
        ],

        commands: `
wget https://challenge-files.picoctf.net/c_wily_courier/8d63e440ec205416efd07e5c9f9ea0ab050fe3f4c8fc30bebfcca22f0c902491/flag

ls

cat flag
        `,

        result:
          'The flag was stored directly inside the downloaded file and was successfully displayed using cat.',

        lessons: [
          'The cat command can display text files directly in the terminal.',
          'wget can download files directly from a URL.',
          'Basic Linux file operations are essential for CTF challenges.'
        ],

        remediation: []
      },

      {
        id: 'wave-a-flag',

        title: 'Wave a Flag',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A Linux executable challenge demonstrating file permissions and command-line help options.',

        objective:
          'Download and execute the provided binary while identifying the correct help argument.',

        environment: [
          'Linux',
          'Terminal',
          'wget',
          'chmod'
        ],

        methodology: [
          {
            title: '1. Download the executable',

            body:
              'I downloaded the provided binary into the Linux environment.'
          },

          {
            title: '2. Modify file permissions',

            body:
              'The downloaded file was not initially executable, so I added execute permission using chmod.'
          },

          {
            title: '3. Inspect program usage',

            body:
              'I executed the binary using a common help argument to display the information provided by the program.'
          }
        ],

        commands: `
wget https://challenge-files.picoctf.net/c_wily_courier/1e14db3a752e16eae2b0e0d73d9779f9c4ddfd8942f60f3285a2986068480316/warm

chmod +x warm

./warm -h
        `,

        result:
          'The program displayed helpful information that revealed what was required to complete the challenge.',

        lessons: [
          'Linux files require executable permissions before they can be run.',
          'chmod can modify file permissions.',
          '-h and --help are common options for discovering program functionality.'
        ],

        remediation: []
      },

      {
        id: 'convertme-py',

        title: 'convertme.py',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A Python-based challenge requiring conversion of a dynamically provided decimal value into binary.',

        objective:
          'Run the provided Python script and correctly convert the requested decimal value into binary.',

        environment: [
          'Linux',
          'Python 3',
          'Terminal',
          'wget'
        ],

        methodology: [
          {
            title: '1. Download the Python script',

            body:
              'I downloaded the provided convertme.py script into the working environment.'
          },

          {
            title: '2. Execute the script',

            body:
              'I ran the Python script and observed the decimal value generated by the challenge.'
          },

          {
            title: '3. Convert the number',

            body:
              'The requested decimal number was converted into binary and entered into the script.'
          }
        ],

        commands: `
wget https://artifacts.picoctf.net/c/24/convertme.py

python3 convertme.py

# Optional decimal-to-binary conversion
python3 -c "print(bin(NUMBER)[2:])"
        `,

        result:
          'The correct binary value was supplied to the script and the challenge was completed successfully.',

        lessons: [
          'Python scripts can be executed directly from the Linux terminal.',
          'Decimal-to-binary conversion is useful when working with low-level computing concepts.',
          'Understanding a script does not always require reverse engineering every function.'
        ],

        remediation: []
      },

      {
        id: 'whats-a-net-cat',

        title: "What's a Net Cat?",

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'An introductory networking challenge demonstrating how to connect to a remote TCP service using Netcat.',

        objective:
          'Connect to the challenge service using the provided hostname and port through Netcat.',

        environment: [
          'Linux',
          'Terminal',
          'Netcat',
          'TCP'
        ],

        methodology: [
          {
            title: '1. Launch the challenge instance',

            body:
              'I started the challenge instance to obtain the required hostname and port.'
          },

          {
            title: '2. Connect using Netcat',

            body:
              'I used Netcat to establish a connection to the remote TCP service.'
          },

          {
            title: '3. Read the response',

            body:
              'The service returned information directly through the established network connection.'
          }
        ],

        commands: `
nc <hostname> <port>
        `,

        result:
          'Successfully connected to the remote service using Netcat and completed the challenge.',

        lessons: [
          'Netcat can establish simple TCP and UDP connections.',
          'Many CTF services expose challenge data through network sockets.',
          'Hostname and port combinations identify network services.'
        ],

        remediation: []
      },

      {
        id: 'nice-netcat',

        title: 'Nice Netcat...',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A Netcat and ASCII challenge requiring interpretation of numerical values returned by a remote service.',

        objective:
          'Connect to the remote challenge service and interpret the returned numerical data as ASCII characters.',

        environment: [
          'Linux',
          'Terminal',
          'Netcat',
          'ASCII'
        ],

        methodology: [
          {
            title: '1. Connect to the service',

            body:
              'I connected to the remote challenge instance using Netcat.'
          },

          {
            title: '2. Inspect the output',

            body:
              'The service returned a series of numerical values.'
          },

          {
            title: '3. Convert values to ASCII',

            body:
              'I interpreted the returned decimal values as ASCII codes to reconstruct the hidden text.'
          }
        ],

        commands: `
nc <hostname> <port>
        `,

        result:
          'The numerical output was converted into readable ASCII text and the challenge was completed.',

        lessons: [
          'Network services may return encoded or numerical representations of data.',
          'ASCII conversion is frequently useful in CTF challenges.',
          'Netcat is a lightweight tool for interacting with remote services.'
        ],

        remediation: []
      },

      {
        id: 'tab-tab-attack',

        title: 'Tab, Tab, Attack',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A Linux terminal challenge demonstrating directory navigation and tab completion.',

        objective:
          'Extract the provided archive, navigate through its nested directory structure and execute the discovered file.',

        environment: [
          'Linux',
          'Terminal',
          'unzip',
          'Tab completion'
        ],

        methodology: [
          {
            title: '1. Download and extract the archive',

            body:
              'I downloaded the ZIP archive and extracted its contents.'
          },

          {
            title: '2. Navigate using tab completion',

            body:
              'Instead of manually typing long directory names, I used the Tab key to automatically complete directory and file names.'
          },

          {
            title: '3. Execute the discovered program',

            body:
              'After navigating to the final directory, I executed the provided challenge binary.'
          }
        ],

        commands: `
wget https://challenge-files.picoctf.net/c_wily_courier/ce53ef9432bf367be41e465224d721c1187c39debcd758efcd28e99a6b7ff7a4/Addadshashanammu.zip

unzip Addadshashanammu.zip

cd Addadshashanammu/

# Use Tab repeatedly to navigate the nested directories

./<binary>
        `,

        result:
          'Successfully navigated the nested directories and executed the challenge binary.',

        lessons: [
          'Tab completion significantly improves command-line efficiency.',
          'Linux directory structures can be navigated quickly using shell features.',
          'Unzip can extract ZIP archives directly from the terminal.'
        ],

        remediation: []
      },

      {
        id: 'python-wrangling',

        title: 'Python Wrangling',

        category: 'General Skills',

        difficulty: 'Medium',

        status: 'Solved',

        summary:
          'A Python command-line challenge involving execution of a provided script with an encrypted file and password.',

        objective:
          'Use the provided Python script and password to process the encrypted flag file.',

        environment: [
          'Linux',
          'Python 3',
          'Terminal',
          'wget'
        ],

        methodology: [
          {
            title: '1. Download the challenge files',

            body:
              'I downloaded the Python script, password file and encrypted flag file.'
          },

          {
            title: '2. Review script usage',

            body:
              'I executed the Python script and reviewed its expected command-line arguments.'
          },

          {
            title: '3. Retrieve the password',

            body:
              'The password stored in password.txt was displayed using a standard Linux command.'
          },

          {
            title: '4. Run the decoding operation',

            body:
              'I executed the Python script using the required mode, encrypted file and password.'
          }
        ],

        commands: `
wget https://challenge-files.picoctf.net/c_wily_courier/127cb8c34891ed49ec4c6989a4e55345c8ea50cc744dfd4a578c29f6d16b44cb/ende.py

wget https://challenge-files.picoctf.net/c_wily_courier/127cb8c34891ed49ec4c6989a4e55345c8ea50cc744dfd4a578c29f6d16b44cb/password.txt

wget https://challenge-files.picoctf.net/c_wily_courier/127cb8c34891ed49ec4c6989a4e55345c8ea50cc744dfd4a578c29f6d16b44cb/flag.txt.en

python3 ende.py

cat password.txt

python3 ende.py -d flag.txt.en
        `,

        result:
          'Successfully used the supplied Python script and password to process the encrypted challenge file.',

        lessons: [
          'Python programs can accept command-line arguments.',
          'Reading program usage information is important before executing unfamiliar scripts.',
          'Multiple challenge files may need to be combined to obtain the final result.'
        ],

        remediation: []
      },

      {
        id: 'magikarp-ground-mission',

        title: 'Magikarp Ground Mission',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A Linux navigation challenge focused on SSH, directory traversal and reading files from different locations.',

        objective:
          'Connect to the challenge system over SSH and navigate through the Linux filesystem to retrieve all required information.',

        environment: [
          'Linux',
          'Terminal',
          'SSH',
          'Bash'
        ],

        methodology: [
          {
            title: '1. Connect using SSH',

            body:
              'I launched the challenge instance and connected to the provided system using SSH.'
          },

          {
            title: '2. Inspect the current directory',

            body:
              'I used ls to identify files and directories available in the current location.'
          },

          {
            title: '3. Navigate the filesystem',

            body:
              'I moved between directories using cd and inspected files using cat.'
          },

          {
            title: '4. Collect the required information',

            body:
              'The challenge information was distributed across multiple filesystem locations and was combined to complete the challenge.'
          }
        ],

        commands: `
ssh <username>@<hostname> -p <port>

ls

pwd

cd <directory>

cat <file>
        `,

        result:
          'Successfully navigated the remote Linux filesystem and collected the information required to complete the challenge.',

        lessons: [
          'SSH provides secure remote shell access.',
          'pwd, ls, cd and cat are fundamental Linux commands.',
          'CTF challenges frequently require moving between multiple directories.'
        ],

        remediation: []
      },

      {
        id: 'first-grep',

        title: 'First Grep',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A Linux text-search challenge demonstrating how grep can locate specific patterns inside large files.',

        objective:
          'Search the provided file for the picoCTF flag without manually reading the entire file.',

        environment: [
          'Linux',
          'Terminal',
          'grep',
          'wget'
        ],

        methodology: [
          {
            title: '1. Download the file',

            body:
              'I downloaded the challenge file into the Linux environment.'
          },

          {
            title: '2. Identify the search pattern',

            body:
              'Because picoCTF flags follow a predictable format, I used the flag prefix as the search term.'
          },

          {
            title: '3. Search using grep',

            body:
              'I searched the file directly using grep instead of manually reviewing its contents.'
          }
        ],

        commands: `
wget https://challenge-files.picoctf.net/c_fickle_tempest/b4b27010334d190b82728db534d40ba520fbcc0b90469bf7db1456c768476c17/file

grep "picoCTF" file
        `,

        result:
          'grep located the flag directly within the supplied file.',

        lessons: [
          'grep is useful for searching large amounts of text.',
          'Known patterns can significantly reduce manual analysis.',
          'Command-line searching is faster than inspecting large files manually.'
        ],

        remediation: []
      },

      {
        id: 'first-find',

        title: 'First Find',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A filesystem search challenge demonstrating how to locate a specific file within nested directories.',

        objective:
          "Extract the provided archive and locate the file named 'uber-secret.txt'.",

        environment: [
          'Linux',
          'Terminal',
          'find',
          'unzip'
        ],

        methodology: [
          {
            title: '1. Download and extract the archive',

            body:
              'I downloaded the ZIP archive and extracted its directory structure.'
          },

          {
            title: '2. Search for the filename',

            body:
              'Instead of manually navigating every directory, I used find to recursively locate the target filename.'
          },

          {
            title: '3. Read the discovered file',

            body:
              'After locating the file, I displayed its contents from the terminal.'
          }
        ],

        commands: `
wget https://artifacts.picoctf.net/c/501/files.zip

unzip files.zip

find . -name "uber-secret.txt"

cat <path-to-uber-secret.txt>
        `,

        result:
          'Successfully located uber-secret.txt within the extracted directory structure.',

        lessons: [
          'find can recursively search directory structures.',
          'Searching by filename is much more efficient than manually navigating large directory trees.',
          'Linux provides powerful filesystem discovery tools.'
        ],

        remediation: []
      },

      {
        id: 'big-zip',

        title: 'Big Zip',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A recursive search challenge involving a large extracted directory containing many files.',

        objective:
          'Extract the provided archive and search recursively through its contents for the picoCTF flag.',

        environment: [
          'Linux',
          'Terminal',
          'grep',
          'unzip'
        ],

        methodology: [
          {
            title: '1. Extract the archive',

            body:
              'I downloaded and extracted the supplied ZIP archive.'
          },

          {
            title: '2. Avoid manual inspection',

            body:
              'The extracted archive contained many files and directories, making manual inspection inefficient.'
          },

          {
            title: '3. Search recursively',

            body:
              'I used grep with recursive searching enabled to locate the known picoCTF flag pattern.'
          }
        ],

        commands: `
wget https://artifacts.picoctf.net/c/503/big-zip-files.zip

unzip big-zip-files.zip

grep -R "picoCTF" .
        `,

        result:
          'The recursive grep search located the flag within the extracted directory structure.',

        lessons: [
          'grep -R can recursively search files inside directories.',
          'Automation is preferable to manually inspecting large collections of files.',
          'Known flag formats provide useful search patterns in CTF challenges.'
        ],

        remediation: []
      },

      {
        id: 'static-aint-always-noise',

        title: "Static Ain't Always Noise",

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A binary inspection challenge demonstrating that useful readable data may exist within compiled executable files.',

        objective:
          'Inspect the supplied binary and supporting shell script to locate useful information embedded within the executable.',

        environment: [
          'Linux',
          'Terminal',
          'Binary file',
          'Bash'
        ],

        methodology: [
          {
            title: '1. Download the challenge files',

            body:
              'I downloaded both the static binary and the provided Bash helper script.'
          },

          {
            title: '2. Review file permissions',

            body:
              'I ensured that the required files could be executed where necessary.'
          },

          {
            title: '3. Inspect the binary data',

            body:
              'I examined readable content contained inside the compiled binary instead of treating it as completely unreadable.'
          },

          {
            title: '4. Search for relevant output',

            body:
              'The extracted information was searched for the expected picoCTF flag pattern.'
          }
        ],

        commands: `
wget https://challenge-files.picoctf.net/c_wily_courier/418e2775a501eaabeb99a96c5c467a83539369fe9649e8234644250cfb72d717/static

wget https://challenge-files.picoctf.net/c_wily_courier/418e2775a501eaabeb99a96c5c467a83539369fe9649e8234644250cfb72d717/ltdis.sh

chmod +x ltdis.sh

./ltdis.sh static

grep "picoCTF" static.ltdis.strings.txt
        `,

        result:
          'Readable information extracted from the binary revealed the data needed to complete the challenge.',

        lessons: [
          'Compiled binaries may still contain readable strings.',
          'Static analysis can reveal information without executing a binary.',
          'Helper scripts can automate repetitive analysis tasks.'
        ],

        remediation: [
          'Avoid embedding sensitive secrets directly inside compiled applications.',
          'Assume strings contained inside binaries can be extracted by users.'
        ]
      },

      {
        id: 'strings-it',

        title: 'Strings It',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A static analysis challenge demonstrating how the strings utility can extract human-readable text from a binary file.',

        objective:
          'Locate the flag inside the supplied file without executing the binary.',

        environment: [
          'Linux',
          'Terminal',
          'strings',
          'grep'
        ],

        methodology: [
          {
            title: '1. Download the file',

            body:
              'I downloaded the supplied challenge binary.'
          },

          {
            title: '2. Extract readable strings',

            body:
              'I used the strings utility to extract printable character sequences contained inside the file.'
          },

          {
            title: '3. Filter the results',

            body:
              'The strings output contained many entries, so I filtered it using the known picoCTF flag prefix.'
          }
        ],

        commands: `
wget https://challenge-files.picoctf.net/c_fickle_tempest/285538e2710605958a055500d6573657fcafea6308545cecfabb34462199cfd5/strings

strings strings

strings strings | grep "picoCTF"
        `,

        result:
          'The flag was discovered by extracting and filtering readable strings from the supplied file.',

        lessons: [
          'The strings command can extract readable data from binary files.',
          'Static inspection should often be performed before executing unknown binaries.',
          'Pipes can combine multiple Linux tools into a more efficient workflow.'
        ],

        remediation: [
          'Sensitive information should not be hard-coded inside compiled applications.',
          'Binary compilation does not automatically protect embedded secrets.'
        ]
      },

      {
        id: 'plumbing',

        title: 'Plumbing',

        category: 'General Skills',

        difficulty: 'Medium',

        status: 'Solved',

        summary:
          'A Linux piping challenge demonstrating how program output can be passed directly into another command for filtering.',

        objective:
          'Connect to the challenge service and efficiently search its large output stream for the picoCTF flag.',

        environment: [
          'Linux',
          'Terminal',
          'Netcat',
          'grep',
          'Pipes'
        ],

        methodology: [
          {
            title: '1. Launch the challenge instance',

            body:
              'I started the remote challenge service and obtained its hostname and port.'
          },

          {
            title: '2. Connect using Netcat',

            body:
              'The service produced a large amount of output when accessed through Netcat.'
          },

          {
            title: '3. Pipe the output',

            body:
              'Instead of manually reading the entire response, I piped the Netcat output directly into grep.'
          },

          {
            title: '4. Search for the flag pattern',

            body:
              'grep filtered the incoming stream and displayed the line containing the picoCTF flag.'
          }
        ],

        commands: `
nc <hostname> <port> | grep "picoCTF"
        `,

        result:
          'The flag was isolated from the large network output using a Linux pipe and grep.',

        lessons: [
          'The pipe operator sends the output of one command into another command.',
          'Linux commands can be combined to create efficient processing workflows.',
          'Streaming data does not always need to be saved into a file before it can be searched.',
          'Netcat and grep can be combined to analyze network service output.'
        ],

        remediation: []
      }
    ]
  },
    {
    id: 'beginners-guide-challenge-library',

    title: "The Beginner's Guide to the Challenge Library",

    type: 'Learning Path',

    platform: 'CyLab / picoCTF',

    status: 'Completed',

    description:
      'A beginner-focused CTF learning path covering Linux command-line skills, networking, cryptography, web exploitation, password cracking, forensics, reverse engineering and introductory binary exploitation.',

    tags: [
      'General Skills',
      'Cryptography',
      'Web Exploitation',
      'Forensics',
      'Reverse Engineering',
      'Binary Exploitation'
    ],

    progress: {
      solved: 25,
      total: 25
    },

    writeups: [
      {
        id: 'obedient-cat',

        title: 'Obedient Cat',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A basic Linux challenge demonstrating how to display the contents of a file directly from the terminal.',

        objective:
          'Read the provided file and identify the flag stored in plain text.',

        environment: [
          'Linux',
          'Terminal',
          'cat'
        ],

        methodology: [
          {
            title: '1. Obtain the challenge file',

            body:
              'I downloaded the provided flag file into my Linux environment.'
          },

          {
            title: '2. Inspect the file',

            body:
              'Since the challenge indicated that the information was stored in plain text, I displayed the file directly from the terminal.'
          }
        ],

        commands: `
cat flag
        `,

        result:
          'Successfully retrieved the flag stored directly inside the file.',

        lessons: [
          'The cat command can quickly display text-file contents.',
          'Simple file inspection should be performed before using more complicated analysis techniques.'
        ],

        remediation: []
      },

      {
        id: 'superssh',

        title: 'SuperSSH',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'An introductory SSH challenge demonstrating remote Linux access using a username, hostname and custom port.',

        objective:
          'Connect to the provided remote system using SSH and retrieve the challenge information.',

        environment: [
          'Linux',
          'Terminal',
          'SSH'
        ],

        methodology: [
          {
            title: '1. Launch the instance',

            body:
              'I launched the challenge instance and obtained the hostname, username, port and password.'
          },

          {
            title: '2. Establish an SSH connection',

            body:
              'I connected to the remote system using SSH while specifying the non-default port.'
          },

          {
            title: '3. Authenticate',

            body:
              'I entered the provided password and successfully accessed the remote environment.'
          }
        ],

        commands: `
ssh <username>@<hostname> -p <port>
        `,

        result:
          'Successfully authenticated to the remote system through SSH.',

        lessons: [
          'SSH provides encrypted remote shell access.',
          'The -p option can specify a non-default SSH port.',
          'Remote services are commonly identified using a hostname and port.'
        ],

        remediation: []
      },

      {
        id: 'whats-a-netcat',

        title: "What's a Netcat?",

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'An introductory networking challenge demonstrating how Netcat can communicate with a remote TCP service.',

        objective:
          'Connect to the provided network service and inspect its response.',

        environment: [
          'Linux',
          'Terminal',
          'Netcat',
          'TCP'
        ],

        methodology: [
          {
            title: '1. Launch the instance',

            body:
              'I obtained the hostname and port assigned to the challenge.'
          },

          {
            title: '2. Connect to the service',

            body:
              'I used Netcat to establish a TCP connection to the remote service.'
          }
        ],

        commands: `
nc <hostname> <port>
        `,

        result:
          'Successfully communicated with the challenge service using Netcat.',

        lessons: [
          'Netcat is useful for interacting with TCP and UDP services.',
          'Understanding ports and network services is fundamental for CTF challenges.'
        ],

        remediation: []
      },

      {
        id: 'mod26',

        title: 'Mod 26',

        category: 'Cryptography',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'An introductory cryptography challenge involving ROT13 substitution.',

        objective:
          'Recognize the provided ciphertext as ROT13 and decode it to recover the original message.',

        environment: [
          'Python',
          'ROT13',
          'Terminal'
        ],

        methodology: [
          {
            title: '1. Identify the cipher',

            body:
              'The challenge referenced ROT13, indicating that each alphabetic character should be rotated by 13 positions.'
          },

          {
            title: '2. Implement the transformation',

            body:
              'I created a simple Python implementation that shifted uppercase and lowercase characters by 13 positions.'
          },

          {
            title: '3. Decode the ciphertext',

            body:
              'The ROT13 transformation recovered the original plaintext.'
          }
        ],

        commands: `
python3 -c "import codecs; print(codecs.decode('<ciphertext>', 'rot_13'))"
        `,

        result:
          'Successfully decoded the ROT13 ciphertext.',

        lessons: [
          'ROT13 is a Caesar cipher with a fixed rotation of 13.',
          'Recognizing common encoding and cipher patterns can simplify cryptography challenges.',
          'Python provides built-in utilities for common transformations.'
        ],

        remediation: [
          'ROT13 should never be used to protect sensitive information.',
          'Encoding and simple substitution are not substitutes for encryption.'
        ]
      },

      {
        id: 'warmed-up',

        title: 'Warmed Up',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A hexadecimal-to-decimal conversion challenge.',

        objective:
          'Convert the hexadecimal value 0x3D into decimal.',

        environment: [
          'Terminal',
          'Python',
          'Number Systems'
        ],

        methodology: [
          {
            title: '1. Identify the representation',

            body:
              'The 0x prefix identified the supplied value as hexadecimal.'
          },

          {
            title: '2. Convert the value',

            body:
              'I converted the hexadecimal value from base 16 into its decimal equivalent.'
          }
        ],

        commands: `
python3 -c "print(int('3D', 16))"
        `,

        result:
          'Successfully converted the hexadecimal value into decimal.',

        lessons: [
          'The 0x prefix commonly represents hexadecimal values.',
          'Number-system conversion is useful when analyzing low-level computer data.'
        ],

        remediation: []
      },

      {
        id: '2warm',

        title: '2Warm',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A decimal-to-binary conversion challenge.',

        objective:
          'Convert the decimal value 42 into binary.',

        environment: [
          'Python',
          'Terminal',
          'Binary'
        ],

        methodology: [
          {
            title: '1. Identify the decimal value',

            body:
              'The challenge provided a base-10 integer that needed to be represented in base 2.'
          },

          {
            title: '2. Convert to binary',

            body:
              'I used Python to calculate its binary representation.'
          }
        ],

        commands: `
python3 -c "print(bin(42)[2:])"
        `,

        result:
          'Successfully converted the decimal number into binary.',

        lessons: [
          'Binary uses base 2.',
          'Python can quickly perform number-system conversions.'
        ],

        remediation: []
      },

      {
        id: 'bases',

        title: 'Bases',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'An encoding challenge requiring identification and decoding of Base64 data.',

        objective:
          'Recognize the provided text as Base64-encoded data and decode it.',

        environment: [
          'Linux',
          'Terminal',
          'Base64'
        ],

        methodology: [
          {
            title: '1. Inspect the encoded string',

            body:
              'I examined the supplied string and identified Base64 as the likely encoding scheme.'
          },

          {
            title: '2. Decode the value',

            body:
              'I piped the encoded string into the Linux base64 utility using decode mode.'
          }
        ],

        commands: `
echo "<encoded-string>" | base64 -d
        `,

        result:
          'Successfully decoded the Base64 value.',

        lessons: [
          'Base64 is an encoding scheme rather than encryption.',
          'The Linux base64 command can encode and decode data directly from the terminal.'
        ],

        remediation: [
          'Base64 should not be used to protect secrets because it can be trivially reversed.'
        ]
      },

      {
        id: 'wave-a-flag',

        title: 'Wave a Flag',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A Linux executable challenge introducing executable permissions and help arguments.',

        objective:
          'Execute the provided program and determine how its help functionality can be invoked.',

        environment: [
          'Linux',
          'Terminal',
          'chmod'
        ],

        methodology: [
          {
            title: '1. Prepare the binary',

            body:
              'I downloaded the provided program and ensured that it had executable permissions.'
          },

          {
            title: '2. Execute the program',

            body:
              'Running the binary without arguments returned information indicating that a help argument was available.'
          },

          {
            title: '3. Invoke help',

            body:
              'I supplied the -h argument to display the program help information.'
          }
        ],

        commands: `
chmod +x warm

./warm

./warm -h
        `,

        result:
          'Successfully discovered the required information through the program help option.',

        lessons: [
          'chmod +x adds executable permissions.',
          '-h and --help are common command-line help options.',
          'Program usage information should be inspected when working with unfamiliar tools.'
        ],

        remediation: []
      },

      {
        id: 'tab-tab-attack',

        title: 'Tab, Tab, Attack',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A Linux navigation challenge demonstrating shell tab completion.',

        objective:
          'Navigate a deeply nested directory structure efficiently and execute the discovered program.',

        environment: [
          'Linux',
          'Terminal',
          'Bash',
          'Tab Completion'
        ],

        methodology: [
          {
            title: '1. Extract the archive',

            body:
              'I extracted the supplied ZIP archive.'
          },

          {
            title: '2. Navigate the directories',

            body:
              'I used Bash tab completion instead of manually typing the long directory names.'
          },

          {
            title: '3. Execute the discovered file',

            body:
              'After reaching the final directory, I executed the challenge binary.'
          }
        ],

        commands: `
unzip Addadshashanammu.zip

cd Addadshashanammu/

# Use Tab completion to navigate

./<binary>
        `,

        result:
          'Successfully navigated the nested filesystem and executed the challenge program.',

        lessons: [
          'Tab completion improves command-line speed and accuracy.',
          'Shell navigation skills are important when investigating large directory structures.'
        ],

        remediation: []
      },

      {
        id: 'insp3ctor',

        title: 'Insp3ctor',

        category: 'Web Exploitation',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'An introductory web challenge involving inspection of frontend source code.',

        objective:
          'Inspect the website source files and locate information distributed across the frontend application.',

        environment: [
          'Web Browser',
          'Developer Tools',
          'HTML',
          'CSS',
          'JavaScript'
        ],

        methodology: [
          {
            title: '1. Open the application',

            body:
              'I first reviewed the rendered website normally.'
          },

          {
            title: '2. Inspect the HTML',

            body:
              'I opened browser Developer Tools and inspected the HTML delivered to the browser.'
          },

          {
            title: '3. Review frontend sources',

            body:
              'I examined the other client-side resources available through the Sources panel.'
          },

          {
            title: '4. Combine the findings',

            body:
              'Information discovered across the frontend files was combined to complete the challenge.'
          }
        ],

        commands: `
# Browser Developer Tools

Inspect Element
Sources
View Page Source
        `,

        result:
          'Successfully located the required information within the client-side source code.',

        lessons: [
          'Users can inspect HTML, CSS and JavaScript delivered to their browsers.',
          'Sensitive information should never rely on frontend source-code secrecy.'
        ],

        remediation: [
          'Do not embed credentials, API secrets or sensitive information in frontend code.',
          'Enforce security controls on the server side.'
        ]
      },

      {
        id: 'strings-it',

        title: 'Strings It',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A static file-analysis challenge using strings and grep.',

        objective:
          'Extract readable information from the supplied file without executing it.',

        environment: [
          'Linux',
          'Terminal',
          'strings',
          'grep'
        ],

        methodology: [
          {
            title: '1. Perform static inspection',

            body:
              'Rather than executing the unknown file, I extracted printable character sequences using strings.'
          },

          {
            title: '2. Filter the output',

            body:
              'I piped the output into grep and searched for the known flag prefix.'
          }
        ],

        commands: `
strings strings | grep "picoCTF"
        `,

        result:
          'Successfully identified the required information through static analysis.',

        lessons: [
          'strings can extract readable data from binary files.',
          'Static inspection can reveal useful information without executing an unknown program.',
          'Linux pipes allow multiple tools to work together.'
        ],

        remediation: [
          'Do not embed sensitive secrets directly inside compiled applications.'
        ]
      },

      {
        id: 'first-grep',

        title: 'First Grep',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A text-search challenge demonstrating grep.',

        objective:
          'Locate the flag inside a large file without manually reading every line.',

        environment: [
          'Linux',
          'Terminal',
          'grep'
        ],

        methodology: [
          {
            title: '1. Identify a known pattern',

            body:
              'I used the known picoCTF flag prefix as a search pattern.'
          },

          {
            title: '2. Filter the file',

            body:
              'grep searched the supplied file and returned only matching content.'
          }
        ],

        commands: `
grep "picoCTF" file
        `,

        result:
          'Successfully located the flag using grep.',

        lessons: [
          'grep efficiently searches text for patterns.',
          'Known patterns can dramatically reduce manual analysis.'
        ],

        remediation: []
      },

      {
        id: 'where-are-the-robots',

        title: 'Where Are The Robots',

        category: 'Web Exploitation',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A web enumeration challenge introducing the robots.txt file and discoverable web paths.',

        objective:
          'Inspect the website robots.txt file and investigate the path disclosed by it.',

        environment: [
          'Web Browser',
          'HTTP',
          'robots.txt'
        ],

        methodology: [
          {
            title: '1. Inspect robots.txt',

            body:
              'I appended /robots.txt to the challenge website URL.'
          },

          {
            title: '2. Review disallowed paths',

            body:
              'The file contained a Disallow entry identifying a path that was not linked through the normal interface.'
          },

          {
            title: '3. Visit the discovered path',

            body:
              'I manually navigated to the disclosed location and found the information required by the challenge.'
          }
        ],

        commands: `
/robots.txt

/<disallowed-path>
        `,

        result:
          'Successfully discovered the hidden page through robots.txt.',

        lessons: [
          'robots.txt is publicly accessible.',
          'Disallow directives do not provide access control.',
          'Web enumeration includes checking common metadata and configuration files.'
        ],

        remediation: [
          'Never rely on robots.txt to protect sensitive resources.',
          'Use authentication and authorization to restrict sensitive endpoints.'
        ]
      },

      {
        id: 'python-wrangling',

        title: 'Python Wrangling',

        category: 'General Skills',

        difficulty: 'Medium',

        status: 'Solved',

        summary:
          'A command-line Python challenge involving an encrypted file, a password and a supplied decoding script.',

        objective:
          'Determine how to invoke the provided Python script and use the supplied password to process the encrypted file.',

        environment: [
          'Linux',
          'Python 3',
          'Terminal'
        ],

        methodology: [
          {
            title: '1. Obtain the files',

            body:
              'I placed the Python script, password file and encrypted flag file in the same working directory.'
          },

          {
            title: '2. Inspect the password',

            body:
              'I retrieved the supplied password from password.txt.'
          },

          {
            title: '3. Run the decoder',

            body:
              'I executed the script in decode mode against the encrypted file and supplied the password when prompted.'
          }
        ],

        commands: `
cat password.txt

python3 ende.py -d flag.txt.en
        `,

        result:
          'Successfully processed the encrypted file using the provided Python utility.',

        lessons: [
          'Python scripts can accept command-line arguments.',
          'Understanding program invocation is an important command-line skill.'
        ],

        remediation: []
      },

      {
        id: 'pw-crack-1',

        title: 'PW Crack 1',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'An introductory source-code inspection challenge involving a Python password checker.',

        objective:
          'Inspect the provided password checker to determine the expected password.',

        environment: [
          'Linux',
          'Python',
          'nano'
        ],

        methodology: [
          {
            title: '1. Inspect the source code',

            body:
              'I opened the provided Python password checker and reviewed its authentication logic.'
          },

          {
            title: '2. Identify the expected value',

            body:
              'The required password was directly discoverable from the source code.'
          },

          {
            title: '3. Execute the checker',

            body:
              'I ran the program and supplied the discovered password.'
          }
        ],

        commands: `
nano level1.py

python3 level1.py
        `,

        result:
          'Successfully identified the password through source-code inspection.',

        lessons: [
          'Hard-coded passwords can be recovered from accessible source code.',
          'Source-code review is often more efficient than guessing.'
        ],

        remediation: [
          'Never hard-code passwords or secrets directly into application source code.'
        ]
      },

      {
        id: 'pw-crack-2',

        title: 'PW Crack 2',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A password-checker challenge requiring source-code inspection and ASCII interpretation.',

        objective:
          'Analyze the Python password checker and reconstruct the expected password from encoded character values.',

        environment: [
          'Linux',
          'Python',
          'ASCII',
          'nano'
        ],

        methodology: [
          {
            title: '1. Inspect the checker',

            body:
              'I reviewed the Python source code to understand how the expected password was constructed.'
          },

          {
            title: '2. Interpret character values',

            body:
              'The password components were represented using character codes, which I converted into readable ASCII.'
          },

          {
            title: '3. Test the reconstructed password',

            body:
              'I executed the checker and supplied the decoded value.'
          }
        ],

        commands: `
nano level2.py

python3 level2.py
        `,

        result:
          'Successfully reconstructed the password from the program logic.',

        lessons: [
          'Character encoding does not protect secrets.',
          'Reading program logic can reveal how hidden values are generated.'
        ],

        remediation: [
          'Do not rely on encoding or obfuscation to protect passwords.'
        ]
      },

      {
        id: 'pw-crack-3',

        title: 'PW Crack 3',

        category: 'General Skills',

        difficulty: 'Medium',

        status: 'Solved',

        summary:
          'A password challenge introducing password hashes and a small set of candidate passwords.',

        objective:
          'Determine which candidate password matches the expected password hash.',

        environment: [
          'Linux',
          'Python',
          'Password Hashing'
        ],

        methodology: [
          {
            title: '1. Inspect the checker',

            body:
              'I reviewed the Python source and identified the candidate password list.'
          },

          {
            title: '2. Understand the comparison',

            body:
              'The checker hashes user input and compares it against the supplied correct password hash.'
          },

          {
            title: '3. Test candidates',

            body:
              'Because only a small number of candidates were provided, I tested them against the checker until the matching password was identified.'
          }
        ],

        commands: `
nano level3.py

python3 level3.py
        `,

        result:
          'Successfully identified the matching password from the supplied candidate set.',

        lessons: [
          'Password verification commonly compares hashes rather than plaintext values.',
          'Small password search spaces can be tested very quickly.'
        ],

        remediation: [
          'Use strong passwords with sufficiently large search spaces.',
          'Use password-specific hashing algorithms with salts for stored passwords.'
        ]
      },

      {
        id: 'pw-crack-4',

        title: 'PW Crack 4',

        category: 'General Skills',

        difficulty: 'Medium',

        status: 'Solved',

        summary:
          'A Python automation challenge involving programmatically testing a list of candidate passwords.',

        objective:
          'Modify the provided checker so that candidate passwords are automatically tested against the expected hash.',

        environment: [
          'Linux',
          'Python',
          'Hashing',
          'Automation'
        ],

        methodology: [
          {
            title: '1. Inspect the candidate list',

            body:
              'The supplied program contained a list of possible passwords.'
          },

          {
            title: '2. Replace manual testing',

            body:
              'Rather than entering every candidate manually, I added a for loop to iterate through the list.'
          },

          {
            title: '3. Hash each candidate',

            body:
              'Each candidate was passed through the same hashing function used by the checker.'
          },

          {
            title: '4. Compare hashes',

            body:
              'When a generated hash matched the expected hash, the program processed the encrypted flag.'
          }
        ],

        commands: `
for user_pw in pos_pw_list:
    user_pw_hash = hash_pw(user_pw)

    if user_pw_hash == correct_pw_hash:
        print("Password:", user_pw)

        decryption = str_xor(
            flag_enc.decode(),
            user_pw
        )

        print(decryption)
        break
        `,

        result:
          'Successfully automated candidate testing using Python.',

        lessons: [
          'Loops can automate repetitive security testing tasks.',
          'Small password spaces are vulnerable to exhaustive searching.',
          'Automation significantly improves efficiency compared with manual testing.'
        ],

        remediation: [
          'Avoid passwords selected from small predictable sets.',
          'Use modern salted password-hashing algorithms and strong password policies.'
        ]
      },

      {
        id: 'pw-crack-5',

        title: 'PW Crack 5',

        category: 'General Skills',

        difficulty: 'Medium',

        status: 'Solved',

        summary:
          'A dictionary-based password challenge requiring Python file handling, iteration and hash comparison.',

        objective:
          'Read candidate passwords from the supplied dictionary and determine which entry matches the expected password hash.',

        environment: [
          'Linux',
          'Python',
          'Dictionary',
          'Hashing'
        ],

        methodology: [
          {
            title: '1. Load the dictionary',

            body:
              'I opened dictionary.txt and loaded its candidate passwords into Python.'
          },

          {
            title: '2. Iterate through candidates',

            body:
              'I used a loop to process each dictionary entry.'
          },

          {
            title: '3. Calculate candidate hashes',

            body:
              'Each password candidate was passed through the same hash function as the original checker.'
          },

          {
            title: '4. Identify the match',

            body:
              'When a generated hash matched the supplied correct hash, the corresponding password was used to process the encrypted data.'
          }
        ],

        commands: `
dictionary = open('dictionary.txt', 'r').read()
dictionary_as_list = dictionary.split("\\n")

for user_pw in dictionary_as_list:
    user_pw = user_pw.strip()
    user_pw_hash = hash_pw(user_pw)

    if user_pw_hash == correct_pw_hash:
        print("Password:", user_pw)

        decryption = str_xor(
            flag_enc.decode(),
            user_pw
        )

        print(decryption)
        break
        `,

        result:
          'Successfully implemented dictionary-based candidate testing.',

        lessons: [
          'Python can automate dictionary-based password testing.',
          'Whitespace should be handled carefully when reading candidate values from files.',
          'Predictable passwords remain vulnerable even when stored as hashes.'
        ],

        remediation: [
          'Use long and unique passwords that are resistant to dictionary attacks.',
          'Store passwords using modern salted password-hashing algorithms.'
        ]
      },

      {
        id: 'enhance',

        title: 'Enhance!',

        category: 'Forensics',

        difficulty: 'Medium',

        status: 'Solved',

        summary:
          'A forensic image-analysis challenge requiring inspection of information contained within an image artifact.',

        objective:
          'Analyze the supplied image file and identify the information hidden within it.',

        environment: [
          'Linux',
          'Image Analysis',
          'Forensics'
        ],

        methodology: [
          {
            title: '1. Inspect the image',

            body:
              'I first reviewed the supplied image normally to understand the visible content.'
          },

          {
            title: '2. Investigate the underlying artifact',

            body:
              'I examined the image data more closely rather than relying only on its rendered appearance.'
          },

          {
            title: '3. Recover the hidden information',

            body:
              'The underlying image content revealed the information required to complete the challenge.'
          }
        ],

        commands: `
file <image>

strings <image>
        `,

        result:
          'Successfully recovered the hidden information from the supplied image artifact.',

        lessons: [
          'Forensic analysis should consider both rendered content and underlying file data.',
          'Image files may contain information that is not obvious when viewed normally.'
        ],

        remediation: [
          'Inspect exported assets before publishing them.',
          'Remove unintended embedded information from publicly distributed files.'
        ]
      },

      {
        id: 'big-zip',

        title: 'Big Zip',

        category: 'General Skills',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'A recursive filesystem-search challenge using grep.',

        objective:
          'Search a large extracted directory tree for the flag without manually opening every file.',

        environment: [
          'Linux',
          'Terminal',
          'grep',
          'ZIP'
        ],

        methodology: [
          {
            title: '1. Extract the archive',

            body:
              'I extracted the supplied ZIP archive containing numerous directories and files.'
          },

          {
            title: '2. Search recursively',

            body:
              'I used grep recursively to identify files containing the known flag pattern.'
          },

          {
            title: '3. Inspect the matching file',

            body:
              'After identifying the relevant file, I displayed its contents.'
          }
        ],

        commands: `
unzip big-zip-files.zip

grep -irl "picoCTF" ./

cat <matching-file>
        `,

        result:
          'Successfully located the required file through recursive searching.',

        lessons: [
          'grep can recursively search large directory structures.',
          'Automated searching is significantly faster than manual file inspection.'
        ],

        remediation: []
      },

      {
        id: 'vault-door-training',

        title: 'Vault Door Training',

        category: 'Reverse Engineering',

        difficulty: 'Easy',

        status: 'Solved',

        summary:
          'An introductory reverse-engineering challenge demonstrating source-code analysis using a Java password checker.',

        objective:
          'Inspect the supplied Java source code and determine the password expected by the vault program.',

        environment: [
          'Java',
          'Source Code Analysis',
          'Reverse Engineering'
        ],

        methodology: [
          {
            title: '1. Open the source code',

            body:
              'I inspected VaultDoorTraining.java instead of attempting to guess the password.'
          },

          {
            title: '2. Locate password validation',

            body:
              'I identified the method responsible for checking the supplied password.'
          },

          {
            title: '3. Analyze the expected value',

            body:
              'The validation logic directly revealed the value required by the program.'
          }
        ],

        commands: `
cat VaultDoorTraining.java
        `,

        result:
          'Successfully determined the expected password through source-code analysis.',

        lessons: [
          'Reverse engineering often begins with understanding validation logic.',
          'Hard-coded secrets can be discovered through source-code inspection.'
        ],

        remediation: [
          'Do not hard-code sensitive secrets inside application source code.'
        ]
      },

      {
        id: 'keygenme-py',

        title: 'Keygenme-py',

        category: 'Reverse Engineering',

        difficulty: 'Medium',

        status: 'Solved',

        summary:
          'A Python reverse-engineering challenge involving analysis of key-generation logic and SHA-256 output.',

        objective:
          'Understand how the Python program constructs its license key and reproduce the required dynamic key portion.',

        environment: [
          'Python',
          'SHA-256',
          'Reverse Engineering'
        ],

        methodology: [
          {
            title: '1. Inspect the Python source',

            body:
              'I reviewed the supplied script and identified the key-validation and generation logic.'
          },

          {
            title: '2. Identify the hash input',

            body:
              'The dynamic portion of the key was derived from a SHA-256 hash generated from a username value.'
          },

          {
            title: '3. Reproduce the hash',

            body:
              'I generated the SHA-256 digest using Python.'
          },

          {
            title: '4. Reconstruct the dynamic section',

            body:
              'I selected characters from the digest according to the indexes used by the program and reconstructed the required key.'
          }
        ],

        commands: `
import hashlib

username = b"<username>"

h = hashlib.sha256(username).hexdigest()

dynamic = (
    h[4] +
    h[5] +
    h[3] +
    h[6] +
    h[2] +
    h[7] +
    h[1] +
    h[8]
)

print(dynamic)
        `,

        result:
          'Successfully reproduced the program key-generation logic.',

        lessons: [
          'Reverse engineering requires understanding how program inputs are transformed.',
          'Cryptographic hashes are deterministic.',
          'A strong hash does not protect a key when the generation algorithm and input are exposed.'
        ],

        remediation: [
          'Do not rely entirely on client-side key validation for sensitive licensing or authorization.',
          'Sensitive authorization decisions should be validated by trusted systems.'
        ]
      },

      {
        id: 'buffer-overflow-0',

        title: 'Buffer Overflow 0',

        category: 'Binary Exploitation',

        difficulty: 'Medium',

        status: 'Solved',

        summary:
          'An introductory binary exploitation challenge demonstrating how unsafe input handling can cause a stack buffer overflow.',

        objective:
          'Analyze the provided training program and trigger its intended overflow condition within the picoCTF environment.',

        environment: [
          'Linux',
          'Python',
          'pwntools',
          'Binary Exploitation'
        ],

        methodology: [
          {
            title: '1. Review the challenge source',

            body:
              'I inspected the provided source code to understand how user-controlled input was handled.'
          },

          {
            title: '2. Identify the vulnerable buffer',

            body:
              'The program used an unsafe input operation with a fixed-size buffer, allowing input larger than the allocated space.'
          },

          {
            title: '3. Construct test input',

            body:
              'Within the authorized picoCTF environment, I created an input larger than the vulnerable buffer.'
          },

          {
            title: '4. Send the input',

            body:
              'I used pwntools to connect to the challenge instance and send the crafted input.'
          },

          {
            title: '5. Observe program behavior',

            body:
              'The oversized input triggered the challenge condition and caused the program to return the required output.'
          }
        ],

        commands: `
from pwn import *

conn = remote(
    '<challenge-host>',
    <challenge-port>
)

payload = b"A" * 32

conn.sendline(payload)

print(conn.recvall().decode())
        `,

        result:
          'Successfully triggered the intended buffer-overflow condition in the authorized picoCTF training environment.',

        lessons: [
          'Fixed-size buffers can become vulnerable when input length is not properly validated.',
          'Unsafe input functions can allow data to exceed allocated buffer boundaries.',
          'Source-code analysis can help identify memory-safety weaknesses.',
          'pwntools can automate interaction with binary exploitation training services.'
        ],

        remediation: [
          'Avoid unsafe input functions that do not enforce buffer boundaries.',
          'Validate input length before copying data into fixed-size buffers.',
          'Use memory-safe APIs and modern compiler protections where possible.'
        ]
      }
    ]
  }
];