import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import Sql from './sql.svg';
import excel from './excel.png';
import powerBI from './powerBI.png';
import tableau_software from './tableau-software.png'
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import Ayush_Logo_Dark from './Ayush_logo_dark.png';
import Ayush_Logo from './Ayush_logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    Sql,
    excel,
    powerBI,
    tableau_software,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    Ayush_Logo_Dark,
    Ayush_Logo,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'SQL Project-1',
        description: 'Data Cleaning and Handling using Dataset of World Layoffs ',
        bgImage: '/work-1.png',
        link: 'https://github.com/AyushGupta1428/SQL_Analytics',
    },
    {
        title: 'SQL Project-2',
        description: 'Data Exploration using Dataset of Covid-19',
        bgImage: '/work-2.png',
        link: 'https://github.com/AyushGupta1428/SQL_Analytics',
    },
    {
        title: 'Dashboard for Listings and Booking Analysis using Tableau',
        description: 'Researched a dataset of Airbnb and analyzed booking of various zipcodes of year 2016 ',
        bgImage: '/work-3.png',
        link: 'https://github.com/AyushGupta1428/Data_Visualisation_Dashboard',
    },
    {
        title: 'Dashboard for Bike Sales using Excel',
        description: 'Built an Excel dashboard with Pivot Tables to visualize and analyze bike sales performance.',
        bgImage: '/work-4.png',
        link: 'https://github.com/AyushGupta1428/Data_Visualisation_Dashboard',
    },
]

export const educationData = [
    // { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Bachelor of Technology in Civil and Environmental Engineering - Birla Institute of Technology,Mesra', year : "2022 - present", description: 'Currently  a final year student with CGPA of 8.09. Possesses skills in Data Visualization and SQL. ', link: '' },
    { icon: assets.ui_icon, title: '(12th Grade) - VJ INTNL SCHL LODHIPUR GORADIH RD BHAGALPUR BR, Bhagalpur',year : "2018 - 2020", description: 'Completed senior secondary education with specialization in Science Stream (Physics, Chemistry, Mathematics) and secured 82% in the CBSE Board Exams', link: '' },
    { icon: assets.graphics_icon, title: '(10th Grade) - St. Josephs School, Dumka',year : "2017-2018", description: 'completed secondary education with an strong emphasis on Science and Mathematics.Achieved 85.83% in the ISCE Board Exams and listed in top 10 Student in my School', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Skills', description: 'SQL , Excel Sheets , Tableau , Python , Problem Solving , AWS , Statistical Analysis , Data Visualization' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Civil Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 4 projects' }
];

export const toolsData = [
    assets.Sql, assets.excel, assets.powerBI, assets.tableau_software, assets.git
];