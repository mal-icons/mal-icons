<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M2.5 12a0.50.5 0 0 1 0.5-0.5h10a0.50.5 0 0 1 0 1H3a0.50.5 0 0 1-0.5-0.5m0-4a0.50.5 0 0 1 0.5-0.5h10a0.50.5 0 0 1 0 1H3a0.50.5 0 0 1-0.5-0.5m0-4a0.50.5 0 0 1 0.5-0.5h10a0.50.5 0 0 1 0 1H3a0.50.5 0 0 1-0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
