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
  }
];