<script>
  let title = "";
  let body = "";

  const apiBaseUrl =
    "https://ndb99xkpdk.execute-api.eu-west-2.amazonaws.com/dev";

  async function onSubmit(event) {
    event.preventDefault();
    if (title.trim() === "" || body.trim() === "") {
      return;
    }
    const newPost = { title, body };
    const res = await fetch(`${apiBaseUrl}/post`, {
      method: "POST",
      body: JSON.stringify(newPost)
    });
    console.log(res, "here you are");
    const post = await res.json();
  }
</script>

<form on:submit={onSubmit}>
  <div class="input-field">
    <label for="title">Title</label>
    <input type="text" bind:value={title} />
  </div>
  <div class="input-field">
    <label for="body">Body</label>
    <input type="text" bind:value={body} />
  </div>
  <button type="submit" class="waves-effect waves-light btn">Add</button>
</form>
