<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.86 15.68c1.93 0 3.49 1.53 3.49 3.41 0 1.88-1.56 3.41-3.49 3.41-1.93 0-3.49-1.53-3.49-3.41 0-1.88 1.56-3.41 3.49-3.41ZM24 14.88 12 1.51 0 14.89l3.16 3.52L12 8.55l8.84 9.86L24 14.89Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
