<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 3c1.65 0 3 1.35 3 3A3.01 3.01 0 0 1 13 11c-1.65 0-3-1.35-3-3 0-1.65 1.35-3 3-3zM19 18H7v-0.75c0-2.22 2.71-4.5 6-4.5s6 2.28 6 4.5V18z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
