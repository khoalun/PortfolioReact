const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/khoalun',
  title: 'Kb.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Khoa Bui',
  role: 'Front End Engineer',
  description:
    'Hello my name is Khoa, Im 4 years student studying at Vamk. Im always eager to learn new things and to become a best version I have',

  resume: 'https://www.linkedin.com/in/khoa-bui-a1b0071b4/',
  social: {
    linkedin: 'https://www.linkedin.com/in/khoa-bui-a1b0071b4/',
    github: 'https://github.com/khoalun',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description: 'A simple rock-paper-scissors game ',
    image:
      'https://ih1.redbubble.net/image.1859110803.7076/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
    stack: ['Redux', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/',
    livePreview: 'https://reverent-poincare-5057e2.netlify.app/',
  },
  {
    name: 'Project 2',
    description: 'Phone Market App',
    image:
      './images/phone.jpg',
    stack: ['Bootstrap', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://gallant-swartz-cf89c3.netlify.app/',
  },
  {
    name: 'Project 3',
    description: 'Car Market App',
    image:
      './images/CarMarket.jpg',
    stack: ['Mui', 'Bootstrap', 'React'],
    sourceCode: 'https://github.com',
    livePreview: ' https://cocky-visvesvaraya-2b5f4a.netlify.app',
  },
  {
    name: 'Project 4',
    description: 'Booking Movie Ticket',
    image:
      'https://topcode.vn/FilesUpload/CodeUpload/frontend-reactjs-web-dat-ve-phim-day-du-chuc-nang-giao-dien-dep-mat-214855.jpg',
    stack: ['Redux', 'MongoDb', 'React'],
    sourceCode: 'github.com',
    livePreview: 'https://amazing-shirley-8d049e.netlify.app/',
  },
  {
    name: 'Project 5',
    description: 'Game Roll Dice',
    image:
      'https://www.incimages.com/uploaded_files/image/1024x576/getty_544482712_203701.jpg',
    stack: ['React', 'Redux', 'Bootstrap'],
    sourceCode: 'github.com',
    livePreview: 'https://amazing-shirley-8d049e.netlify.app/',
  },
  {
    name: 'Project 6',
    description: 'Burger Builder App',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dFJct3kzRnDcQyM9bulCPfBm0TrRjViqJw&usqp=CAU',
    stack: ['Redux', 'React', 'Netlify'],
    sourceCode: 'github.com',
    livePreview: 'https://thirsty-mestorf-984175.netlify.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Nodejs',
  'MongoDB',
  'NextJs',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'buikhoa793@gmail.com',
}

export { header, about, projects, skills, contact }
