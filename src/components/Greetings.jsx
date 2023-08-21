function Greetings(props) {
    console.log(props)

const { lang, children } = props;
  
let greetingText = `Hello ${children}`

if (lang === "de") {
    greetingText = `Hallo ${children}`
} else if (lang === "es") {
    greetingText = `Hola ${children}`
} else if (lang === "fr") {
    greetingText = `Bonjour ${children}!`
} else if (lang === "en") {
    greetingText = `Hello, ${children}`
} else {
    greetingText = `Hello, ${children}`
}

return [greetingText]
    
}

export default Greetings