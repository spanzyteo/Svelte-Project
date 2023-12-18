<script>
    import {FeedbackStore} from '../stores'
    import { fade, scale } from 'svelte/transition'
    import FeedBackItem from "./FeedBackItem.svelte";

</script>

{#each $FeedbackStore as fb(fb.id)}
    <div transition:fade>
        <FeedBackItem item={fb}/>
    </div>
{/each}