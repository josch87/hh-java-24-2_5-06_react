import {AuthorsType, AuthorType} from "../model/model.ts";

export const aljoscha: AuthorType = {
    id: "1",
    sort: 3,
    name: "Aljoscha Zöller",
    position: "Fullstack engineer",
    avatar: "https://2.gravatar.com/avatar/8f6213720804d3379713f4219fb81335db5f0212ad551517a18d5d537c741406?size=128",
    backgroundImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    button: {
        text: "Website",
        url: "https://aljoschazoeller.com"
    },
    stats: [
        {value: '34K', label: 'Followers'},
        {value: '187', label: 'Follows'},
        {value: '1.6K', label: 'Posts'},
    ]
}

export const florian: AuthorType = {
    id: "2",
    sort: 2,
    name: "Florian Weber",
    position: "Fullstack engineer",
    avatar: "https://images.ctfassets.net/m8n66tuamygx/70esMEv73Ctq01qvyqSP8h/e5569500f3e54f4c4316978963d313b3/P1060064.png?w=256&q=75&fm=webp",
    backgroundImage: "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    button: {
        text: "neue fische",
        url: "https://www.neuefische.de/bootcamp/java-development#:~:text=Unsere%20Coaches-,Florian%20Weber,-Lead%20Coach%20Java"
    },
    stats: [
        {value: '266K', label: 'Followers'},
        {value: '10', label: 'Follows'},
        {value: '13.6K', label: 'Posts'},
    ]
}

export const mickey: AuthorType = {
    id: "3",
    sort: 1,
    name: "Mickey Mouse",
    position: "Mascot",
    avatar: "https://images.unsplash.com/photo-1616776212814-fab73656dd8e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundImage: "https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    button: {
        text: "Wikipedia",
        url: "https://de.wikipedia.org/wiki/Micky_Maus"
    },
    stats: [
        {value: '2634K', label: 'Followers'},
        {value: '2025', label: 'Follows'},
        {value: '1.1K', label: 'Posts'},
    ]
}

export const authors: AuthorsType = [aljoscha, florian, mickey]