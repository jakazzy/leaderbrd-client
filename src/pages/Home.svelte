<script>
  import { onMount } from "svelte";
  const apiBaseUrl =
    "https://ndb99xkpdk.execute-api.eu-west-2.amazonaws.com/dev";

  let posts = [];
  onMount(async () => {
    const res = await fetch(apiBaseUrl + "/posts");
    posts = await res.json();
  });

  function editPost(post) {
    console.log(post);
  }

  function deletePost(id) {
    console.log("deleting post with id " + id);
  }
</script>

<style>
  .delete-btn {
    color: red;
  }
  .card .card-content .card-title {
    margin-bottom: 0;
  }
  p.timestamp {
    color: #999;
    margin-bottom: 10px;
  }
</style>

<div class="delete-btn" />
<div class="row">
  {#if posts.length === 0}
    <h2>Loading posts...</h2>
  {:else}
    {#each posts as post}
      <div class="col s6">
        <div class="card">
          <div class="card-content">
            <p class="card-title">{post.title}</p>
            <p class="timestamp">{post.createdAt}</p>
            <p>{post.body}</p>
          </div>
          <div class="card-action">
            <a href="#" on:click={() => editPost(post)}>EDIT</a>
            <a href="#" class="delete-btn" on:click={() => deletePost(post.id)}>
              DELETE
            </a>
          </div>
        </div>
      </div>
    {/each}
  {/if}
</div>
