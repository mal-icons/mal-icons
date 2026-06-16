<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 11.18V9.72c0-0.47-0.16-0.92-0.46-1.28L16.6 3.72c-0.38-0.46-0.94-0.72-1.54-0.72H3c-1.1 0-2 0.9-2 2v8c0 1.10.9 2 2 2h0.18C3.6 16.16 4.7 17 6 17s2.4-0.84 2.82-2h8.37a3 3 0 0 0 5.82-1c-0.01-1.3-0.85-2.4-2.01-2.82zM18.4 9H16V6.12L18.4 9zM3 5h4v4H3V5zm3 10c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm3-2v-2h3V9H9V5h5v8H9zm11 2c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zM7 20h4v-2l6 3h-4v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
