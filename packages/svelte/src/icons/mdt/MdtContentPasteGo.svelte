<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 17c0-3.31 2.69-6 6-6h3V5h-2v3H7V5H5v14h5v-2z","opacity":".3"}],["path",{"d":"M10 19H5V5h2v3h10V5h2v6h2V5c0-1.1-0.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.40.84-2.82 2H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h5v-2zm2-16c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1z"}],["path",{"d":"m18.01 13-1.42 1.41 1.58 1.58H12v2h6.17l-1.58 1.59 1.42 1.41 3.99-4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
