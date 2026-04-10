/**
 * 坤瑞橡胶官网 - 多语言切换模块
 * 支持中文(zh)、英文(en)、法文(fr)
 * 通过URL参数和Cookie记录语言设置
 */

// 语言包配置
const i18n = {
    // 中文
    zh: {
        // 页面标题
        'title': '坤瑞橡胶',
        'about.title': '坤瑞橡胶 - 关于我们',
        'products.title': '坤瑞橡胶 - 产品中心',
        'news.title': '坤瑞橡胶 - 新闻资讯',
        'contact.title': '坤瑞橡胶 - 联系我们',
        
        // 导航栏
        'nav.home': '首页',
        'nav.about.main': '关于我们',
        'nav.about.companyProfile': '公司简介',
        'nav.about.developmentHistory': '发展历程',
        'nav.about.companyAnnouncements': '公司公告',
        'nav.about.technologicalInnovation': '科技创新',
        'nav.about.cooperationPartners': '合作单位',
        'nav.products.main': '坤瑞产品',
        'nav.products.productList': '产品列表',
        'nav.products.afterSalesSupport': '售后保障',
        'nav.products.productManualDownload': '产品手册下载',
        'nav.services.main': '坤瑞服务',
        'nav.services.caseClassification': '案例分类',
        'nav.services.customerReviews': '客户评价',
        'nav.services.businessCustomization': '业务定制',
        'nav.news.main': '新闻资讯',
        'nav.news.companyNews': '公司新闻',
        'nav.news.videoCenter': '视频中心',
        'nav.join.main': '加入坤瑞',
        'nav.join.recruitmentInformation': '招聘信息',
        'nav.join.talentPolicy': '人才政策',
        'nav.contact': '联系我们',
        
        // 轮播图
        'carousel.slide1.title': '绿色创新，引领未来',
        'carousel.slide1.description': '致力于可持续发展的企业解决方案',
        'carousel.slide1.button': '了解更多',
        'carousel.slide2.title': '科技创新，绿色发展',
        'carousel.slide2.description': '打造环保科技的新篇章',
        'carousel.slide2.button': '查看项目',
        'carousel.slide3.title': '专业团队，卓越服务',
        'carousel.slide3.description': '为客户提供全方位的绿色解决方案',
        'carousel.slide3.button': '关于我们',

        // 首页内容
        'home.aboutTitle': '关于坤瑞橡胶',
        'home.aboutText1': '坤瑞橡胶有限公司是一家专注于高性能橡胶制品研发、生产和销售的高新技术企业。公司总部位于浙江省杭州市，在湛江设有坤瑞特种天然橡胶研发与产业化中心，拥有先进的生产设备和专业的技术团队。',
        'home.aboutText2': '我们致力于为客户提供优质的橡胶解决方案，产品广泛应用于汽车、机械、电子、建筑等多个领域。',
        'home.learnMore': '了解更多',

        // 首页核心产品
        'home.productsTitle': '核心产品',
        'home.product1.title': '工业橡胶密封件',
        'home.product1.desc': '耐高温、耐腐蚀，广泛应用于机械设备',
        'home.product2.title': '汽车橡胶配件',
        'home.product2.desc': '减震降噪，符合国际标准，品质可靠',
        'home.product3.title': '橡胶减震垫',
        'home.product3.desc': '高效减震降噪，保护设备延长寿命',
        'home.product4.title': '特种橡胶定制',
        'home.product4.desc': '根据客户需求定制，满足特殊工况',
        'home.viewAllProducts': '查看全部产品',

        // 首页统计
        'home.stat1': '年行业经验',
        'home.stat2': '合作客户',
        'home.stat3': '产品种类',
        'home.stat4': '生产基地',

        // 首页联系我们
        'home.contactTitle': '联系我们',
        'home.contactDesc': '期待与您的合作，欢迎来电咨询或莅临参观',
        'home.addressTitle': '公司地址',
        'home.contactUs': '在线咨询',

        // 首页资讯
        'news.sectionTitle': '最新资讯',
        'news.card1.title': '坤瑞橡胶荣获绿色创新奖',
        'news.card1.description': '我们的可持续发展项目获得了行业认可，成为绿色创新的典范。',
        'news.card1.link': '阅读更多',
        'news.card2.title': '新可再生能源项目正式启动',
        'news.card2.description': '我们的最新项目将为社区提供清洁、可持续的能源解决方案。',
        'news.card2.link': '阅读更多',
        'news.card3.title': '与国际环保组织建立战略合作',
        'news.card3.description': '我们将与全球领先的环保组织共同推进可持续发展目标。',
        'news.card3.link': '阅读更多',
        
        // 关于我们页面
        'about.pageTitle': '关于坤瑞橡胶',
        'about.pageSubtitle': '以大地之德培育工业文明，用橡木之仁创造材料价值',
        'about.introTitle': '公司简介',
        'about.introText1': '坤瑞橡胶有限公司是一家专注于高性能橡胶制品研发、生产和销售的高新技术企业。公司总部位于浙江省杭州市，拥有先进的生产设备和专业的技术团队。',
        'about.introText2': '我们致力于为客户提供优质的橡胶解决方案，产品广泛应用于汽车、机械、电子、建筑等多个领域。凭借卓越的产品质量和完善的服务体系，坤瑞橡胶已成为众多知名企业的长期合作伙伴。',
        'about.introText3': '公司秉承"诚信、创新、卓越、共赢"的经营理念，不断追求技术创新和产品升级，为客户创造更大价值。',
        'about.visionTitle': '企业愿景',
        'about.visionText': '成为行业领先的橡胶制品供应商，引领绿色可持续发展',
        'about.missionTitle': '企业使命',
        'about.missionText': '以创新技术为客户提供卓越品质的橡胶产品',
        'about.valuesTitle': '核心价值观',
        'about.valuesText': '诚信、创新、卓越、共赢',
        'about.hangzhouHQ': '坤瑞控股杭州总部',
        'about.zhanjiangCenter': '坤瑞特种天然橡胶研发与产业化中心（湛江）',
        'about.danzhouBase': '坤瑞儋州基地',
        'about.leadership': '领导关怀',
        
        // 产品页面
        'products.pageTitle': '坤瑞产品中心',
        'products.pageSubtitle': '高品质橡胶产品，满足您的各种需求',
        'products.item1.name': '工业橡胶密封件',
        'products.item1.title': '工业橡胶密封件',
        'products.item1.desc': '采用优质橡胶材料，具有优异的耐磨性和密封性能，广泛应用于机械设备。',
        'products.item1.feature1': '耐高温、耐腐蚀',
        'products.item1.feature2': '使用寿命长',
        'products.item1.feature3': '可定制各种规格',
        'products.item2.name': '汽车橡胶配件',
        'products.item2.title': '汽车橡胶配件',
        'products.item2.desc': '专为汽车行业设计，符合国际标准，品质可靠。',
        'products.item2.feature1': '减震降噪',
        'products.item2.feature2': '耐油耐老化',
        'products.item2.feature3': '通过IATF认证',
        'products.item3.name': '橡胶减震垫',
        'products.item3.title': '橡胶减震垫',
        'products.item3.desc': '高效减震降噪，保护设备，延长使用寿命。',
        'products.item3.feature1': '优异的弹性恢复性',
        'products.item3.feature2': '多种硬度可选',
        'products.item3.feature3': '安装简便',
        'products.item4.name': '橡胶管带制品',
        'products.item4.title': '橡胶管带制品',
        'products.item4.desc': '高压、耐磨、耐腐蚀，适用于各种输送场合。',
        'products.item4.feature1': '高压力承载能力',
        'products.item4.feature2': '抗拉伸、抗撕裂',
        'products.item4.feature3': '多种规格尺寸',
        'products.item5.name': '特种橡胶制品',
        'products.item5.title': '特种橡胶制品',
        'products.item5.desc': '根据客户需求定制，满足特殊工况要求。',
        'products.item5.feature1': '氟橡胶、硅橡胶等特种材料',
        'products.item5.feature2': '耐极端温度',
        'products.item5.feature3': '专业技术支持',
        'products.item6.name': '橡胶模具定制',
        'products.item6.title': '橡胶模具定制',
        'products.item6.desc': '提供从设计到生产的一站式服务。',
        'products.item6.feature1': '专业设计团队',
        'products.item6.feature2': '精密模具制造',
        'products.item6.feature3': '小批量试产支持',
        
        // 新闻页面
        'news.pageTitle': '新闻资讯',
        'news.pageSubtitle': '了解坤瑞橡胶的最新动态',
        'news.readMore': '阅读更多',
        'news.article1.title': '坤瑞橡胶荣获绿色创新奖',
        'news.article1.desc': '在2026年度绿色工业发展大会上，坤瑞橡胶凭借在环保橡胶材料研发方面的突出贡献，荣获"绿色创新奖"...',
        'news.article2.title': '新生产线正式投产',
        'news.article2.desc': '坤瑞橡胶新投资的智能化生产线正式投产，年产能提升50%，产品质量更加稳定可靠...',
        'news.article3.title': '与国际知名企业达成战略合作',
        'news.article3.desc': '坤瑞橡胶与多家国际知名汽车制造商签署战略合作协议，成为其长期橡胶配件供应商...',
        'news.article4.title': '2026年度供应商大会圆满召开',
        'news.article4.desc': '坤瑞橡胶2026年度供应商大会在杭州总部召开，来自全国各地的供应商代表齐聚一堂...',
        'news.article5.title': '新产品发布会成功举行',
        'news.article5.desc': '坤瑞橡胶正式发布新一代高性能氟橡胶系列产品，产品性能达到国际先进水平...',
        'news.article6.title': '通过ISO9001质量管理体系认证',
        'news.article6.desc': '坤瑞橡胶顺利通过ISO9001质量管理体系年度审核，质量管理水平持续提升...',
        
        // 联系页面
        'contact.pageTitle': '联系我们',
        'contact.pageSubtitle': '期待与您的合作，欢迎来电咨询',
        'contact.infoTitle': '联系方式',
        'contact.addressTitle': '公司地址',
        'contact.address': '中国浙江省杭州市钱塘区文泽路和达城1幢28层',
        'contact.phoneTitle': '联系电话',
        'contact.phone': '0571-86038706',
        'contact.emailTitle': '电子邮箱',
        'contact.email': 'service@kunrayrubber.com',
        'contact.worktimeTitle': '工作时间',
        'contact.worktime': '周一至周五 8:30 - 17:30\n周六 8:30 - 12:00',
        'contact.formTitle': '在线咨询',
        'contact.formName': '您的姓名',
        'contact.formEmail': '电子邮箱',
        'contact.formPhone': '联系电话',
        'contact.formMessage': '咨询内容',
        'contact.formSubmit': '提交咨询',
        'contact.mapTitle': '公司位置',
        'contact.mapPlaceholder': '地图加载中...（您可以在实际使用时嵌入百度地图或高德地图）',
        
        // 视频中心
        'video.pageTitle': '视频中心',
        'video.pageSubtitle': '了解坤瑞橡胶的企业动态与产品展示',
        'video.pageTitle': '视频中心',
        'video.pageSubtitle': '了解坤瑞橡胶的企业动态与产品展示',
        'video.item1.title': '坤瑞橡胶企业宣传片',
        'video.item1.desc': '全面了解坤瑞橡胶的发展历程、企业文化和核心产品',
        'video.item2.title': '研发中心参观',
        'video.item2.desc': '走进坤瑞特种天然橡胶研发与产业化中心',
        'video.item3.title': '产品生产工艺',
        'video.item3.desc': '展示坤瑞橡胶产品的生产流程和质量控制',

        // 页脚
        'footer.description': '以大地之德培育工业文明，用橡木之仁创造材料价值',
        'footer.quickLinks': '快速链接',
        'footer.contactUs': '联系我们',
        'footer.copyright': '© 2026 坤瑞橡胶. 保留所有权利.'
    },
    
    // 英文
    en: {
        'title': 'Kunray Rubber',
        'about.title': 'Kunray Rubber - About Us',
        'products.title': 'Kunray Rubber - Products',
        'news.title': 'Kunray Rubber - News',
        'contact.title': 'Kunray Rubber - Contact Us',
        
        'nav.home': 'Home',
        'nav.about.main': 'About Us',
        'nav.about.companyProfile': 'Company Profile',
        'nav.about.developmentHistory': 'History',
        'nav.about.companyAnnouncements': 'Announcements',
        'nav.about.technologicalInnovation': 'Innovation',
        'nav.about.cooperationPartners': 'Partners',
        'nav.products.main': 'Products',
        'nav.products.productList': 'Product List',
        'nav.products.afterSalesSupport': 'After-sales',
        'nav.products.productManualDownload': 'Manuals',
        'nav.services.main': 'Services',
        'nav.services.caseClassification': 'Cases',
        'nav.services.customerReviews': 'Reviews',
        'nav.services.businessCustomization': 'Customization',
        'nav.news.main': 'News',
        'nav.news.companyNews': 'Company News',
        'nav.news.videoCenter': 'Video Center',
        'nav.join.main': 'Join Us',
        'nav.join.recruitmentInformation': 'Careers',
        'nav.join.talentPolicy': 'Talent Policy',
        'nav.contact': 'Contact',
        
        'carousel.slide1.title': 'Green Innovation, Leading the Future',
        'carousel.slide1.description': 'Committed to sustainable enterprise solutions',
        'carousel.slide1.button': 'Learn More',
        'carousel.slide2.title': 'Technology Innovation, Green Development',
        'carousel.slide2.description': 'Creating a new chapter in environmental technology',
        'carousel.slide2.button': 'View Projects',
        'carousel.slide3.title': 'Professional Team, Excellent Service',
        'carousel.slide3.description': 'Providing comprehensive green solutions for clients',
        'carousel.slide3.button': 'About Us',

        // Home content
        'home.aboutTitle': 'About Kunray Rubber',
        'home.aboutText1': 'Kunray Rubber Co., Ltd. is a high-tech enterprise focusing on R&D, production and sales of high-performance rubber products. Headquartered in Hangzhou, Zhejiang Province, with a special natural rubber R&D center in Zhanjiang.',
        'home.aboutText2': 'We are committed to providing quality rubber solutions for automotive, machinery, electronics and construction industries.',
        'home.learnMore': 'Learn More',

        // Home products
        'home.productsTitle': 'Core Products',
        'home.product1.title': 'Industrial Seals',
        'home.product1.desc': 'High temperature & corrosion resistant for machinery',
        'home.product2.title': 'Auto Parts',
        'home.product2.desc': 'Shock absorption, meeting international standards',
        'home.product3.title': 'Rubber Pads',
        'home.product3.desc': 'Efficient damping, protecting equipment',
        'home.product4.title': 'Custom Solutions',
        'home.product4.desc': 'Tailored to meet special requirements',
        'home.viewAllProducts': 'View All Products',

        // Home stats
        'home.stat1': 'Years Experience',
        'home.stat2': 'Partner Clients',
        'home.stat3': 'Product Types',
        'home.stat4': 'Production Bases',

        // Home contact
        'home.contactTitle': 'Contact Us',
        'home.contactDesc': 'Looking forward to cooperating with you',
        'home.addressTitle': 'Address',
        'home.contactUs': 'Contact Online',

        'news.sectionTitle': 'Latest News',
        'news.card1.title': 'Kunray Rubber Wins Green Innovation Award',
        'news.card1.description': 'Our sustainable development project has gained industry recognition.',
        'news.card1.link': 'Read More',
        'news.card2.title': 'New Renewable Energy Project Launched',
        'news.card2.description': 'Our latest project will provide clean energy solutions.',
        'news.card2.link': 'Read More',
        'news.card3.title': 'Strategic Partnership with International Organizations',
        'news.card3.description': 'We will work with leading environmental organizations.',
        'news.card3.link': 'Read More',
        
        'about.pageTitle': 'About Kunray Rubber',
        'about.pageSubtitle': 'Cultivating industrial civilization with the virtue of earth, creating material value with the benevolence of rubber',
        'about.introTitle': 'Company Profile',
        'about.introText1': 'Kunray Rubber Co., Ltd. is a high-tech enterprise focusing on R&D, production and sales of high-performance rubber products.',
        'about.introText2': 'We are committed to providing quality rubber solutions for customers in automotive, machinery, electronics and construction.',
        'about.introText3': 'Upholding "Integrity, Innovation, Excellence, Win-Win", we constantly pursue technological innovation.',
        'about.visionTitle': 'Vision',
        'about.visionText': 'Become a leading rubber products supplier, guiding green sustainable development',
        'about.missionTitle': 'Mission',
        'about.missionText': 'Provide excellent quality rubber products through innovative technology',
        'about.valuesTitle': 'Core Values',
        'about.valuesText': 'Integrity, Innovation, Excellence, Win-Win',
        'about.hangzhouHQ': 'Kunray Holdings Hangzhou Headquarters',
        'about.zhanjiangCenter': 'Kunray Special Natural Rubber R&D and Industrialization Center (Zhanjiang)',
        'about.danzhouBase': 'Kunray Danzhou Base',
        'about.leadership': 'Leadership Care',
        
        'products.pageTitle': 'Kunray Products',
        'products.pageSubtitle': 'High-quality rubber products to meet your needs',
        'products.item1.name': 'Industrial Seals',
        'products.item1.title': 'Industrial Rubber Seals',
        'products.item1.desc': 'High-quality rubber with excellent wear resistance and sealing performance.',
        'products.item1.feature1': 'High temperature & corrosion resistant',
        'products.item1.feature2': 'Long service life',
        'products.item1.feature3': 'Customizable specifications',
        'products.item2.name': 'Auto Parts',
        'products.item2.title': 'Automotive Rubber Parts',
        'products.item2.desc': 'Designed for automotive industry, meeting international standards.',
        'products.item2.feature1': 'Shock absorption & noise reduction',
        'products.item2.feature2': 'Oil & aging resistant',
        'products.item2.feature3': 'IATF certified',
        'products.item3.name': 'Rubber Pads',
        'products.item3.title': 'Rubber Damping Pads',
        'products.item3.desc': 'Efficient shock absorption, protecting equipment and extending life.',
        'products.item3.feature1': 'Excellent elastic recovery',
        'products.item3.feature2': 'Multiple hardness options',
        'products.item3.feature3': 'Easy installation',
        'products.item4.name': 'Rubber Hoses',
        'products.item4.title': 'Rubber Hose Products',
        'products.item4.desc': 'High pressure, wear and corrosion resistant for various applications.',
        'products.item4.feature1': 'High pressure capacity',
        'products.item4.feature2': 'Tear resistant',
        'products.item4.feature3': 'Various specifications',
        'products.item5.name': 'Special Rubber',
        'products.item5.title': 'Special Rubber Products',
        'products.item5.desc': 'Customized according to customer requirements.',
        'products.item5.feature1': 'FKM, silicone and special materials',
        'products.item5.feature2': 'Extreme temperature resistant',
        'products.item5.feature3': 'Professional technical support',
        'products.item6.name': 'Mold Customization',
        'products.item6.title': 'Rubber Mold Customization',
        'products.item6.desc': 'One-stop service from design to production.',
        'products.item6.feature1': 'Professional design team',
        'products.item6.feature2': 'Precision mold manufacturing',
        'products.item6.feature3': 'Small batch trial support',
        
        'news.pageTitle': 'News Center',
        'news.pageSubtitle': 'Stay updated with Kunray Rubber',
        'news.readMore': 'Read More',
        'news.article1.title': 'Kunray Rubber Wins Green Innovation Award',
        'news.article1.desc': 'At the 2026 Green Industry Conference, Kunray Rubber won the award...',
        'news.article2.title': 'New Production Line Commissioned',
        'news.article2.desc': 'New intelligent production line increases capacity by 50%...',
        'news.article3.title': 'Strategic Partnership with Global Companies',
        'news.article3.desc': 'Kunray Rubber signs agreements with international automakers...',
        'news.article4.title': '2026 Supplier Conference Successfully Held',
        'news.article4.desc': 'Annual supplier conference held at Hangzhou headquarters...',
        'news.article5.title': 'New Product Launch Success',
        'news.article5.desc': 'Kunray launches new high-performance fluororubber series...',
        'news.article6.title': 'ISO9001 Certification Renewed',
        'news.article6.desc': 'Successfully passed annual ISO9001 quality management audit...',
        
        'contact.pageTitle': 'Contact Us',
        'contact.pageSubtitle': 'Looking forward to cooperating with you',
        'contact.infoTitle': 'Contact Information',
        'contact.addressTitle': 'Address',
        'contact.address': '28F, Building 1, Heda City, Wenze Road, Qiantang District, Hangzhou, Zhejiang, China',
        'contact.phoneTitle': 'Phone',
        'contact.phone': '+86-571-86038706',
        'contact.emailTitle': 'Email',
        'contact.email': 'service@kunrayrubber.com',
        'contact.worktimeTitle': 'Working Hours',
        'contact.worktime': 'Mon-Fri 8:30-17:30\nSat 8:30-12:00',
        'contact.formTitle': 'Online Inquiry',
        'contact.formName': 'Your Name',
        'contact.formEmail': 'Email',
        'contact.formPhone': 'Phone',
        'contact.formMessage': 'Message',
        'contact.formSubmit': 'Submit',
        'contact.mapTitle': 'Our Location',
        'contact.mapPlaceholder': 'Loading map...',
        
        'video.pageTitle': 'Video Center',
        'video.pageSubtitle': 'Watch Kunray Rubber corporate videos',
        'video.item1.title': 'Kunray Corporate Video',
        'video.item1.desc': "Learn about Kunray's history, culture and products",
        'video.item2.title': 'R&D Center Tour',
        'video.item2.desc': 'Visit Kunray Special Natural Rubber R&D Center',
        'video.item3.title': 'Production Process',
        'video.item3.desc': 'See our production workflow and quality control',

        'footer.description': 'Cultivating industrial civilization with virtue, creating material value with innovation',
        'footer.quickLinks': 'Quick Links',
        'footer.contactUs': 'Contact Us',
        'footer.copyright': '© 2026 Kunray Rubber. All rights reserved.'
    },
    
    // 法文
    fr: {
        'title': 'Kunray Caoutchouc',
        'about.title': 'Kunray Caoutchouc - À Propos',
        'products.title': 'Kunray Caoutchouc - Produits',
        'news.title': 'Kunray Caoutchouc - Actualités',
        'contact.title': 'Kunray Caoutchouc - Contact',
        
        'nav.home': 'Accueil',
        'nav.about.main': 'À Propos',
        'nav.about.companyProfile': 'Profil',
        'nav.about.developmentHistory': 'Histoire',
        'nav.about.companyAnnouncements': 'Annonces',
        'nav.about.technologicalInnovation': 'Innovation',
        'nav.about.cooperationPartners': 'Partenaires',
        'nav.products.main': 'Produits',
        'nav.products.productList': 'Liste',
        'nav.products.afterSalesSupport': 'SAV',
        'nav.products.productManualDownload': 'Manuels',
        'nav.services.main': 'Services',
        'nav.services.caseClassification': 'Cas',
        'nav.services.customerReviews': 'Avis',
        'nav.services.businessCustomization': 'Sur mesure',
        'nav.news.main': 'Actualités',
        'nav.news.companyNews': 'Entreprise',
        'nav.news.videoCenter': 'Vidéos',
        'nav.join.main': 'Carrières',
        'nav.join.recruitmentInformation': 'Offres',
        'nav.join.talentPolicy': 'Talent',
        'nav.contact': 'Contact',
        
        'carousel.slide1.title': 'Innovation Verte, Avenir Durable',
        'carousel.slide1.description': 'Solutions durables pour entreprises',
        'carousel.slide1.button': 'En Savoir Plus',
        'carousel.slide2.title': 'Innovation Technologique',
        'carousel.slide2.description': 'Nouveau chapitre de technologie verte',
        'carousel.slide2.button': 'Voir Projets',
        'carousel.slide3.title': 'Équipe Professionnelle',
        'carousel.slide3.description': 'Solutions vertes complètes pour clients',
        'carousel.slide3.button': 'À Propos',

        // Accueil contenu
        'home.aboutTitle': 'À Propos de Kunray',
        'home.aboutText1': "Kunray Caoutchouc est une entreprise high-tech spécialisée dans les produits en caoutchouc. Siège à Hangzhou avec centre R&D à Zhanjiang.",
        'home.aboutText2': 'Nous fournissons des solutions pour automobile, machinerie et électronique.',
        'home.learnMore': 'En Savoir Plus',

        // Accueil produits
        'home.productsTitle': 'Produits Clés',
        'home.product1.title': 'Joints Industriels',
        'home.product1.desc': 'Haute température et corrosion pour machinerie',
        'home.product2.title': 'Pièces Auto',
        'home.product2.desc': "Amortissement aux normes internationales",
        'home.product3.title': 'Tampons',
        'home.product3.desc': 'Amortissement efficace, protection équipement',
        'home.product4.title': 'Sur Mesure',
        'home.product4.desc': "Adapté aux besoins spéciaux",
        'home.viewAllProducts': 'Voir Tous',

        // Accueil stats
        'home.stat1': "Années d'Expérience",
        'home.stat2': 'Clients Partenaires',
        'home.stat3': "Types de Produits",
        'home.stat4': 'Bases de Production',

        // Accueil contact
        'home.contactTitle': 'Contactez-nous',
        'home.contactDesc': 'Au plaisir de coopérer avec vous',
        'home.addressTitle': 'Adresse',
        'home.contactUs': 'Contact en Ligne',

        'news.sectionTitle': 'Dernières Actualités',
        'news.card1.title': 'Prix Innovation Verte',
        'news.card1.description': 'Notre projet durable a reçu la reconnaissance.',
        'news.card1.link': 'Lire Plus',
        'news.card2.title': 'Nouveau Projet Lancé',
        'news.card2.description': 'Notre dernier projet fournira des solutions énergétiques.',
        'news.card2.link': 'Lire Plus',
        'news.card3.title': 'Partenariat Stratégique',
        'news.card3.description': 'Nous travaillerons avec des organisations environnementales.',
        'news.card3.link': 'Lire Plus',
        
        'about.pageTitle': 'À Propos de Kunray',
        'about.pageSubtitle': 'Cultiver la civilisation industrielle avec vertu',
        'about.introTitle': 'Profil',
        'about.introText1': 'Kunray Caoutchouc est une entreprise high-tech spécialisée dans les produits en caoutchouc.',
        'about.introText2': 'Nous fournissons des solutions caoutchouc pour automobile, machinerie, électronique.',
        'about.introText3': 'Nous poursuivons constamment l\'innovation technologique.',
        'about.visionTitle': 'Vision',
        'about.visionText': 'Devenir leader des produits en caoutchouc',
        'about.missionTitle': 'Mission',
        'about.missionText': 'Fournir des produits caoutchouc d\'excellente qualité',
        'about.valuesTitle': 'Valeurs',
        'about.valuesText': 'Intégrité, Innovation, Excellence',
        'about.hangzhouHQ': 'Siège Social de Kunray Holdings à Hangzhou',
        'about.zhanjiangCenter': "Centre de R&D et d'Industrialisation du Caoutchouc Naturel Spécial de Kunray (Zhanjiang)",
        'about.danzhouBase': 'Base de Danzhou de Kunray',
        'about.leadership': 'Visite des Dirigeants',

        'products.pageTitle': 'Produits Kunray',
        'products.pageSubtitle': 'Produits caoutchouc de haute qualité',
        'products.item1.name': 'Joints Industriels',
        'products.item1.title': 'Joints en Caoutchouc',
        'products.item1.desc': 'Caoutchouc de haute qualité, excellente résistance.',
        'products.item1.feature1': 'Haute température',
        'products.item1.feature2': 'Longue durée',
        'products.item1.feature3': 'Personnalisable',
        'products.item2.name': 'Pièces Auto',
        'products.item2.title': 'Pièces Automobile',
        'products.item2.desc': 'Conçu pour l\'industrie automobile.',
        'products.item2.feature1': 'Amortissement',
        'products.item2.feature2': 'Résistant',
        'products.item2.feature3': 'Certifié IATF',
        'products.item3.name': 'Tampons',
        'products.item3.title': 'Tampons Amortissants',
        'products.item3.desc': 'Amortissement efficace, protection équipement.',
        'products.item3.feature1': 'Élasticité',
        'products.item3.feature2': 'Multi-dureté',
        'products.item3.feature3': 'Facile install.',
        'products.item4.name': 'Tuyaux',
        'products.item4.title': 'Tuyaux en Caoutchouc',
        'products.item4.desc': 'Haute pression, résistant à l\'usure.',
        'products.item4.feature1': 'Haute pression',
        'products.item4.feature2': 'Résistant',
        'products.item4.feature3': 'Multi-specs',
        'products.item5.name': 'Spécial',
        'products.item5.title': 'Produits Spéciaux',
        'products.item5.desc': 'Sur mesure selon besoins clients.',
        'products.item5.feature1': 'FKM, silicone',
        'products.item5.feature2': 'Temp. extrême',
        'products.item5.feature3': 'Support tech.',
        'products.item6.name': 'Moules',
        'products.item6.title': 'Moules Sur Mesure',
        'products.item6.desc': 'Service complet conception à production.',
        'products.item6.feature1': 'Équipe pro.',
        'products.item6.feature2': 'Précision',
        'products.item6.feature3': 'Petit lot',
        
        'news.pageTitle': 'Actualités',
        'news.pageSubtitle': 'Restez informé avec Kunray',
        'news.readMore': 'Lire Plus',
        'news.article1.title': 'Prix Innovation Verte',
        'news.article1.desc': 'Kunray Caoutchouc remporte le prix...',
        'news.article2.title': 'Nouvelle Ligne de Production',
        'news.article2.desc': 'Nouvelle ligne intelligente augmente capacité...',
        'news.article3.title': 'Partenariat Stratégique',
        'news.article3.desc': 'Accords signés avec constructeurs...',
        'news.article4.title': 'Conférence Fournisseurs 2026',
        'news.article4.desc': 'Conférence annuelle à Hangzhou...',
        'news.article5.title': 'Lancement Nouveau Produit',
        'news.article5.desc': 'Nouvelle série fluorocarbone haute perf...',
        'news.article6.title': 'Certification ISO9001',
        'news.article6.desc': 'Audit qualité ISO9001 réussi...',
        
        'contact.pageTitle': 'Contactez-nous',
        'contact.pageSubtitle': 'Au plaisir de coopérer avec vous',
        'contact.infoTitle': 'Coordonnées',
        'contact.addressTitle': 'Adresse',
        'contact.address': '28F, Bât. 1, Heda City, Wenze Road, Hangzhou, Chine',
        'contact.phoneTitle': 'Téléphone',
        'contact.phone': '+86-571-86038706',
        'contact.emailTitle': 'Email',
        'contact.email': 'service@kunrayrubber.com',
        'contact.worktimeTitle': 'Horaires',
        'contact.worktime': 'Lun-Ven 8:30-17:30\nSam 8:30-12:00',
        'contact.formTitle': 'Demande en Ligne',
        'contact.formName': 'Nom',
        'contact.formEmail': 'Email',
        'contact.formPhone': 'Téléphone',
        'contact.formMessage': 'Message',
        'contact.formSubmit': 'Envoyer',
        'contact.mapTitle': 'Notre Emplacement',
        'contact.mapPlaceholder': 'Chargement carte...',
        
        'video.pageTitle': 'Centre Vidéo',
        'video.pageSubtitle': 'Vidéos corporatives de Kunray Caoutchouc',
        'video.item1.title': 'Vidéo Corporate',
        'video.item1.desc': "Découvrez l'histoire, la culture et les produits de Kunray",
        'video.item2.title': 'Visite du Centre R&D',
        'video.item2.desc': 'Visitez le centre de recherche Kunray',
        'video.item3.title': 'Processus de Production',
        'video.item3.desc': 'Découvrez notre processus de production',

        'footer.description': 'Cultiver avec vertu, créer avec innovation',
        'footer.quickLinks': 'Liens Rapides',
        'footer.contactUs': 'Contact',
        'footer.copyright': '© 2026 Kunray Caoutchouc. Tous droits réservés.'
    }
};

// 语言管理器
class LanguageManager {
    constructor() {
        this.currentLang = this.getInitialLanguage();
        this.init();
    }
    
    // 获取初始语言
    getInitialLanguage() {
        // 1. 检查URL参数
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang && i18n[urlLang]) {
            this.setCookie('lang', urlLang, 30);
            return urlLang;
        }
        
        // 2. 检查Cookie
        const cookieLang = this.getCookie('lang');
        if (cookieLang && i18n[cookieLang]) {
            return cookieLang;
        }
        
        // 3. 检查浏览器语言
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0];
        if (i18n[langCode]) {
            return langCode;
        }
        
        // 4. 默认中文
        return 'zh';
    }
    
    // 设置Cookie
    setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }
    
    // 获取Cookie
    getCookie(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length);
            }
        }
        return null;
    }
    
    // 初始化
    init() {
        this.updatePageLanguage();
        this.bindEvents();
        this.updateHTMLLang();
    }
    
    // 更新页面语言
    updatePageLanguage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });
        
        // 更新语言选择器显示
        this.updateLanguageSelector();
    }
    
    // 获取翻译
    getTranslation(key) {
        const langData = i18n[this.currentLang];
        return langData ? langData[key] : null;
    }
    
    // 切换语言
    switchLanguage(lang) {
        if (i18n[lang] && lang !== this.currentLang) {
            this.currentLang = lang;
            this.setCookie('lang', lang, 30);
            this.updatePageLanguage();
            this.updateHTMLLang();
            this.updateURL(lang);
        }
    }
    
    // 更新HTML lang属性
    updateHTMLLang() {
        document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 
                                       this.currentLang === 'en' ? 'en-US' : 'fr-FR';
    }
    
    // 更新URL参数
    updateURL(lang) {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url);
    }
    
    // 更新语言选择器显示
    updateLanguageSelector() {
        const langNames = { zh: '中文', en: 'English', fr: 'Français' };
        
        // 桌面端
        const langToggle = document.querySelector('.lang-toggle .lang-name');
        if (langToggle) {
            langToggle.textContent = langNames[this.currentLang];
        }
        
        const langFlag = document.querySelector('.lang-toggle .lang-flag');
        if (langFlag) {
            langFlag.className = `lang-flag ${this.currentLang}`;
        }
        
        // 更新下拉选项状态
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.toggle('active', option.dataset.lang === this.currentLang);
        });
        
        // 移动端
        document.querySelectorAll('.mobile-lang-option').forEach(option => {
            option.classList.toggle('active', option.dataset.lang === this.currentLang);
        });
    }
    
    // 绑定事件
    bindEvents() {
        // 桌面端语言切换
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const lang = e.currentTarget.dataset.lang;
                this.switchLanguage(lang);
            });
        });
        
        // 移动端语言切换
        document.querySelectorAll('.mobile-lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const lang = e.currentTarget.dataset.lang;
                this.switchLanguage(lang);
            });
        });
    }
}

// 页面加载完成后初始化
let langManager;
document.addEventListener('DOMContentLoaded', () => {
    langManager = new LanguageManager();
});

// 全局函数：获取当前语言
function getCurrentLanguage() {
    return langManager ? langManager.currentLang : 'zh';
}

// 全局函数：切换语言并跳转首页
function goToHomeWithLang() {
    const lang = getCurrentLanguage();
    window.location.href = `index.html?lang=${lang}`;
}
