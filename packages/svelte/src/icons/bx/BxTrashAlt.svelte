<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 2H9c-1.1 0-2 0.9-2 2v2H3v2h2v12c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V8h2V6h-4V4c0-1.1-0.9-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
