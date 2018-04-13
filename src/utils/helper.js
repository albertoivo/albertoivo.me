const skillsArray = [
  'Full Stack',
  'Java',
  'React',
  'React Native',
  'Docker',
  'Python',
  'HTML5',
  'CSS3',
  'JavaScript'
]

export const languages = [
  {
    name: 'Portuguese',
    knowledge: '100%'
  },
  {
    name: 'English',
    knowledge: '90%'
  },
  {
    name: 'Spanish',
    knowledge: '50%'
  }
]

export const educations = [
  {
    title: 'Nanodegree Full Stack Web Developer',
    local: 'Udacity.com',
    initialDate: '2018',
    finalDate: 'in progress'
  },
  {
    title: 'Nanodegree React Developer',
    local: 'Udacity.com',
    initialDate: '2017',
    finalDate: '2018'
  },
  {
    title: 'MBA - IT Project Management',
    local: 'POSUGF.com.br',
    initialDate: '2010',
    finalDate: '2011'
  },
  {
    title: 'Post-Graduation - Test Engineer',
    local: 'UFPE.br - Motorola',
    initialDate: '2018'
  },
  {
    title: 'Bachelor of Computer Science',
    local: 'Unipe.br',
    initialDate: '2003',
    finalDate: '2006'
  }
]

export const works = [
  {
    title: 'Full Stack Developer',
    local: 'SERPRO.gov.br',
    initialDate: '2012',
    finalDate: ''
  },
  {
    title: 'Java Web Developer',
    local: 'CNPq.br',
    initialDate: '2010',
    finalDate: '2012'
  },
  {
    title: 'Java Web Developer',
    local: 'Petrobras.com.br',
    initialDate: '2008',
    finalDate: '2009'
  },
  {
    title: 'Test Engineer',
    local: 'UFPE - Motorola',
    initialDate: '2008'
  }
]

export const shuffle = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

export const skills = () => shuffle(skillsArray)
