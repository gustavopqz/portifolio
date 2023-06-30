function changeToEnglish(){
    const header = document.querySelectorAll('nav ul li a')
    const greeting = document.querySelector('#greeting .left-side').children
    const about_me =  document.querySelector('#about_me .right-side').children
    const enterprises = document.querySelector('#enterprises .presentation h2')
    const knowledge = document.querySelector('#knowledge .top-side h2')
    const myBusiness = document.querySelector('#myBusiness .right-side h2')
    const services = document.querySelectorAll('.service')
    const projects = document.querySelector('#projects .top-side')
    const projectsPresentations = document.querySelectorAll('#myProjects .presentation')
    const descriptionnLeft = document.querySelectorAll('.description-left')
    const descriptionnRight = document.querySelectorAll('.description-right')
    const contacts = document.querySelector('#contacts .top-side')
    const footer = document.querySelector('footer')
    // Header
    header[0].textContent = 'About me'
    header[1].textContent = 'Clients'
    header[2].textContent = 'Knowledge'
    header[3].textContent = 'Automatize!'
    header[4].textContent = 'Projects'
    header[5].textContent = 'Contacts'

    // Greeting
    greeting[0].textContent = "Hi, my name's"
    greeting[2].textContent = 'Fullstack developer and microentrepreneur'

    // About me
    about_me[0].outerHTML = '<h2>About <b class="blue">me</b></h2>'
    about_me[1].outerHTML = '<p><b>Gustavo Pasqua de Queiroz</b>, was born in 1999, in the programming world since 2017!</p>'
    about_me[2].outerHTML = '<p>Currently hired by <a href="https://gruponobre.edu.br/" target="_blank"><b>Grupo Nobre at Feira de Santana</b></a> acting as developer in colleges <a href="https://unef.edu.br/" target="_blank"><b>UNEF</b></a> and <a href="https://unifan.net.br/" target="_blank"><b>UNIFAN</b></a>, in schools <a href="https://www.colegionobre.com.br/" target="_blank"><b>Nobre</b></a> and <a href="https://feiradesantana.maplebear.com.br/pt/?utm_source=google&utm_medium=cpc&utm_campaign=regional_seach_escolas_nordeste&utm_content=search_fev2023&gad=1&gclid=CjwKCAjwpayjBhAnEiwA-7ena7Q4piRnL9PS4FUrFYRt2VTq-pYsCnkh19MRTTG8DHwKD1F2PZ5FshoCR3oQAvD_BwE" target="_blank"><b>Maple Bear</b></a>, in atletic association of <a href="https://www.bahiadefeira.com.br/" target="_blank"><b>Bahia de Feira</b></a> and in medic group <a href="https://www.uniaomedica.com.br/" target="_blank"><b>União Médica.</b></a></p>'
    about_me[3].outerHTML = '<p>Individual microentrepreneur by <b>Automatize!</b> - Website design and automation softwares.</p>'
    about_me[4].outerHTML = '<p>Self-taught bilingual.</p>'

    enterprises.outerHTML = '<h2>Meet <b class="blue">enterprises</b> <br>where I am acting for!</h2>'

    knowledge.outerHTML = '<h2>My <b class="blue">knowledge</b></h2>'

    myBusiness.outerHTML = '<h2>My <b class="blue">services</b></h2>'
    services[0].children[1].innerText = 'Websites development'
    services[0].children[2].outerHTML = '<p>Show your enterprise, your business, your application or any other project using an <b class="blue">website!</b></p>'
    services[1].children[1].innerText = 'Automatation softwares'
    services[1].children[2].outerHTML = '<p>You can use automation softwares to <b class="blue">make you free of worksheets</b>, start to use <b class="blue">databases</b>.<br>Better organization, easy data management and be able to generate specifics reports!</p>'
    services[2].children[1].innerText = 'Interfaces'
    services[2].children[2].outerHTML = '<p>Make use of de <b class="blue">dashboards</b> for real time data management of your business!<br>Bar charts, pie charts and more will now make your decision making easier.</p>'
    services[3].children[1].innerText = 'Computer tutoring'
    services[3].children[2].outerHTML = '<p>As a basic computer teacher of <a href="https://www.instagram.com/p/CpxZYUbOZWh/" target="_blank" id="linkInstituto"><b class="blue">Instituto Nobre</b></a>, I am available to teach anyone who is interested!</p>'
    projects.outerHTML = '<h2 class="top-side">See some of <b class="blue">my projects!</b></h2>'
    projectsPresentations[0].children[1].textContent = 'Room map'
    descriptionnLeft[0].children[0].textContent = 'AUTOMATION'
    descriptionnLeft[0].children[1].textContent = 'Software developed with the aim of extinguishing the use of spreadsheets.'
    descriptionnLeft[0].children[2].textContent = 'Students can view information about their courses focusing on the location and time they will take place!'
    descriptionnLeft[0].children[3].textContent = 'Customer page logically and physically separated from the admin page.'
    descriptionnLeft[0].children[4].textContent = 'Token validation for registration/changes of disciplines by administrators.'
    descriptionnLeft[0].children[5].outerHTML = `<p>Deploy: <br><a class="instagramPost" href="https://mapa.unef.edu.br" target="_blank">Link to this project!</a></p>`
    descriptionnRight[0].children[0].textContent = 'COMPLETE SOFTWARE'
    descriptionnRight[0].children[1].textContent = 'Software developed with various objectives implemented.'
    descriptionnRight[0].children[2].textContent = '1. Redirection between Grupo Nobre pages;'
    descriptionnRight[0].children[3].textContent = '2. Hosting of project documentations;'
    descriptionnRight[0].children[4].textContent = '3. Management of project administrators;'
    projectsPresentations[2].children[1].textContent = 'Student portal tutorial'
    descriptionnLeft[1].children[0].textContent = 'Web page'
    descriptionnLeft[1].children[1].textContent = `Page with the aim of allowing Colégio Nobre students to view tutorials about the student's portal.`
    descriptionnLeft[1].children[2].outerHTML = `<p>Deploy: <br><a class="instagramPost" href="https://colegionobre.com.br/pages/tutorial-portal-do-aluno" target="_blank">Link to this project!</a></p>`
    projectsPresentations[3].children[1].textContent = 'Computer teacher'
    descriptionnRight[1].children[1].textContent = `NOBRE INSTITUTE'S PROJECT`
    descriptionnRight[1].children[0].textContent = 'Software developed with various objectives implemented.'
    descriptionnRight[1].children[1].textContent = 'Basic computer classes'
    descriptionnRight[1].children[2].textContent = '40 hour certificate'
    descriptionnRight[1].children[3].outerHTML = '<p><a class="instagramPost" href="https://www.instagram.com/p/CpxZYUbOZWh/" target="_blank">Link to this project!</a></p>'
    contacts.outerHTML = '<h2 class="top-side"><b class="blue">Contact</b> us</h2>'
    footer.outerHTML = '<footer>&copy; Copyright 2023 Automatize. All rights reserved.</footer>'
}

function changeToPortuguese(){
    const body = document.querySelector('body')
    body.innerHTML = 
    `<header id="header">
    <h2>&lt; Gustavo Pasqua /&gt;</h2>
    <nav>
        <ul>
            <li><a href="#about_me">Sobre mim</a></li>
            <li><a href="#enterprises">Clientes</a></li>
            <li><a href="#knowledge">Conhecimentos</a></li>
            <li><a href="#myBusiness">Minha empresa</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contacts">Contatos</a></li>
        </ul>
    </nav>
    <div id="flags">
        <img class="flag" src="./images/br_flag.png" alt="portuguese" onclick="changeToPortuguese()">
        <img class="flag" src="./images/us_flag.png" alt="english" onclick="changeToEnglish()">
    </div>
</header>

<section id="greeting">
    <article class="left-side">
        <h3>Olá, meu nome é</h3>
        <h1>Gustavo <p>Pasqua</p></h1>
        <h2>Desenvolvedor Fullstack e Microempreendedor</h2>
        <div id="greeting_buttons">
            <a id="curriculum" href="./CV - GUSTAVO PASQUA.pdf" target="_blank">Currículo</a>
            <a id="contact" href="#contacts">Entre em contato</a>
        </div>
    </article>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_iorpbol0.json"  background="transparent"  speed="1"  style="width: 500px; height: 500px;"  loop autoplay></lottie-player>
</section>

<section id="about_me">
    <div id="dev_image">
        <img id="pasqua" src="./images/gustavo_pasqua.png" alt="pasqua">
    </div>
    <article class="right-side">
        <h2>Sobre <b class="blue">mim</b></h2>
        <p><b>Gustavo Pasqua de Queiroz</b>, nascido em 1999, no mundo da programação desde 2017!</p>
        <p>Atualmente contratado pelo <a href="https://gruponobre.edu.br/" target="_blank"><b>Grupo Nobre de Feira de Santana</b></a> agindo como desenvolvedor nas faculdades <a href="https://unef.edu.br/" target="_blank"><b>UNEF</b></a> e <a href="https://unifan.net.br/" target="_blank"><b>UNIFAN</b></a>, nos colégios <a href="https://www.colegionobre.com.br/" target="_blank"><b>Nobre</b></a> e <a href="https://feiradesantana.maplebear.com.br/pt/?utm_source=google&utm_medium=cpc&utm_campaign=regional_seach_escolas_nordeste&utm_content=search_fev2023&gad=1&gclid=CjwKCAjwpayjBhAnEiwA-7ena7Q4piRnL9PS4FUrFYRt2VTq-pYsCnkh19MRTTG8DHwKD1F2PZ5FshoCR3oQAvD_BwE" target="_blank"><b>Maple Bear</b></a>, na associação atlética do <a href="https://www.bahiadefeira.com.br/" target="_blank"><b>Bahia de Feira</b></a> e no grupo médico <a href="https://www.uniaomedica.com.br/" target="_blank"><b>União Médica.</b></a></p>
        <p>Microempreendedor individual pela <b>Automatize!</b> - Criação de web sites e softwares de automação.</p>
        <p>Bilíngue autodidata.</p>
    </article>
</section>

<section id="enterprises">
    <article class="presentation">
        <h2>Conheça as <b class="blue">empresas</b> <br>onde atuo!</h2>
    </article>

    <div id="with_buttons">
        <img id="arrow_left" src="./images/before.png" alt="arrow_left">
        <div id="carousel">
            <div id="carousel_slide">
                <a href="https://feiradesantana.maplebear.com.br/pt/?utm_source=google&utm_medium=cpc&utm_campaign=regional_seach_escolas_nordeste&utm_content=search_fev2023&gad=1&gclid=CjwKCAjwpayjBhAnEiwA-7ena7Q4piRnL9PS4FUrFYRt2VTq-pYsCnkh19MRTTG8DHwKD1F2PZ5FshoCR3oQAvD_BwE" target="_blank"><img src="./images/maple_bear.jpg" alt="maple_bear" width="370px" height="100%"></a>
                <a href="https://unef.edu.br/" target="_blank"><img src="./images/unef.png" alt="unef" id="last_clone" height="100%"></a>
                <a href="https://unifan.net.br/" target="_blank"><img src="./images/unifan.png" alt="unifan" height="100%"></a>
                <a href="https://www.bahiadefeira.com.br/" target="_blank"><img src="./images/tremendao.jpg" alt="bahia_de_feira" width="370px" height="100%"></a>
                <a href="https://www.uniaomedica.com.br/" target="_blank"><img src="./images/uniao_med.jpg" alt="uniao_med" width="370px" height="100%"></a>
                <a href="https://www.colegionobre.com.br/" target="_blank"><img src="./images/colegio_nobre.png" alt="colegio_nobre" width="370px" height="100%"></a>
                <a href="https://feiradesantana.maplebear.com.br/pt/?utm_source=google&utm_medium=cpc&utm_campaign=regional_seach_escolas_nordeste&utm_content=search_fev2023&gad=1&gclid=CjwKCAjwpayjBhAnEiwA-7ena7Q4piRnL9PS4FUrFYRt2VTq-pYsCnkh19MRTTG8DHwKD1F2PZ5FshoCR3oQAvD_BwE" target="_blank"><img src="./images/maple_bear.jpg" alt="maple_bear" width="370px" height="100%"></a>
                <a href="https://unef.edu.br/" target="_blank"><img src="./images/unef.png" alt="unef2" id="first_clone" height="100%"></a>
                <a href="https://unifan.net.br/" target="_blank"><img src="./images/unifan.png" alt="unifan" height="100%"></a>
            </div>
        </div> 
        <img id="arrow_right" src="./images/next.png" alt="arrow_right">
        <div id="phoneArrows">
            <img id="arrow_left_mobile" src="./images/before.png" alt="arrow_left">
            <img id="arrow_right_mobile" src="./images/next.png" alt="arrow_right">
        </div>
    </div>
</section>

<section id="knowledge">
    <div class="top-side">
        <h2>Meus <b class="blue">conhecimentos</b></h2>
    </div>

    <div class="division">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="line"></div>
    </div>

    <div class="bottom-side">
        <div id="html" class="knowledgeBox">
            <img src="./images/html.png" alt="html">
            <h3>HTML</h3>
        </div>
        <div id="css" class="knowledgeBox">
            <img src="./images/css.png" alt="css">
            <h3>CSS</h3>
        </div>
        <div id="javascript" class="knowledgeBox">
            <img src="./images/black_js.png" alt="javascript">
            <h3>JAVASCRIPT</h3>
        </div>
        <div id="node" class="knowledgeBox">
            <img src="./images/node.png" alt="node">
            <h3>NODEJS</h3>
        </div>
        <div id="python" class="knowledgeBox">
            <img src="./images/python.png" alt="python">
            <h3>PYTHON</h3>
        </div>
        <div id="sql" class="knowledgeBox">
            <img src="./images/sql.png" alt="sql">
            <h3>SQL</h3>
        </div>
        <div id="mongodb" class="knowledgeBox">
            <img src="./images/mongodb.png" alt="mongodb">
            <h3>MONGODB</h3>
        </div>
        <div id="wordpress" class="knowledgeBox">
            <img src="./images/wordpress.png" alt="wordpress">
            <h3>WORDPRESS</h3>
        </div>
        <div id="git" class="knowledgeBox">
            <img src="./images/git.png" alt="git">
            <h3>GIT</h3>
        </div>
        <div id="github" class="knowledgeBox">
            <img src="./images/github.png" alt="github">
            <h3>GITHUB</h3>
        </div>
    </div>
</section>

<section id="myBusiness">
    <div class="right-side">
        <h2>Meus <b class="blue">serviços</b></h2>
        <ul id="services">
            <li class="service">
                <img src="./images/code.png" alt="Sites">
                <h3>Criação de sites</h3>
                <p>Apresente sua empresa, seu negócio, sua aplicação ou qualquer outro projeto seu por meio de um <b class="blue">website!</b></p>
            </li>
            <li class="service">
                <img src="./images/engine.png" alt="Automações">
                <h3>Automações</h3>
                <p>Utilize software de automação e <b class="blue">se livre de planilhas excel</b>, passe a utilizar <b class="blue">bancos de dados</b>.<br>Maior organização, facilidade no gerenciamento de informações e capacidade de gerar relatórios específicos!</p>
            </li>
            <li class="service">
                <img src="./images/dashboard.png" alt="Dashboards">
                <h3>Interfaces</h3>
                <p>Faça utilização de <b class="blue">dashboards pré-montadas</b> para o gerenciamento em tempo real de informações do seu negócio!<br>Gráficos em barra, gráficos pizza e outros agora facilitarão sua tomada de decisão.</p>
            </li>
            <li class="service">
                <img src="./images/teacher.png" alt="Tutoria">
                <h3>Tutoria de informática</h3>
                <p>Como professor de informática básica do <a href="https://www.instagram.com/p/CpxZYUbOZWh/" target="_blank" id="linkInstituto"><b class="blue">Instituto Nobre</b></a>, me disponibilizo a ensinar quem tiver interesse!</p>
            </li>
        </ul>
    </div>
    <div class="left-side">
        <img id="automatize_logo" src="./images/automatize.png" alt="automatize">
    </div>
</section>

<section id="projects">
    <h2 class="top-side">Veja um pouco dos <b class="blue">meus projetos!</b></h2>

    <div class="division">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="line"></div>
    </div>

    <div id="myProjects">
        <div class="project-left">
            <div class="presentation">
                <img src="./images/room_map.jpg" alt="Mapa de salas">
                <h3>Mapa de salas</h3>
            </div>
            <div class="description-left">
                <h3>AUTOMAÇÃO</h3>
                <p>Software desenvolvido com o objetivo de extinguir o uso de planilha.</p>
                <p>Alunos conseguem visualizar informações sobre suas disciplinas com foco na localização e horário em que acontecerá!</p>
                <p>Página cliente separada logica e fisicamente da página de administrador.</p>
                <p>Validação de token para cadastro/alterações de disciplinas por administradores.</p>
                <p>Deploy: <br><a class="instagramPost" href="https://mapa.unef.edu.br" target="_blank">Link mapa de salas!</a></p>
            </div>
        </div>
        <div class="project-right">
            <div class="description-right">
                <h3>SOFTWARE COMPLETO</h3>
                <p>Software desenvolvido com vários objetivos implementados.</p>
                <p>1. Redirecionamento entre páginas Grupo Nobre;</p>
                <p>2. Hospedagem de documentação de projetos;</p>
                <p>3. Gerenciamento de administradores dos projetos;</p>
            </div>
            <div class="presentation">
                <img src="./images/grupo_nobre_app.png" alt="Grupo Nobre app">
                <h3>Grupo Nobre App</h3>
            </div>
        </div>
        <div class="project-left">
            <div class="presentation">
                <img src="./images/tutorial_portais.png" alt="Tutorial portal">
                <h3>Tutorial portal do aluno</h3>
            </div>
            <div class="description-left">
                <h3>PÁGINA WEB</h3>
                <p>Página com objetivo de que os alunos do Colégio Nobre possam visualizar tutoriais sobre o portal do aluno.</p>
                <p>Deploy: <br><a class="instagramPost" href="https://colegionobre.com.br/pages/tutorial-portal-do-aluno" target="_blank">Link tutoriais portal do aluno!</a></p>
            </div>
        </div>
        <div class="project-right">
            <div class="description-right">
                <h3>PROJETO INSTITUTO NOBRE</h3>
                <p>Aula de informática</p>
                <p>Certificado de 40 horas</p>
                <p><a class="instagramPost" href="https://www.instagram.com/p/CpxZYUbOZWh/" target="_blank">Link da postagem no instagram!</a></p>
            </div>
            <div class="presentation">
                <img src="./images/class.jpg" alt="Aula instituto Nobre">
                <h3>Tutor de informática</h3>
            </div>
        </div>
    </div>
</section>

<section id="contacts">
    <h2 class="top-side">Entre em <b class="blue">contato!</b></h2>

    <div class="division">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="line"></div>
    </div>

    <div id="social-medias">
        <ul id="media-images">
            <li><a href="https://wa.me/+5575991290503" target="_blank"><img src="./images/whatsapp.png" alt="Whatsapp"></a></li>
            <li><a href="https://www.instagram.com/gustavopqz/" target="_blank"><img src="./images/instagram.png" alt="Instagram"></a></li>
            <li><a href="https://twitter.com/pasqua_gustavo" target="_blank"><img src="./images/twitter.png" alt="Twitter"></a></li>
            <li><a href="https://www.linkedin.com/in/gustavo-pasqua-079ba823b/" target="_blank"><img src="./images/linkedin.png" alt="Linkedin"></a></li>
            <li><a href="https://github.com/gustavopqz" target="_blank"><img src="./images/github-link.png" alt="Github"></a></li>
        </ul>
    </div>
</section>

<footer>&copy; Copyright 2023 Automatize. Todos os direitos reservados.</footer>

<a href="#header"><img id="to_top" src="./images/to_top.png" alt="Voltar ao topo"></a>`
}