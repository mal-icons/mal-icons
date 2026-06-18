<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 14.14 3 12.6 4.28 12.16 6 L 3 6 L 3 26 L 29 26 L 29 6 L 19.84 6 C 19.4 4.28 17.86 3 16 3 Z M 16 5 C 16.81 5 17.43 5.39 17.75 6 L 14.25 6 C 14.57 5.39 15.19 5 16 5 Z M 5 8 L 27 8 L 27 17 L 5 17 Z M 16 14 C 15.45 14 15 14.45 15 15 C 15 15.55 15.45 16 16 16 C 16.55 16 17 15.55 17 15 C 17 14.45 16.55 14 16 14 Z M 5 19 L 27 19 L 27 24 L 5 24 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
