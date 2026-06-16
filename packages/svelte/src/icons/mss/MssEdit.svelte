<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M180-180h44l443-443-44-44-443 443v44Zm614-486L666-794l84-84 128 128-84 84ZM120-120v-128l504-504 128 128-504 504H120Zm525-525-22-22 44 44-22-22Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
