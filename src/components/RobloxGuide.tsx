import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Terminal, 
  Settings, Box, Layout, Smartphone, 
  ChevronLeft, Copy, CheckCircle2, AlertTriangle, Monitor, Cpu
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
      title: "1. AWS Instance Provisioning (Steps 1 - 5)",
      icon: <Server className="step-icon" />,
      steps: [
        {
          label: "1. Create an EC2 Instance",
          content: (
            <>
              <p>Go to <a href="https://aws.amazon.com/ec2/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}><strong>Amazon EC2 Dashboard</strong></a> and click <strong>Launch Instance</strong>.</p>
              <ul>
                <li><strong>OS:</strong> Select <strong>Ubuntu Server 26.04 LTS (HVM), SSD Volume Type</strong>.</li>
                <li><strong>Instance Type:</strong> Select <strong>m7i-flex.large</strong>.</li>
              </ul>
            </>
          )
        },
        {
          label: "2. Create a Key Pair",
          content: (
            <p>Click <strong>Create new key pair</strong>, name it, download the <code>.pem</code> file, and save it somewhere accessible (e.g., Desktop or Downloads).</p>
          )
        },
        {
          label: "3. Launch Instance",
          content: (
            <p>Click <strong>Launch Instance</strong> to build the VM.</p>
          )
        },
        {
          label: "4. Open Port 3389 for Remote Desktop",
          content: (
            <>
              <p>Navigate to security settings to allow RDP traffic:</p>
              <p>Go to EC2 → Instances → Select your instance → Security tab → Click the Security Group ID → Edit Inbound Rules → Add RDP Rule:</p>
              <ul>
                <li><strong>Type:</strong> RDP</li>
                <li><strong>Port Range:</strong> 3389</li>
                <li><strong>Source:</strong> My IP</li>
              </ul>
            </>
          )
        },
        {
          label: "5. Increase Storage Volume",
          content: (
            <>
              <p>Desktop + Waydroid requires more storage. Increase the EBS volume to at least 20GB-30GB:</p>
              <p>Go to EC2 → Instances → Select instance → Storage tab → Click Volume ID (vol-xxxx) → Actions → Modify Volume. Change size to <strong>30GB</strong> and click Modify.</p>
              <div className="warning-box" style={{ marginTop: '10px' }}>
                <AlertTriangle size={16} />
                <p><strong>Note:</strong> Restart the instance after modification for changes to take effect.</p>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: "2. Connect via SSH (Step 6)",
      icon: <Terminal className="step-icon" />,
      steps: [
        {
          label: "6. SSH into Instance",
          content: (
            <>
              <p>First, navigate to your key location (Desktop or Downloads):</p>
              <div className="code-block-container">
                <pre><code>cd Desktop</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('cd Desktop')}><Copy size={14} /></button>
              </div>
              <p>Restrict key permissions for security:</p>
              <div className="code-block-container">
                <pre><code>chmod 400 "your-key.pem"</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('chmod 400 "your-key.pem"')}><Copy size={14} /></button>
              </div>
              <p>Connect using your public IP:</p>
              <div className="code-block-container">
                <pre><code>ssh -i "your-key.pem" ubuntu@your-public-ip</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('ssh -i "your-key.pem" ubuntu@your-public-ip')}><Copy size={14} /></button>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: "3. Ubuntu Desktop & XRDP Setup (Steps 7 - 8)",
      icon: <Layout className="step-icon" />,
      steps: [
        {
          label: "7. Update System & Install Desktop",
          content: (
            <>
              <p>Update system packages:</p>
              <div className="code-block-container">
                <pre><code>sudo apt update && sudo apt upgrade -y</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo apt update && sudo apt upgrade -y')}><Copy size={14} /></button>
              </div>
              <p>Install the Ubuntu desktop GUI (this may take 10-15 minutes):</p>
              <div className="code-block-container">
                <pre><code>sudo apt install -y ubuntu-desktop</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install -y ubuntu-desktop')}><Copy size={14} /></button>
              </div>
            </>
          )
        },
        {
          label: "8. Install & Configure XRDP",
          content: (
            <>
              <p>Install XRDP server:</p>
              <div className="code-block-container">
                <pre><code>sudo apt install -y xrdp</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install -y xrdp')}><Copy size={14} /></button>
              </div>
              <p>Add xrdp user to SSL group:</p>
              <div className="code-block-container">
                <pre><code>sudo usermod -a -G ssl-cert xrdp</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo usermod -a -G ssl-cert xrdp')}><Copy size={14} /></button>
              </div>
              <p>Set a password for the <code>ubuntu</code> user:</p>
              <div className="code-block-container">
                <pre><code>sudo passwd ubuntu</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo passwd ubuntu')}><Copy size={14} /></button>
              </div>
              <p>Restart XRDP service:</p>
              <div className="code-block-container">
                <pre><code>sudo systemctl restart xrdp</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo systemctl restart xrdp')}><Copy size={14} /></button>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: "4. Remote Desktop & Waydroid (Steps 9 - 11)",
      icon: <Monitor className="step-icon" />,
      steps: [
        {
          label: "9. Install & Initialize Waydroid",
          content: (
            <>
              <p>Add the Waydroid repository:</p>
              <div className="code-block-container">
                <pre><code>curl https://repo.waydro.id | sudo bash</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('curl https://repo.waydro.id | sudo bash')}><Copy size={14} /></button>
              </div>
              <p>Install Waydroid:</p>
              <div className="code-block-container">
                <pre><code>sudo apt install waydroid -y</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install waydroid -y')}><Copy size={14} /></button>
              </div>
              <p>Initialize Waydroid with GAPPS support:</p>
              <div className="code-block-container">
                <pre><code>sudo waydroid init -s GAPPS</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo waydroid init -s GAPPS')}><Copy size={14} /></button>
              </div>
              <p>Restart Waydroid container:</p>
              <div className="code-block-container">
                <pre><code>sudo systemctl restart waydroid-container</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo systemctl restart waydroid-container')}><Copy size={14} /></button>
              </div>
            </>
          )
        },
        {
          label: "10. Install XFCE Desktop (Fix RDP Crashes)",
          content: (
            <>
              <p>If Remote Desktop instantly closes upon logging in, configure an XFCE session:</p>
              <div className="code-block-container">
                <pre><code>sudo apt install xfce4 xfce4-goodies -y</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install xfce4 xfce4-goodies -y')}><Copy size={14} /></button>
              </div>
              <p>Set XFCE as default desktop session:</p>
              <div className="code-block-container">
                <pre><code>echo "startxfce4" &gt; ~/.xsession</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('echo "startxfce4" > ~/.xsession')}><Copy size={14} /></button>
              </div>
              <p>Configure file permissions:</p>
              <div className="code-block-container">
                <pre><code>chmod 644 ~/.xsession</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('chmod 644 ~/.xsession')}><Copy size={14} /></button>
              </div>
              <p>Restart XRDP:</p>
              <div className="code-block-container">
                <pre><code>sudo systemctl restart xrdp</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo systemctl restart xrdp')}><Copy size={14} /></button>
              </div>
              <p>Reboot the instance (wait ~1 minute before reconnecting):</p>
              <div className="code-block-container">
                <pre><code>sudo reboot</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo reboot')}><Copy size={14} /></button>
              </div>
            </>
          )
        },
        {
          label: "11. Remote Desktop Login",
          content: (
            <>
              <p>Open RDP client on your host machine and connect to the EC2 Public IPv4 Address.</p>
              <p>Use these credentials to log in:</p>
              <ul>
                <li><strong>Username:</strong> <code>ubuntu</code></li>
                <li><strong>Password:</strong> The password you set in Step 8</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: "5. Weston & Git Installation (Steps 12 - 13)",
      icon: <Box className="step-icon" />,
      steps: [
        {
          label: "12. Install Weston Display Server",
          content: (
            <>
              <p>After logging into the Ubuntu Desktop GUI, open terminal and run:</p>
              <div className="code-block-container">
                <pre><code>sudo apt install weston -y</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install weston -y')}><Copy size={14} /></button>
              </div>
            </>
          )
        },
        {
          label: "13. Install Git & Clone Scripts",
          content: (
            <>
              <p>Install Git command-line utility:</p>
              <div className="code-block-container">
                <pre><code>sudo apt install git -y</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install git -y')}><Copy size={14} /></button>
              </div>
              <p>Clone the custom Waydroid configuration repository:</p>
              <div className="code-block-container">
                <pre><code>git clone https://github.com/casualsnek/waydroid_script</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('git clone https://github.com/casualsnek/waydroid_script')}><Copy size={14} /></button>
              </div>
              <p>Change directory into the cloned repo:</p>
              <div className="code-block-container">
                <pre><code>cd waydroid_script</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('cd waydroid_script')}><Copy size={14} /></button>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: "6. Python & libhoudini Setup (Steps 14 - 15)",
      icon: <Cpu className="step-icon" />,
      steps: [
        {
          label: "14. Install Python Venv Package",
          content: (
            <>
              <p>Install required virtualenv libraries:</p>
              <div className="code-block-container">
                <pre><code>sudo apt install python3.14-venv -y</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install python3.14-venv -y')}><Copy size={14} /></button>
              </div>
              <p>Create virtual python workspace:</p>
              <div className="code-block-container">
                <pre><code>python3 -m venv venv</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('python3 -m venv venv')}><Copy size={14} /></button>
              </div>
              <p>Install pipeline packages:</p>
              <div className="code-block-container">
                <pre><code>venv/bin/pip install -r requirements.txt</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('venv/bin/pip install -r requirements.txt')}><Copy size={14} /></button>
              </div>
            </>
          )
        },
        {
          label: "15. Install libhoudini Translation Bridge",
          content: (
            <>
              <p>Install libhoudini translation layers for Intel/AMD CPUs:</p>
              <div className="code-block-container">
                <pre><code>sudo venv/bin/python3 main.py install libhoudini</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo venv/bin/python3 main.py install libhoudini')}><Copy size={14} /></button>
              </div>
              <p>Restart the container:</p>
              <div className="code-block-container">
                <pre><code>sudo systemctl restart waydroid-container</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo systemctl restart waydroid-container')}><Copy size={14} /></button>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: "7. Launching Android UI & Roblox (Steps 16 - 17)",
      icon: <Smartphone className="step-icon" />,
      steps: [
        {
          label: "16. Open Weston with Idle Disabled",
          content: (
            <>
              <p>To prevent Weston from auto-closing due to being idle, launch it inside your desktop session's terminal with idle timing disabled:</p>
              <div className="code-block-container">
                <pre><code>weston --backend=x11-backend.so --idle-time=0</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('weston --backend=x11-backend.so --idle-time=0')}><Copy size={14} /></button>
              </div>
              <p>Next, open a terminal inside the newly created Weston window and run the command to launch Android's interface:</p>
              <div className="code-block-container">
                <pre><code>waydroid show-full-ui</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('waydroid show-full-ui')}><Copy size={14} /></button>
              </div>
            </>
          )
        },
        {
          label: "17. Setup Android & Roblox",
          content: (
            <p>Once Android loads within the Weston window: Open the <strong>Google Play Store</strong>, sign into your Google account, search and download <strong>Roblox</strong>, and log in to your Roblox account.</p>
          )
        }
      ]
    },
    {
      title: "8. Simple Auto Clicker (Step 18)",
      icon: <Settings className="step-icon" />,
      steps: [
        {
          label: "18. Install xdotool Clicker Loop",
          content: (
            <>
              <p>Open a regular Ubuntu terminal (outside Weston) and install the xdotool utility:</p>
              <div className="code-block-container">
                <pre><code>sudo apt install xdotool -y</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install xdotool -y')}><Copy size={14} /></button>
              </div>
              <p>Move your cursor over Roblox inside Weston, then run the click loop (sends left-click every 15 seconds):</p>
              <div className="code-block-container">
                <pre><code>while true; do xdotool click 1; sleep 15; done</code></pre>
                <button className="copy-btn" onClick={() => copyToClipboard('while true; do xdotool click 1; sleep 15; done')}><Copy size={14} /></button>
              </div>
              <p>Press <code>Ctrl + C</code> to terminate the clicking loop at any time.</p>
            </>
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
