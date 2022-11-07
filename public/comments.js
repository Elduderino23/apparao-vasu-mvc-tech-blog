const postComment = async (event) =>{
    event.preventDefault();
    console.log("hi, you commented")
    const commentMessage =  document.querySelector('#message').value.trim();
    if (commentMessage) {
        const response = await fetch('/addcom',{
            method: "POST",
            body: JSON.stringify({ content }),
            header: { "Content-Type": 'application/json' }

        });
        console.log(response)
    }
}