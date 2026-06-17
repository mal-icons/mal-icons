<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M3.5 10a0.50.5 0 0 1-0.5-0.5v-8a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0.50.5v8a0.50.5 0 0 1-0.50.5h-2a0.50.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a0.50.5 0 0 0 0-1z"}],["path",{"fill-rule":"evenodd","d":"M7.65 4.15a0.50.5 0 0 1 0.71 0l3 3a0.50.5 0 0 1-0.710.71L8.5 5.71V14.5a0.50.5 0 0 1-1 0V5.71L5.35 7.85a0.50.5 0 1 1-0.71-0.71z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
