<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Priya Kumar - Full Stack Developer</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(-45deg, #0f0f23, #1a1a2e, #16213e, #0f3460);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
            color: white;
            overflow-x: hidden;
        }

        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            margin-bottom: 60px;
            position: relative;
        }

        .typing-text {
            font-size: 3rem;
            font-weight: bold;
            background: linear-gradient(45deg, #a855f7, #ec4899, #06b6d4, #10b981);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: textGradient 3s ease-in-out infinite;
            margin-bottom: 20px;
        }

        @keyframes textGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .profile-banner {
            width: 400px;
            height: 200px;
            border-radius: 20px;
            margin: 20px auto;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            transform: perspective(1000px) rotateX(5deg);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .profile-banner::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
            transform: rotate(45deg);
            animation: shine 3s infinite;
        }

        @keyframes shine {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .profile-banner:hover {
            transform: perspective(1000px) rotateX(0deg) translateY(-10px);
            box-shadow: 0 30px 60px rgba(0,0,0,0.4);
        }

        .about-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin: 60px 0;
            align-items: center;
        }

        .about-text {
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 30px;
            border: 1px solid rgba(255,255,255,0.2);
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }

        .about-image {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            height: 300px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }

        .tech-section {
            margin: 80px 0;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 40px;
            background: linear-gradient(45deg, #a855f7, #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .tech-category {
            margin: 40px 0;
        }

        .category-title {
            font-size: 1.5rem;
            text-align: center;
            margin-bottom: 20px;
            color: #a855f7;
        }

        .tech-grid {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        .tech-item {
            width: 80px;
            height: 80px;
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            border: 1px solid rgba(255,255,255,0.2);
        }

        .tech-item:hover {
            transform: translateY(-10px) scale(1.1);
            box-shadow: 0 20px 40px rgba(168, 85, 247, 0.3);
            background: rgba(168, 85, 247, 0.2);
        }

        .tooltip {
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.9);
            color: white;
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 0.9rem;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
        }

        .tooltip::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 5px solid transparent;
            border-top-color: rgba(0,0,0,0.9);
        }

        .tech-item:hover .tooltip {
            opacity: 1;
            visibility: visible;
            bottom: 110%;
        }

        .stats-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 60px 0;
        }

        .stat-card {
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            border: 1px solid rgba(255,255,255,0.2);
            transition: all 0.3s ease;
        }

        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .achievements {
            text-align: center;
            margin: 60px 0;
        }

        .trophy-grid {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            margin-top: 30px;
        }

        .trophy {
            width: 60px;
            height: 60px;
            background: linear-gradient(45deg, #ffd700, #ffed4e);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            animation: trophyFloat 2s ease-in-out infinite;
            box-shadow: 0 10px 20px rgba(255, 215, 0, 0.3);
        }

        .trophy:nth-child(even) {
            animation-delay: 1s;
        }

        @keyframes trophyFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }

        .quote {
            text-align: center;
            font-size: 1.3rem;
            font-style: italic;
            margin: 60px 0;
            padding: 30px;
            background: rgba(255,255,255,0.05);
            border-radius: 20px;
            border-left: 5px solid #a855f7;
        }

        .floating-elements {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        .floating-element {
            position: absolute;
            opacity: 0.3;
            animation: float 15s infinite linear;
        }

        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.3;
            }
            90% {
                opacity: 0.3;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }

        .particle {
            position: absolute;
            background: #a855f7;
            border-radius: 50%;
            pointer-events: none;
            animation: particle 3s ease-out forwards;
        }

        @keyframes particle {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: scale(1) rotate(180deg);
                opacity: 0;
            }
        }

        @media (max-width: 768px) {
            .about-section {
                grid-template-columns: 1fr;
            }
            
            .stats-section {
                grid-template-columns: 1fr;
            }
            
            .typing-text {
                font-size: 2rem;
            }
            
            .profile-banner {
                width: 300px;
                height: 150px;
            }
        }
    </style>
</head>
<body>
    <div class="floating-elements" id="floatingElements"></div>
    
    <div class="container">
        <header class="header">
            <h1 class="typing-text">🦋 Hi there, I'm Priya!</h1>
            <div class="profile-banner">
                <div>Full Stack Developer 🚀</div>
            </div>
            <p style="margin-top: 20px; font-size: 1.2rem;">Building Beautiful Digital Experiences ✨</p>
        </header>

        <section class="about-section">
            <div class="about-text">
                <h2 style="margin-bottom: 20px; color: #a855f7;">🌟 About Me</h2>
                <p style="margin-bottom: 15px;">🚀 Currently on a Journey</p>
                <p style="margin-bottom: 15px;">🌱 Learning: Laravel as backend powerhouse</p>
                <p style="margin-bottom: 15px;">🔭 Building: Full-stack applications with modern tech</p>
                <p style="margin-bottom: 15px;">💡 Passion: Clean code architecture & beautiful UIs</p>
                <p style="margin-bottom: 15px;">☕ Fuel: Chai & curiosity-driven development</p>
                <p style="margin-bottom: 15px;">🎯 Let's Connect & Collaborate!</p>
                <p style="margin-bottom: 15px;">💬 Ask me about: Laravel, React, JavaScript, TypeScript</p>
                <p>📧 Reach me: mishrapriya15987@gmail.com</p>
            </div>
            <div class="about-image">
                <div>💻 Full Stack Magic ✨</div>
            </div>
        </section>

        <section class="tech-section">
            <h2 class="section-title">🛠️ Tech Arsenal</h2>
            
            <div class="tech-category">
                <h3 class="category-title">Frontend Magic ✨</h3>
                <div class="tech-grid">
                    <div class="tech-item" onclick="createParticles(this)">
                        🌐
                        <div class="tooltip">HTML5</div>
                    </div>
                    <div class="tech-item" onclick="createParticles(this)">
                        🎨
                        <div class="tooltip">CSS3</div>
                    </div>
                    <div class="tech-item" onclick="createParticles(this)">
                        📜
                        <div class="tooltip">JavaScript</div>
                    </div>
                    <div class="tech-item" onclick="createParticles(this)">
                        📘
                        <div class="tooltip">TypeScript</div>
                    </div>
                    <div class="tech-item" onclick="createParticles(this)">
                        ⚛️
                        <div class="tooltip">React</div>
                    </div>
                    <div class="tech-item" onclick="createParticles(this)">
                        🔺
                        <div class="tooltip">Next.js</div>
                    </div>
                    <div class="tech-item" onclick="createParticles(this)">
                        🎭
                        <div class="tooltip">Material UI</div>
                    </div>
                    <div class="tech-item" onclick="createParticles(this)">
                        🌊
                        <div class="tooltip">Tailwind CSS</div>
                    </div>
                </div>
            </div>

            <div class="tech-category">
                <h3 class="category-title">Backend Power ⚡</h3>
                <div class="tech-grid">
                    <div class="tech-item" onclick="createParticles(this)">
                        🐘
                        <div class="tooltip">PHP</div>
                    </div>
                    <div class="tech-item" onclick="createParticles(this)">
                        🏛️
                        <div class="tooltip">Laravel</div>
                    </div>
                    <div class="tech-item" onclick="createParticles(this)">
                        🟢
                        <div class="tooltip">Node.js</div>
                    </div>
                    <div class="tech-item" onclick="createParticles(this)">
                        🐬
                        <div class="tooltip">MySQL</div>
                    </div>
                    <div class="tech-item" onclick="createParticles(this)">
                        🐘
                        <div class="tooltip">PostgreSQL</div>
                    </div>
                    <div class="tech-item" onclick="createParticles(this)">
                        🍃
                        <div class="tooltip">MongoDB</div>
                    </div>
                </div>
            </div>

            <div class="tech-category">
                <h3 class="category-title">Tools & Platforms 🔧</h3>
                <div class="tech-grid">
                    <div class="tech-item" onclick="createParticles(this)">
                        📚
                        <div class="tooltip">Git</div>
                    </div>
                    <div class="tech-item" onclick="createParticles(this)">
                        🐙
                        <div class="tooltip">GitHub</div>
                    </div>
                    <div class="tech-item" onclick="createParticles(this)">
                        💻
                        <div class="tooltip">VS Code</div>
                    </div>
                    <div class="tech-item" onclick="createParticles(this)">
                        🎨
                        <div class="tooltip">Figma</div>
                    </div>
                    <div class="tech-item" onclick="createParticles(this)">
                        ▲
                        <div class="tooltip">Vercel</div>
                    </div>
                    <div class="tech-item" onclick="createParticles(this)">
                        🐳
                        <div class="tooltip">Docker</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="stats-section">
            <div class="stat-card">
                <h3 style="color: #a855f7; margin-bottom: 15px;">📊 GitHub Stats</h3>
                <p>Building beautiful applications with clean, efficient code</p>
            </div>
            <div class="stat-card">
                <h3 style="color: #ec4899; margin-bottom: 15px;">🔥 Current Streak</h3>
                <p>Consistent coding and continuous learning journey</p>
            </div>
        </section>

        <section class="achievements">
            <h2 class="section-title">🏆 Achievements & Trophies</h2>
            <div class="trophy-grid">
                <div class="trophy">🏆</div>
                <div class="trophy">⭐</div>
                <div class="trophy">🥇</div>
                <div class="trophy">🎯</div>
                <div class="trophy">💎</div>
                <div class="trophy">🚀</div>
            </div>
        </section>

        <div class="quote">
            💫 "Chai in my cup, clean code on my screen — building thoughtful, beautiful components every day" ✨
            <br><br>
            🦋 From cocoon to butterfly — transforming ideas into digital reality
        </div>
    </div>

    <script>
        // Create floating elements
        function createFloatingElements() {
            const container = document.getElementById('floatingElements');
            const symbols = ['🦋', '✨', '💻', '🚀', '⚛️', '🌟', '💎', '🔥'];
            
            setInterval(() => {
                const element = document.createElement('div');
                element.className = 'floating-element';
                element.textContent = symbols[Math.floor(Math.random() * symbols.length)];
                element.style.left = Math.random() * 100 + '%';
                element.style.fontSize = (Math.random() * 20 + 20) + 'px';
                element.style.animationDuration = (Math.random() * 10 + 10) + 's';
                
                container.appendChild(element);
                
                setTimeout(() => {
                    element.remove();
                }, 15000);
            }, 2000);
        }

        // Create particle explosion effect
        function createParticles(element) {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            for (let i = 0; i < 12; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                const size = Math.random() * 6 + 4;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                const angle = (i / 12) * 2 * Math.PI;
                const distance = Math.random() * 100 + 50;
                const x = centerX + Math.cos(angle) * distance;
                const y = centerY + Math.sin(angle) * distance;
                
                particle.style.left = centerX + 'px';
                particle.style.top = centerY + 'px';
                particle.style.position = 'fixed';
                particle.style.zIndex = '1000';
                
                document.body.appendChild(particle);
                
                setTimeout(() => {
                    particle.style.left = x + 'px';
                    particle.style.top = y + 'px';
                }, 10);
                
                setTimeout(() => {
                    particle.remove();
                }, 3000);
            }
        }

        // Add hover sound effect simulation
        document.querySelectorAll('.tech-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.filter = 'brightness(1.2)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.filter = 'brightness(1)';
            });
        });

        // Initialize floating elements
        createFloatingElements();

        // Add scroll animations
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const elements = document.querySelectorAll('.stat-card, .tech-item, .about-text');
            
            elements.forEach((element, index) => {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    </script>
</body>
</html>
