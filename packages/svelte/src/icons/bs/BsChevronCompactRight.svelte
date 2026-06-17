<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M6.78 1.55a0.50.5 0 0 1 0.670.22l3 6a0.50.5 0 0 1 0 0.45l-3 6a0.50.5 0 1 1-0.89-0.45L9.44 8 6.55 2.22a0.50.5 0 0 1 0.22-0.67"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
