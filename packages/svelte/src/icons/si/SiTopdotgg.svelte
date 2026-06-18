<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 4.38h7.62V12H2.33A2.32 2.32 0 0 1 0.01 9.68Zm24 0H8.76v15.24h3.11a4.51 4.51 0 0 0 4.51-4.51V12h3.11A4.51 4.51 0 0 0 24 7.49z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
