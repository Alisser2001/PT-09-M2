var URL = 'http://localhost:5000/amigos';
$('#boton').click(()=>{
    $('#lista').empty();
    $.get(`${URL}`, (friends)=>{
        let list = document.getElementById('lista');
        for (let i=0; i<friends.length; i++) {
            let li=document.createElement('li');
            li.id = friends[i].id;
            li.innerHTML = friends[i].name;
            list.appendChild(li);
        }
    })
})

$('#search').click(()=>{
    let id= $('#input').val();
    let span = document.getElementById('amigo');
    if(id){
        $.get(`${URL}`, (friends)=>{
            for(let i=0; i<friends.length; i++) {
                if(friends[i].id == id){
                    span.innerHTML = friends[i].name;
                }
            }
        })
    } else {
        span.innerHTML = 'Ingrese un id';
    }
})

$('#delete').click(()=>{
    let id= $('#input').val();
    if(id){
        $.ajax({
            url: `${URL}/${id}`, // http://localhost:5000/amigos/id
            type: 'DELETE',
            success: ()=>{
                $('#success').text('Tu amigo ha sido eliminado');
            }
        })
    } else {
        $('#success').text('Ingrese un id');
    }
})

