import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Key, Play, Shield, HardDrive, Terminal, 
  Settings, Cpu, Box, Layout, Smartphone, MousePointer,
  ChevronLeft, ExternalLink, Copy, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './RobloxGuide.css';

const RobloxGuide: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast here
  };

  const steps = [
    {
      title: "1. Create an EC2 Instance",
      icon: <Server className="step-icon" />,
      content: (
        <ul>
          <li>Go to AWS EC2 Dashboard.</li>
          <li>Click <strong>Launch Instance</strong>.</li>
          <li><strong>Image:</strong> Ubuntu Server 26.04 LTS (HVM), SSD Volume Type.</li>
          <li><strong>Instance Type:</strong> <code>m7i-flex.large</code></li>
        </ul>
      )
    },
    {
      title: "2. Create a Key Pair",
      icon: <Key className="step-icon" />,
      content: (
        <ul>
          <li>Click <strong>Create new key pair</strong>.</li>
          <li>Give it a name and download the <code>.pem</code> file.</li>
          <li>Save it somewhere accessible (Desktop/Downloads).</li>
        </ul>
      )
    },
    {
      title: "3. Launch Instance",
      icon: <Play className="step-icon" />,
      content: <p>Click <strong>Launch/Create Instance</strong> to start the provisioning process.</p>
    },
    {
      title: "4. Open Port 3389 for RDP",
      icon: <Shield className="step-icon" />,
      content: (
        <ul>
          <li>Go to Security tab of your instance.</li>
          <li>Edit Inbound Rules.</li>
          <li>Add Rule: Type: <strong>RDP</strong>, Port: <strong>3389</strong>, Source: <strong>My IP</strong>.</li>
        </ul>
      )
    },
    {
      title: "5. Increase Storage Volume",
      icon: <HardDrive className="step-icon" />,
      content: (
        <ul>
          <li>Desktop + Waydroid requires more storage (30GB recommended).</li>
          <li>Go to Storage tab → Click Volume ID → Actions → <strong>Modify Volume</strong>.</li>
          <li>Set size to <strong>30GB</strong> and Modify.</li>
          <li><em>Note: Restart the instance after modification.</em></li>
        </ul>
      )
    },
    {
      title: "6. Connect via SSH",
      icon: <Terminal className="step-icon" />,
      content: (
        <div className="code-block-container">
          <pre><code>{`chmod 400 "your-key.pem"
ssh -i "your-key.pem" ubuntu@your-public-ip`}</code></pre>
          <button className="copy-btn" onClick={() => copyToClipboard('chmod 400 "your-key.pem"\nssh -i "your-key.pem" ubuntu@your-public-ip')}>
            <Copy size={14} />
          </button>
        </div>
      )
    },
    {
      title: "7. Update System + Install Desktop",
      icon: <Settings className="step-icon" />,
      content: (
        <div className="code-block-container">
          <pre><code>{`sudo apt update && sudo apt upgrade -y
sudo apt install -y ubuntu-desktop`}</code></pre>
          <button className="copy-btn" onClick={() => copyToClipboard('sudo apt update && sudo apt upgrade -y\nsudo apt install -y ubuntu-desktop')}>
            <Copy size={14} />
          </button>
        </div>
      )
    },
    {
      title: "8. XRDP Setup",
      icon: <Layout className="step-icon" />,
      content: (
        <div className="code-block-container">
          <pre><code>{`sudo apt install -y xrdp
sudo usermod -a -G ssl-cert xrdp
sudo passwd ubuntu
sudo systemctl restart xrdp`}</code></pre>
          <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install -y xrdp\nsudo usermod -a -G ssl-cert xrdp\nsudo passwd ubuntu\nsudo systemctl restart xrdp')}>
            <Copy size={14} />
          </button>
        </div>
      )
    },
    {
      title: "9. Install Waydroid",
      icon: <Box className="step-icon" />,
      content: (
        <div className="code-block-container">
          <pre><code>{`curl https://repo.waydro.id | sudo bash
sudo apt install waydroid -y
sudo waydroid init -s GAPPS
sudo systemctl restart waydroid-container`}</code></pre>
          <button className="copy-btn" onClick={() => copyToClipboard('curl https://repo.waydro.id | sudo bash\nsudo apt install waydroid -y\nsudo waydroid init -s GAPPS\nsudo systemctl restart waydroid-container')}>
            <Copy size={14} />
          </button>
        </div>
      )
    },
    {
      title: "10. Fix RDP Crash (Install XFCE)",
      icon: <Smartphone className="step-icon" />,
      content: (
        <div className="code-block-container">
          <pre><code>{`sudo apt install xfce4 xfce4-goodies -y
echo "startxfce4" > ~/.xsession
chmod 644 ~/.xsession
sudo systemctl restart xrdp
sudo reboot`}</code></pre>
          <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install xfce4 xfce4-goodies -y\necho "startxfce4" > ~/.xsession\nchmod 644 ~/.xsession\nsudo systemctl restart xrdp\nsudo reboot')}>
            <Copy size={14} />
          </button>
        </div>
      )
    },
    {
      title: "11. Remote Desktop Login",
      icon: <ExternalLink className="step-icon" />,
      content: <p>Connect via <strong>Remote Desktop Connection</strong> using the EC2 Public IP. Login with <code>ubuntu</code> and your password.</p>
    },
    {
      title: "12. Install Weston",
      icon: <Layout className="step-icon" />,
      content: (
        <div className="code-block-container">
          <pre><code>{`sudo apt install weston -y`}</code></pre>
          <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install weston -y')}>
            <Copy size={14} />
          </button>
        </div>
      )
    },
    {
      title: "13. Clone Translation Scripts",
      icon: <Terminal className="step-icon" />,
      content: (
        <div className="code-block-container">
          <pre><code>{`sudo apt install git -y
git clone https://github.com/casualsnek/waydroid_script
cd waydroid_script`}</code></pre>
          <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install git -y\ngit clone https://github.com/casualsnek/waydroid_script\ncd waydroid_script')}>
            <Copy size={14} />
          </button>
        </div>
      )
    },
    {
      title: "14. Setup Python Environment",
      icon: <Cpu className="step-icon" />,
      content: (
        <div className="code-block-container">
          <pre><code>{`sudo apt install python3.14-venv -y
python3 -m venv venv
venv/bin/pip install -r requirements.txt`}</code></pre>
          <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install python3.14-venv -y\npython3 -m venv venv\nvenv/bin/pip install -r requirements.txt')}>
            <Copy size={14} />
          </button>
        </div>
      )
    },
    {
      title: "15. Install libhoudini",
      icon: <Box className="step-icon" />,
      content: (
        <div className="code-block-container">
          <pre><code>{`sudo venv/bin/python3 main.py install libhoudini
sudo systemctl restart waydroid-container`}</code></pre>
          <button className="copy-btn" onClick={() => copyToClipboard('sudo venv/bin/python3 main.py install libhoudini\nsudo systemctl restart waydroid-container')}>
            <Copy size={14} />
          </button>
        </div>
      )
    },
    {
      title: "16. Launch Waydroid UI",
      icon: <Smartphone className="step-icon" />,
      content: (
        <div className="code-block-container">
          <pre><code>{`# Inside Weston terminal:
waydroid show-full-ui`}</code></pre>
          <button className="copy-btn" onClick={() => copyToClipboard('waydroid show-full-ui')}>
            <Copy size={14} />
          </button>
        </div>
      )
    },
    {
      title: "17. Install Roblox",
      icon: <Box className="step-icon" />,
      content: <p>In Waydroid: Open <strong>Play Store</strong> → Login → Download <strong>Roblox</strong>.</p>
    },
    {
      title: "18. Auto Clicker (Optional)",
      icon: <MousePointer className="step-icon" />,
      content: (
        <div className="code-block-container">
          <pre><code>{`sudo apt install xdotool -y
while true; do xdotool click 1; sleep 15; done`}</code></pre>
          <button className="copy-btn" onClick={() => copyToClipboard('sudo apt install xdotool -y\nwhile true; do xdotool click 1; sleep 15; done')}>
            <Copy size={14} />
          </button>
        </div>
      )
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
          <h1 className="section-title">AWS EC2 Ubuntu + Waydroid + Roblox</h1>
          <p className="subtitle">The ultimate guide to setting up a cloud-based Android environment for Roblox.</p>
        </motion.div>

        <div className="guide-steps-grid">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="guide-step-card glass border-beam-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="border-beam" />
              <div className="step-header">
                <div className="step-icon-wrapper">
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
              </div>
              <div className="step-content">
                {step.content}
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
          <p>Setup complete! Your EC2 instance is now a cloud Android phone.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default RobloxGuide;
