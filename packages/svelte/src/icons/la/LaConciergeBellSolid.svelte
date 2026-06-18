<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 13 6 L 13 8 L 19 8 L 19 6 Z M 16 9 C 9.7 9 4.57 13.84 4.06 20 L 2 20 L 2 25 L 30 25 L 30 20 L 27.94 20 C 27.43 13.84 22.3 9 16 9 Z M 16 11 C 21.23 11 25.45 14.91 25.94 20 L 6.06 20 C 6.55 14.91 10.77 11 16 11 Z M 4 22 L 28 22 L 28 23 L 4 23 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
