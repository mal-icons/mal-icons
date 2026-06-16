<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M527-616v272l136-136-136-136ZM180-180h147v-600H180v600Zm207 0h393v-600H387v600Zm-60 0H180h147Zm-207 60v-720h720v720H120Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
