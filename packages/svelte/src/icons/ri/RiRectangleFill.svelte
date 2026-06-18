<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 4H21C21.55 4 22 4.45 22 5V19C22 19.55 21.55 20 21 20H3C2.45 20 2 19.55 2 19V5C2 4.45 2.45 4 3 4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
