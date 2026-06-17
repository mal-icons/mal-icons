<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.29 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.71A1 1 0 0 0 13.71 4L10 0.29A1 1 0 0 0 9.29 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6.35 9.85a0.50.5 0 0 1-0.71-0.71l2-2a0.50.5 0 0 1 0.71 0l2 2a0.50.5 0 0 1-0.710.71L8.5 8.71V12.5a0.50.5 0 0 1-1 0V8.71z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
