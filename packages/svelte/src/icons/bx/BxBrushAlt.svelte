<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 8h-4V5a2.92 2.92 0 0 0-0.87-2.11 2.94 2.94 0 0 0-2.39-0.88C10.2 2.14 9 3.51 9 5.12V8H5c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2zM5 10h6V5.12c0-0.570.41-1.07 1-1.120.27 0 0.510.10.710.31a0.960.96 0 0 1 0.290.69V10h1l0.010h5V12H5v-2zm0 10v-6h14l0 6H5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
