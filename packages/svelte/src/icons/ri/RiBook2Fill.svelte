<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 18H6C5.45 18 5 18.45 5 19C5 19.55 5.45 20 6 20H21V22H6C4.34 22 3 20.66 3 19V4C3 2.9 3.9 2 5 2H21V18ZM16 9V7H8V9H16Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
