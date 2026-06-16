<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m12.36 6 0.4 2H18v6h-3.36l-0.4-2H7V6h5.36M14 4H5v17h2v-7h5.6l0.4 2h7V6h-5.6L14 4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
