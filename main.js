$(function() {
    let name = ''
    $('body').on('click', '.next', () => {
        name = $('.name').val()
        $('.container').html(`<h1>Rock Paper Scissors</h1><h4>lets play ${name}! 😈 </h4><p class="user">${name}'s score:0</p> <p class="machine">my score:0</p><div class="top_image"><img class="rock" src="./img/rock.png" alt="rock"></div>
        <div class="bottom_images">
        <img class="paper" src="./img/paper.png" alt="paper">
        <img class="scissors" src="./img/scissors.png" alt="scissors">
        </div>`)

    })
    let select = ''
    let user_score = 0
    let machine_score = 0

    const choices = ['scissors', 'paper', 'rock']
    $('body').on('click', '.rock', () => {
        select = "rock"
        const randomElement = choices[Math.floor(Math.random() * choices.length)];
        if (select === randomElement) {
            alert("Draw -__-")
        } else if (randomElement === 'paper') {
            alert('HaHa i won 😈')
            machine_score += 1
            add_machine_score()
        } else {
            alert('You won 😡')
            user_score += 1
            add_user_score()
        }
    })
    $('body').on('click', '.paper', () => {
        select = "paper"
        const randomElement = choices[Math.floor(Math.random() * choices.length)];
        if (select === randomElement) {
            alert("Draw -__-")
        } else if (randomElement === 'scissors') {
            alert('HaHa i won 😈')
            machine_score += 1
            add_machine_score()
        } else {
            alert('You won 😡')
            user_score += 1
            add_user_score()
        }

    })
    $('body').on('click', '.scissors', () => {
        select = "scissors"
        const randomElement = choices[Math.floor(Math.random() * choices.length)];
        if (select === randomElement) {
            alert("Draw -__-")
        } else if (randomElement === 'rock') {
            alert('HaHa i won 😈')
            machine_score += 1
            add_machine_score()
        } else {
            alert('You won 😡')
            user_score += 1
            add_user_score()
        }
    })

    add_user_score = () => {
        $('.user').html(`${name}'s score: ${user_score}`)
    }

    add_machine_score = () => {
        $('.machine').html(`my score: ${machine_score}`)
    }


})