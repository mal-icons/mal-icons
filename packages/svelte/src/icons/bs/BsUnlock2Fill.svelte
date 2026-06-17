<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M8 0c1.07 0 2.040.42 2.76 1.1l0.140.140.060.08a0.50.5 0 0 1-0.710.68l-0.08-0.07-0.22-0.2A3 3 0 0 0 5 4v2h6.5A2.5 2.5 0 0 1 14 8.5v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
