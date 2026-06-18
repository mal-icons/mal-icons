<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 16 4.91 L 3.63 10.06 L 3 10.34 L 3 27 L 29 27 L 29 10.34 L 28.38 10.06 Z M 16 7.09 L 27 11.69 L 27 25 L 5 25 L 5 11.69 Z M 15 13 L 15 16 L 12 16 L 12 18 L 15 18 L 15 21 L 17 21 L 17 18 L 20 18 L 20 16 L 17 16 L 17 13 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
