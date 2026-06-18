<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.5 8.55c0 2 1.51 3.5 3.5 3.5s3.5-1.5 3.5-3.5-1.5-3.5-3.5-3.5-3.5 1.51-3.5 3.5zM19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 19h10v-1c0-2.76-2.24-5-5-5H7c-2.76 0-5 2.24-5 5v1h2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
