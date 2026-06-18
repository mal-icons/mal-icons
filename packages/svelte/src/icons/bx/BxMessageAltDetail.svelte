<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 2c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h3.59L12 21.41 15.41 18H19c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2H5zm14 14h-4.41L12 18.59 9.41 16H5V4h14v12z"}],["path",{"d":"M7 7h10v2H7zm0 4h7v2H7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
