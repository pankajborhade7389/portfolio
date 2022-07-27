import React from 'react'
import Block from './Block'
import galary from "../img/galary.png"
import htmlPage from "../img/htmlPage.png"
import digiClock from "../img/digiClock.png"
import reactBlog from "../img/reactBlog.png"
import restaurantApp from "../img/restaurantApp.png"

const Projects = () => {
    return (
        <div className='projects' id='project'>
            <h1>My Recent Works</h1>
            <div className='blog_data'>
                <Block
                    img={htmlPage}
                    project="HTML page"
                    discription="Backtracking created by using HTML. It shows how a normal text looks on windows, By using all tags in HTML and giving some styles in it."
                    html={<i className="fa-brands fa-html5"></i>}
                    css={<i className="fa-brands fa-css3-alt"></i>}
                    url="https://pankajborhade7389.github.io/project1/"
                />
                <Block
                    img={galary}
                    project="Todo App"
                    discription="This project contains the capabilties of JS. During the development of this project I have understand that how do you connect the HTML pages with functionality written in JS files, I have used multiple DOM functions which made my static application as Dynamic application where I can do multiple operations on user input and change the look and view of page based on user input, also known as adding Dynamic HTML in the website based on user's input."
                    html={<i className="fa-brands fa-html5"></i>}
                    css={<i className="fa-brands fa-css3-alt"></i>}
                    js={<i className="fa-brands fa-js-square"></i>}
                    url="https://pankajborhade7389.github.io/Todo-App-JS/"
                    />
                <Block
                    img={digiClock}
                    project="Digital Clock"
                    discription="Digital Clock created by using JavaScript, HTML and CSS, we look closely at the JavaScript code behind a clock. It includes multiple functions and created a clock and make it response on a particular time for taking tasks"
                    html={<i className="fa-brands fa-html5"></i>}
                    css={<i className="fa-brands fa-css3-alt"></i>}
                    js={<i className="fa-brands fa-js-square"></i>}
                    url="https://pankajborhade7389.github.io/Digital-clock/"
                    />
                <Block
                    img={reactBlog}
                    project="React Blog"
                    discription="It includes capabilities React.JS and React Router mainly. While developing this project I understand that how I can create multiple components in React like Smart Components and Dummy Components and how to modify and do data operations within component using state variables and how to communicate between two components props variables by using HTML, CSS, JavaScript , React.JS"
                    html={<i className="fa-brands fa-html5"></i>}
                    css={<i className="fa-brands fa-css3-alt"></i>}
                    js={<i className="fa-brands fa-js-square"></i>}
                    react={<i className="fa-brands fa-react"></i>}
                    url="https://react-blog-app-pankajborhade7389.netlify.app/"
                />
                <Block
                    img={restaurantApp}
                    project="Restaurant App"
                    discription="ReactJS Router is mainly used for developing Single Page Web Applications. This project made by using React Router mainly. In this project I created multiple components and how to store in single parent component. While developing this project I understand that how to modify and do data operations within component using state variables and how to communicate between two components props variables by using HTML, CSS, JavaScript , React.JS"
                    html={<i className="fa-brands fa-html5"></i>}
                    css={<i className="fa-brands fa-css3-alt"></i>}
                    js={<i className="fa-brands fa-js-square"></i>}
                    react={<i className="fa-brands fa-react"></i>}
                    url="https://react-blog-app-pankajborhade7389.netlify.app/"
                />

            </div>
        </div>
    )
}

export default Projects