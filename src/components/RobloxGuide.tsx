import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Terminal, 
  Settings, Box, Layout, Smartphone, 
  ChevronLeft, Copy, CheckCircle2, AlertTriangle, Info, Monitor, Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './RobloxGuide.css';

const RobloxGuide: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const sections = [
    {
      title: "1. AWS Instance Provisioning",
      icon: <Server className="step-icon" />,
      steps: [
        {
          label: "Create & Configure Instance",
          content: (
            <>
              <p>Go to <a href="https://aws.amazon.com/ec2/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}><strong>Amazon EC2</strong></a> and sign in to your account. Open the <strong>EC2 Dashboard</strong> and click <strong>Launch Instance</strong>.</p>
              <p>Name your server (e.g., <code>roblox-server</code>) and configure the base settings:</p>
              <ul>
                <li><strong>OS:</strong> Select <strong>Ubuntu</strong> → <code>Ubuntu Server 26.04 LTS (HVM)</code>.</li>
                <li><strong>Instance Type:</strong> Choose <code>m7i-flex.large</code>. <em>(Smaller sizes will likely fail or lag heavily).</em></li>
              </ul>
            </>
          )
        },
        {
          label: "Key Pair (CRITICAL)",
          content: (
            <div className="warning-box">
              <AlertTriangle size={18} />
              <p>Create a new key pair named <code>roblox-key</code>, format <code>.pem</code>. Download it and move it to your <strong>Desktop</strong>. <strong>Do not lose this file</strong>, or you will be locked out of your server.</p>
            </div>
          )
        },
        {
          label: "Network Setup",
          content: (
            <p>Under Network Settings, click <strong>Edit</strong>. Add an Inbound Rule: <strong>Type: RDP</strong>, <strong>Port: 3389</strong>, <strong>Source: My IP</strong>. This is required for Remote Desktop access later.</p>
          )
        },
        {
          label: "Storage & Launch",
          content: (
            <>
              <p>Increase storage to <strong>30 GB</strong>. Waydroid and the Ubuntu Desktop environment are quite large.</p>
              <p>Click <strong>Launch Instance</strong> and wait for the status to show <code>Running</code> with <code>2/2 checks passed</code>.</p>
            </>
          )
        }
      ]
    },
    {
      title: "2. Initial Connection (SSH)",
      icon: <Terminal className="step-icon" />,
      steps: [
        {
          label: "Connect to your Server",
          content: (
            <>
              <p>Open your computer's terminal (Terminal on Mac, PowerShell/Terminal on Windows) and navigate to your key location:</p>
              <div className="code-block-container">
                <pre><code>cd Desktop</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('cd Desktop')}><Copy size={14} /></button>
              </div>
              
              <p>First, restrict the key permissions (required for security):</p>
              <div className="code-block-container">
                <pre><code>chmod 400 roblox-key.pem</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('chmod 400 roblox-key.pem')}><Copy size={14} /></button>
              </div>

              <p>Now, SSH into the server using the command provided in the AWS "Connect" tab:</p>
              <div className="code-block-container">
                <pre><code>ssh -i "roblox-key.pem" ubuntu@YOUR-SERVER-IP</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('ssh -i "roblox-key.pem" ubuntu@YOUR-SERVER-IP')}><Copy size={14} /></button>
              </div>
              <p>Type <code>yes</code> if asked about the host's authenticity.</p>
            </>
          )
        }
      ]
    },
    {
      title: "3. Desktop Environment Setup",
      icon: <Layout className="step-icon" />,
      steps: [
        {
          label: "Install Ubuntu Desktop",
          content: (
            <>
              <p>Update the system packages to ensure everything is current:</p>
              <div className="code-block-container">
                <pre><code>sudo apt update && sudo apt upgrade -y</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo apt update && sudo apt upgrade -y')}><Copy size={14} /></button>
              </div>

              <p>Install the full Ubuntu Desktop environment. <strong>Warning:</strong> This can take 10-20 minutes. Do not close your terminal.</p>
              <div className="code-block-container">
                <pre><code>sudo apt install ubuntu-desktop -y</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install ubuntu-desktop -y')}><Copy size={14} /></button>
              </div>
            </>
          )
        },
        {
          label: "Remote Desktop (XRDP)",
          content: (
            <>
              <p>Install XRDP to allow remote desktop connections:</p>
              <div className="code-block-container">
                <pre><code>sudo apt install xrdp -y</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install xrdp -y')}><Copy size={14} /></button>
              </div>

              <p>Grant permissions and set a password for the <code>ubuntu</code> user:</p>
              <div className="code-block-container">
                <pre><code>sudo usermod -a -G ssl-cert xrdp
sudo passwd ubuntu</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo usermod -a -G ssl-cert xrdp\nsudo passwd ubuntu')}><Copy size={14} /></button>
              </div>
            </>
          )
        },
        {
          label: "Fix Disconnect Bug",
          content: (
            <>
              <p>Standard Ubuntu Desktop often crashes over RDP. Installing XFCE fixes this:</p>
              <div className="code-block-container">
                <pre><code>{`sudo apt install xfce4 xfce4-goodies -y
echo "startxfce4" > ~/.xsession
chmod 644 ~/.xsession
sudo systemctl restart xrdp`}</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install xfce4 xfce4-goodies -y\necho "startxfce4" > ~/.xsession\nchmod 644 ~/.xsession\nsudo systemctl restart xrdp')}><Copy size={14} /></button>
              </div>
              <p>Finally, reboot the server. You will be disconnected.</p>
              <div className="code-block-container">
                <pre><code>sudo reboot</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo reboot')}><Copy size={14} /></button>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: "4. Connecting to Desktop",
      icon: <Monitor className="step-icon" />,
      steps: [
        {
          label: "Remote Desktop Login",
          content: (
            <>
              <p>Wait 1 minute for the server to reboot, then open <strong>Remote Desktop Connection</strong> (Windows) or the <strong>Microsoft Remote Desktop</strong> app (Mac).</p>
              <p>Connect using your <strong>Public IPv4 address</strong> from AWS. Use the username <code>ubuntu</code> and the password you created in Step 22.</p>
            </>
          )
        }
      ]
    },
    {
      title: "5. Waydroid Installation",
      icon: <Box className="step-icon" />,
      steps: [
        {
          label: "Install & Initialize Waydroid",
          content: (
            <>
              <p>Inside the Ubuntu Desktop terminal, install the necessary tools and repository:</p>
              <div className="code-block-container">
                <pre><code>sudo apt install curl -y
curl https://repo.waydro.id | sudo bash
sudo apt install waydroid -y</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install curl -y\ncurl https://repo.waydro.id | sudo bash\nsudo apt install waydroid -y')}><Copy size={14} /></button>
              </div>

              <p>Initialize Waydroid with Google Apps (GAPPS) support:</p>
              <div className="code-block-container">
                <pre><code>sudo waydroid init -s GAPPS
sudo systemctl restart waydroid-container</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo waydroid init -s GAPPS\nsudo systemctl restart waydroid-container')}><Copy size={14} /></button>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: "6. ARM Translation (libhoudini)",
      icon: <Cpu className="step-icon" />,
      steps: [
        {
          label: "Setup ARM Translation",
          content: (
            <>
              <p>Install Weston and Git to run the translation scripts:</p>
              <div className="code-block-container">
                <pre><code>sudo apt install weston git -y</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install weston git -y')}><Copy size={14} /></button>
              </div>

              <p>Clone the script and setup the Python environment:</p>
              <div className="code-block-container">
                <pre><code>git clone https://github.com/casualsnek/waydroid_script
cd waydroid_script
sudo apt install python3.14-venv -y
python3 -m venv venv
venv/bin/pip install -r requirements.txt</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('git clone https://github.com/casualsnek/waydroid_script\ncd waydroid_script\nsudo apt install python3.14-venv -y\npython3 -m venv venv\nvenv/bin/pip install -r requirements.txt')}><Copy size={14} /></button>
              </div>

              <p>Install <strong>libhoudini</strong> (enables Roblox to run on Intel/AMD CPUs):</p>
              <div className="code-block-container">
                <pre><code>sudo venv/bin/python3 main.py install libhoudini
sudo systemctl restart waydroid-container</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo venv/bin/python3 main.py install libhoudini\nsudo systemctl restart waydroid-container')}><Copy size={14} /></button>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: "7. Launching Roblox",
      icon: <Smartphone className="step-icon" />,
      steps: [
        {
          label: "Start Android Properly",
          content: (
            <>
              <div className="info-box">
                <Info size={18} />
                <p>Weston opens a nested display. We use <code>idle-time=0</code> to prevent it from auto-closing.</p>
              </div>
              <p>Launch Weston from the Ubuntu terminal:</p>
              <div className="code-block-container">
                <pre><code>weston --backend=x11-backend.so --idle-time=0</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('weston --backend=x11-backend.so --idle-time=0')}><Copy size={14} /></button>
              </div>
              
              <p>Inside the new Weston window, right-click and open a terminal, then launch Android:</p>
              <div className="code-block-container">
                <pre><code>waydroid show-full-ui</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('waydroid show-full-ui')}><Copy size={14} /></button>
              </div>
            </>
          )
        },
        {
          label: "Install Roblox",
          content: (
            <p>Once Android loads, open the <strong>Play Store</strong>, sign in to your Google account, and download <strong>Roblox</strong>. Log in and you're ready to play!</p>
          )
        }
      ]
    },
    {
      title: "8. Auto Clicker & Troubleshooting",
      icon: <Settings className="step-icon" />,
      steps: [
        {
          label: "Auto Clicker Setup",
          content: (
            <>
              <p>Install xdotool to enable automated clicking:</p>
              <div className="code-block-container">
                <pre><code>sudo apt install xdotool -y</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install xdotool -y')}><Copy size={14} /></button>
              </div>

              <p>Run the click loop (clicks every 15 seconds). Move your mouse over Roblox first:</p>
              <div className="code-block-container">
                <pre><code>while true; do xdotool click 1; sleep 15; done</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('while true; do xdotool click 1; sleep 15; done')}><Copy size={14} /></button>
              </div>
              <p>Press <code>Ctrl + C</code> to stop.</p>
            </>
          )
        },
        {
          label: "Troubleshooting",
          content: (
            <div className="troubleshooting-grid">
              <div className="trouble-item">
                <strong>Instant Disconnect?</strong>
                <p>Rerun the XFCE fix and reboot: <code>{`echo "startxfce4" > ~/.xsession && sudo reboot`}</code></p>
              </div>

              <div className="trouble-item">
                <strong>Android won't open?</strong>
                <p>Restart the container: <code>sudo systemctl restart waydroid-container</code></p>
              </div>
              <div className="trouble-item">
                <strong>Laggy experience?</strong>
                <p>Upgrade to a larger AWS instance type like <code>m7i-flex.xlarge</code>.</p>
              </div>
            </div>
          )
        }
      ]
    }
  ];

  return (
    <div className="roblox-guide-page">
      <div className="mesh-gradient" />
      <div className="container guide-container">
        <Link to="/" className="back-link">
          <ChevronLeft size={20} /> Back to Home
        </Link>
        
        <motion.div 
          className="guide-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Roblox Cloud Setup Guide</h1>
          <p className="subtitle">A comprehensive, step-by-step manual for running Roblox on AWS EC2 via Waydroid.</p>
        </motion.div>
<div className="guide-sections-list">
  {sections.map((section, sIndex) => (
    <motion.div 
      key={sIndex}
      id={`roblox-section-${sIndex + 1}`}
      className="guide-section-card glass border-beam-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: sIndex * 0.1 }}
    >
              <div className="border-beam" />
              <div className="section-header">
                <div className="section-icon-wrapper">
                  {section.icon}
                </div>
                <h2>{section.title}</h2>
              </div>
              
              <div className="section-steps">
                {section.steps.map((step, tIndex) => (
                  <div key={tIndex} className="guide-sub-step">
                    <h3 className="sub-step-label">{step.label}</h3>
                    <div className="sub-step-content">
                      {step.content}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="guide-footer glass"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <CheckCircle2 className="footer-icon" />
          <p>Guide complete! Your AWS instance is now a high-performance cloud gaming rig.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default RobloxGuide;
