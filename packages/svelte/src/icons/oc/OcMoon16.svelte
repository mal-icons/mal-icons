<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.6 1.59a0.750.75 0 0 1 0.79-0.17 7 7 0 1 1-8.97 8.970.750.75 0 0 1 0.96-0.96 5.5 5.5 0 0 0 7.05-7.050.750.75 0 0 1 0.18-0.79Zm1.62 1.95a7 7 0 0 1-7.68 7.68 5.5 5.5 0 1 0 7.68-7.68Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
