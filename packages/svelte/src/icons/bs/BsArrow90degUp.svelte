<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M4.85 1.15a0.50.5 0 0 0-0.71 0l-4 4a0.50.5 0 1 0 0.710.71L4 2.71V12.5A2.5 2.5 0 0 0 6.5 15h8a0.50.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.71l3.15 3.15a0.50.5 0 1 0 0.71-0.71z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
