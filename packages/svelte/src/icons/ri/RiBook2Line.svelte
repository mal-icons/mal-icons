<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 18H6C5.45 18 5 18.45 5 19C5 19.55 5.45 20 6 20H21V22H6C4.34 22 3 20.66 3 19V4C3 2.9 3.9 2 5 2H21V18ZM5 16.05C5.16 16.02 5.33 16 5.5 16H19V4H5V16.05ZM16 9H8V7H16V9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
