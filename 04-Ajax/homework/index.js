var URL = 'http://localhost:5000/amigos';

/*La función selectora de ES6 $() se encarga de elegir todos los elementos del tipo por parametro
que se le pase:

$(*) => Selecciona todos los elementos del documento
$(.class) => Reune todos los elementos con la clase .class
$(#id) => Toma el elemento del id correspondiente
$(element) => Reune todos los elementos del tipo element en el documento*/

$('#boton').click(()=>{
    $('#lista').empty();
    $.get(`${URL}`, (friends)=>{
        console.log(friends)
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
        /*$.get(`${URL}`, (friends)=>{ 
            for(let i=0; i<friends.length; i++) {
                if(friends[i].id == id){                             Esta sería una forma de hacerlo sin Ajax
                    span.innerHTML = friends[i].name;
                }
            }
        })*/
        $.ajax({
            url: `${URL}/${id}`, // http://localhost:5000/amigos/id
            type: 'GET',
            success: (friend)=>{
                $('#amigo').text(friend.name);
            }
        })
    } else {
        //span.innerHTML = 'Ingrese un id';
        $('#amigo').text('Ingrese un id');
    }
})

$('#delete').click(()=>{
    let id= $('#inputDelete').val();
    if(id){
        $.ajax({
            url: `${URL}/${id}`, // http://localhost:5000/amigos/id
            type: 'DELETE',
            success: ()=>{ //Esta función se ejecuta si el llamado al DELETE en el url pasado es exitoso
                $('#success').text('Tu amigo ha sido eliminado');
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
            }
        })
        /*$.delete(`${URL}`, (friends)=>{
            for(let i=0; i<friends.length; i++){                         Esta manera está mal implementada, puesto que el metodo
                if(friends[i].id === id){                                delete es muy viejo pero Ajax tiene una implementación 
                    friends.splice(i, 1);                                para ello
                }
            }
        })*/
    } else {
        $('#success').text('Ingrese un id');
    }
})

