<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-120v-561l400-239 400 239v561H80Zm400-334 336-197-336-202-336 202 336 197ZM140-180h680v-407L480-387 140-587v407Zm0 0h680-680Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
