<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.5 9a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zM20 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm-3.21 14.21-2.91-2.91c-0.690.44-1.510.7-2.390.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 0.88-0.26 1.69-0.7 2.39l2.91 2.9-1.42 1.42z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
