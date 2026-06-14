<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["polygon",{"fill":"#2196F3","points":"43,17.1 39.9,14 24,29.9 8.1,14 5,17.1 24,36"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
