<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Priya Kumari - Full Stack Developer 🦋</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            overflow-x: hidden;
            min-height: 100vh;
        }

        .stars {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            animation: twinkle 2s infinite alternate;
        }

        @keyframes twinkle {
            0% { opacity: 0.3; }
            100% { opacity: 1; }
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .hero-section {
            text-align: center;
            padding: 60px 0;
            position: relative;
        }

        .profile-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 30px;
            padding: 40px;
            margin: 20px auto;
            max-width: 800px;
            transform: perspective(1000px) rotateX(5deg);
            transition: all 0.3s ease;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .profile-card:hover {
            transform: perspective(1000px) rotateX(0deg) translateY(-10px);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }

        .typing-effect {
            font-size: 2.5rem;
            font-weight: bold;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
            animation: gradient-shift 3s ease-in-out infinite;
        }

        @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .profile-image {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            margin: 20px auto;
            background: linear-gradient(45deg, #ff9a9e, #fecfef, #fecfef);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 5rem;
            transform: perspective(500px) rotateY(10deg);
            transition: transform 0.3s ease;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .profile-image:hover {
            transform: perspective(500px) rotateY(-10deg) scale(1.05);
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 40px 0;
        }

        .stat-card {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(15px);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            transform: perspective(800px) rotateX(15deg);
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .stat-card:hover {
            transform: perspective(800px) rotateX(0deg) translateY(-5px);
            background: rgba(255, 255, 255, 0.2);
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: bold;
            color: #4ecdc4;
            display: block;
            margin-bottom: 10px;
        }

        .about-section {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 25px;
            padding: 40px;
            margin: 40px 0;
            transform: perspective(1000px) rotateY(-5deg);
            transition: all 0.3s ease;
        }

        .about-section:hover {
            transform: perspective(1000px) rotateY(0deg);
        }

        .tech-stack {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 40px 0;
        }

        .tech-category {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 25px;
            text-align: center;
            transform: perspective(600px) rotateX(10deg) rotateY(5deg);
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .tech-category:hover {
            transform: perspective(600px) rotateX(0deg) rotateY(0deg) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .tech-category h3 {
            font-size: 1.4rem;
            margin-bottom: 15px;
            color: #4ecdc4;
        }

        .tech-icons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
        }

        .tech-icon {
            width: 50px;
            height: 50px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            transition: all 0.3s ease;
            transform: perspective(300px) rotateX(20deg);
        }

        .tech-icon:hover {
            transform: perspective(300px) rotateX(0deg) scale(1.2);
        }

        .html { background: linear-gradient(135deg, #e34c26, #f06529); }
        .css { background: linear-gradient(135deg, #1572b6, #33a9dc); }
        .js { background: linear-gradient(135deg, #f0db4f, #f7df1e); }
        .ts { background: linear-gradient(135deg, #007acc, #0078d4); }
        .react { background: linear-gradient(135deg, #61dafb, #21d4fd); }
        .next { background: linear-gradient(135deg, #000000, #434343); }
        .php { background: linear-gradient(135deg, #777bb4, #8892bf); }
        .laravel { background: linear-gradient(135deg, #ff2d20, #ff5722); }
        .node { background: linear-gradient(135deg, #68a063, #8bc34a); }
        .mysql { background: linear-gradient(135deg, #00758f, #4479a1); }

        .achievements {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin: 30px 0;
        }

        .achievement {
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 15px;
            padding: 20px;
            text-align: center;
            transform: perspective(400px) rotateX(25deg);
            transition: all 0.3s ease;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .achievement:hover {
            transform: perspective(400px) rotateX(0deg) translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }

        .trophy {
            font-size: 2rem;
            margin-bottom: 10px;
            display: block;
        }

        .contact-section {
            text-align: center;
            margin: 60px 0;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 30px 0;
        }

        .social-link {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            text-decoration: none;
            color: white;
            transition: all 0.3s ease;
            transform: perspective(300px) rotateX(20deg);
        }

        .social-link:hover {
            transform: perspective(300px) rotateX(0deg) scale(1.2) translateY(-5px);
        }

        .github { background: linear-gradient(135deg, #333, #24292e); }
        .linkedin { background: linear-gradient(135deg, #0077b5, #0e76a8); }
        .email { background: linear-gradient(135deg, #ea4335, #fbbc05); }
        .portfolio { background: linear-gradient(135deg, #667eea, #764ba2); }

        .floating-elements {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: -1;
        }

        .floating-shape {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }

        .quote {
            font-style: italic;
            font-size: 1.2rem;
            margin: 30px 0;
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            border-left: 4px solid #4ecdc4;
        }

        @media (max-width: 768px) {
            .typing-effect {
                font-size: 1.8rem;
            }
            
            .stats-grid {
                grid-template-columns: 1fr;
            }
            
            .tech-stack {
                grid-template-columns: 1fr;
            }
            
            .achievements {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>
<body>
    <div class="stars" id="stars"></div>
    <div class="floating-elements" id="floatingElements"></div>

    <div class="container">
        <div class="hero-section">
            <div class="profile-card">
                <div class="typing-effect">🦋 Hi there, I'm Priya!</div>
                <div class="profile-image">👩‍💻</div>
                <h2>Full Stack Developer 🚀</h2>
                <p style="font-size: 1.2rem; margin: 20px 0;">Laravel | React | TypeScript</p>
                <p style="font-size: 1.1rem; color: #4ecdc4;">Building Beautiful Digital Experiences ✨</p>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <span class="stat-number">500+</span>
                <div>Commits This Year</div>
            </div>
            <div class="stat-card">
                <span class="stat-number">25+</span>
                <div>Projects Completed</div>
            </div>
            <div class="stat-card">
                <span class="stat-number">10+</span>
                <div>Technologies Mastered</div>
            </div>
            <div class="stat-card">
                <span class="stat-number">∞</span>
                <div>Cups of Chai ☕</div>
            </div>
        </div>

        <div class="about-section">
            <h2 style="color: #4ecdc4; margin-bottom: 20px;">🌟 About Me</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: center;">
                <div>
                    <p style="line-height: 1.8; font-size: 1.1rem;">
                        🚀 Currently on a Journey<br>
                        🌱 Learning: Laravel as backend powerhouse<br>
                        🔭 Building: Full-stack applications with modern tech<br>
                        💡 Passion: Clean code architecture & beautiful UIs<br>
                        ☕ Fuel: Chai & curiosity-driven development<br>
                        🎯 Let's Connect & Collaborate!
                    </p>
                    <div style="margin-top: 20px;">
                        <strong>💬 Ask me about:</strong> Laravel, React, JavaScript, TypeScript<br>
                        <strong>📧 Reach me:</strong> mishrapriya15987@gmail.com
                    </div>
                </div>
                <div style="text-align: center;">
                    <div style="width: 250px; height: 200px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 4rem; margin: 0 auto;">
                        🚀
                    </div>
                </div>
            </div>
        </div>

        <div style="text-align: center; margin: 40px 0;">
            <h2 style="color: #4ecdc4; margin-bottom: 30px;">🛠️ Tech Arsenal</h2>
            <div class="tech-stack">
                <div class="tech-category">
                    <h3>Frontend Magic ✨</h3>
                    <div class="tech-icons">
                        <div class="tech-icon html" title="HTML5">🌐</div>
                        <div class="tech-icon css" title="CSS3">🎨</div>
                        <div class="tech-icon js" title="JavaScript">⚡</div>
                        <div class="tech-icon ts" title="TypeScript">📘</div>
                        <div class="tech-icon react" title="React">⚛️</div>
                        <div class="tech-icon next" title="Next.js">▲</div>
                    </div>
                </div>
                <div class="tech-category">
                    <h3>Backend Power ⚡</h3>
                    <div class="tech-icons">
                        <div class="tech-icon php" title="PHP">🐘</div>
                        <div class="tech-icon laravel" title="Laravel">🏛️</div>
                        <div class="tech-icon node" title="Node.js">🚀</div>
                        <div class="tech-icon mysql" title="MySQL">🗄️</div>
                    </div>
                </div>
                <div class="tech-category">
                    <h3>Tools & Platforms 🔧</h3>
                    <div class="tech-icons">
                        <div class="tech-icon" style="background: linear-gradient(135deg, #f05032, #f14e32);" title="Git">🌿</div>
                        <div class="tech-icon" style="background: linear-gradient(135deg, #181717, #24292e);" title="GitHub">🐙</div>
                        <div class="tech-icon" style="background: linear-gradient(135deg, #007acc, #0078d4);" title="VS Code">💻</div>
                        <div class="tech-icon" style="background: linear-gradient(135deg, #f24e1e, #ff7262);" title="Figma">🎨</div>
                    </div>
                </div>
            </div>
        </div>

        <div style="text-align: center; margin: 40px 0;">
            <h2 style="color: #4ecdc4; margin-bottom: 20px;">🏆 Achievements & Trophies</h2>
            <div class="achievements">
                <div class="achievement">
                    <span class="trophy">🏆</span>
                    <div>Code Master</div>
                </div>
                <div class="achievement">
                    <span class="trophy">⭐</span>
                    <div>Star Contributor</div>
                </div>
                <div class="achievement">
                    <span class="trophy">🚀</span>
                    <div>Innovation Award</div>
                </div>
                <div class="achievement">
                    <span class="trophy">💎</span>
                    <div>Quality Code</div>
                </div>
                <div class="achievement">
                    <span class="trophy">🔥</span>
                    <div>Streak Master</div>
                </div>
                <div class="achievement">
                    <span class="trophy">🌟</span>
                    <div>Team Player</div>
                </div>
            </div>
        </div>

        <div class="contact-section">
            <h2 style="color: #4ecdc4; margin-bottom: 20px;">🤝 Let's Connect & Build Something Amazing!</h2>
            <div class="social-links">
                <a href="https://github.com/priyakumari1209" class="social-link github" title="GitHub">🐙</a>
                <a href="https://linkedin.com/in/priyakumari1209" class="social-link linkedin" title="LinkedIn">💼</a>
                <a href="mailto:mishrapriya15987@gmail.com" class="social-link email" title="Email">📧</a>
                <a href="#portfolio" class="social-link portfolio" title="Portfolio">🌐</a>
            </div>
            
            <div class="quote">
                💫 "Chai in my cup, clean code on my screen — building thoughtful, beautiful components every day" ✨<br>
                🦋 From cocoon to butterfly — transforming ideas into digital reality
            </div>
        </div>
    </div>

    <script>
        // Create floating stars
        function createStars() {
            const starsContainer = document.getElementById('stars');
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 2 + 's';
                starsContainer.appendChild(star);
            }
        }

        // Create floating shapes
        function createFloatingElements() {
            const container = document.getElementById('floatingElements');
            for (let i = 0; i < 20; i++) {
                const shape = document.createElement('div');
                shape.className = 'floating-shape';
                shape.style.width = Math.random() * 100 + 50 + 'px';
                shape.style.height = shape.style.width;
                shape.style.left = Math.random() * 100 + '%';
                shape.style.top = Math.random() * 100 + '%';
                shape.style.animationDelay = Math.random() * 6 + 's';
                shape.style.animationDuration = (Math.random() * 4 + 4) + 's';
                container.appendChild(shape);
            }
        }

        // Initialize
        createStars();
        createFloatingElements();

        // Add parallax effect on mouse move
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.profile-card, .stat-card, .tech-category');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            cards.forEach((card, index) => {
                const speed = (index % 3 + 1) * 0.5;
                const rotateX = (y - 0.5) * speed;
                const rotateY = (x - 0.5) * speed;
                card.style.transform += ` rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
        });

        // Add scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.stat-card, .tech-category, .achievement').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    </script>
</body>
</html>
