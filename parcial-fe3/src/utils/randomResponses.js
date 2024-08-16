let randomResponses = [
    'No, no lo creo.',
    'Ni en tus sueños.',
    'No cuentes con ello.',
    'La verdad es que no.',
    'Es cierto.',
    'Sin dudarlo.',
    'Sí, definitivamente.',
    'Sí, es muy probable.',
    'Sinceramente, no lo sé.',
    'No puedo predecir eso.',
    'Me dejas sin palabras.',
    'No puedo responder semejante pregunta.',
];

export function getRandomResponse() {
    return randomResponses[Math.floor(Math.random() * randomResponses.length)];
}
