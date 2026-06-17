<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.6 7.3a0.80.8 0 0 1 0 1.39l-6.36 3.69C0.71 12.69 0 12.35 0 11.69V4.31c0-0.650.71-1 1.23-0.7z"}],["path",{"d":"M15.6 7.3a0.80.8 0 0 1 0 1.39l-6.36 3.69C8.71 12.69 8 12.35 8 11.69V4.31c0-0.650.71-1 1.23-0.7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
