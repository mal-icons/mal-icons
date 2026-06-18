<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.38 0h13.24A5.37 5.37 0 0 1 24 5.38v13.24A5.37 5.37 0 0 1 18.62 24H5.38A5.37 5.37 0 0 1 0 18.62V5.38A5.37 5.37 0 0 1 5.380Zm7.89 17.31a1.81 1.81 0 1 0-3.630 1.81 1.81 0 0 0 3.630m-0.53-6.53H7.21a1.81 1.81 0 1 0 0 3.62h5.52a1.81 1.81 0 1 0 0-3.62m4.42-4.71H8.87a1.81 1.81 0 1 0 0 3.63h8.28a1.81 1.81 0 1 0 0-3.62z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
