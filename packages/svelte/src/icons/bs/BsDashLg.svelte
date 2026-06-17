<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M2 8a0.50.5 0 0 1 0.5-0.5h11a0.50.5 0 0 1 0 1h-11A0.50.5 0 0 1 2 8"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
