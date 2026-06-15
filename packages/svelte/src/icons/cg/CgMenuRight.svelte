<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 18C22 18.55 21.55 19 21 19H13C12.45 19 12 18.55 12 18C12 17.46 12.45 17.01 13 17.01H21C21.55 17.01 22 17.46 22 18Z","fill":"currentColor"}],["path",{"d":"M22 12C22 12.55 21.55 13 21 13H3C2.45 13 2 12.55 2 12C2 11.45 2.45 11.01 3 11.01H21C21.55 11.01 22 11.45 22 12Z","fill":"currentColor"}],["path",{"d":"M21 6.99C21.55 6.99 22 6.54 22 6C22 5.45 21.55 5 21 5H9C8.45 5 8 5.45 8 6C8 6.54 8.45 6.99 9 6.99H21Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
