<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 9 5.16 L 9 26.84 L 10.53 25.84 L 25.84 16 L 10.53 6.16 Z M 11 8.81 L 22.16 16 L 11 23.19 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
