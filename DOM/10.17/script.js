const btn = document.querySelector('#getData');
const container = document.querySelector('#container')

btn.addEventListener('click', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/?userId=4&completed=true', {
        method: 'get'
    })


    const result = await response.json();

    console.log(result)
    // result.results.forEach(user => {
    //     container.insertAdjacentHTML('afterbegin', `
    //         <h1>${user.name.title} ${user.name.first} ${user.name.last}</h1>
    //     `)
    // })

    // btn.remove()

    // 10 users => user acc

    // todos
    // posts => posts => comments
    // albums => albums => photos
})