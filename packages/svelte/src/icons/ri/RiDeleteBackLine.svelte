<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.53 3H21C21.55 3 22 3.45 22 4V20C22 20.55 21.55 21 21 21H6.53C6.2 21 5.89 20.83 5.7 20.55L0.37 12.55C0.15 12.22 0.15 11.78 0.37 11.45L5.7 3.45C5.89 3.17 6.2 3 6.53 3ZM7.07 5L2.4 12L7.07 19H20V5H7.07ZM16 11V13H9V11H16Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
