<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["polygon",{"fill":"#FFC107","points":"33,22 23.6,22 30,5 19,5 13,26 21.6,26 17,45"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
