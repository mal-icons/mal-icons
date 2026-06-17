<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M6.950.44c0.58-0.58 1.52-0.58 2.1 0l6.52 6.52c0.580.580.58 1.52 0 2.1L9.05 15.57c-0.580.58-1.520.58-2.1 0L0.44 9.05a1.48 1.48 0 0 1 0-2.1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
