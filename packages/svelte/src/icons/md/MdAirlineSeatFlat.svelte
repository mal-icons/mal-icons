<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 13a3 3 0 0 0 2.1-5.14C6.51 7.29 5.75 7 5 7a3 3 0 0 0-2.1 5.14c0.590.57 1.350.86 2.10.86zm-0.71-3.7a1 1 0 0 1 1.41-0.02c0.40.390.4 1.010.02 1.41-0.20.2-0.450.31-0.720.31-0.26 0-0.51-0.1-0.7-0.28-0.4-0.4-0.4-1.02-0.01-1.42zM18 7H9v6h13v-2c0-2.21-1.79-4-4-4zm-7 4V9h7c1.1 0 2 0.9 2 2h-9zm-9 5h6v2h8v-2h6v-2H2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
