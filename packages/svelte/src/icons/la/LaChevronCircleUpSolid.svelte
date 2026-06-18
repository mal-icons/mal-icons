<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 Z M 16 5 C 22.09 5 27 9.91 27 16 C 27 22.09 22.09 27 16 27 C 9.91 27 5 22.09 5 16 C 5 9.91 9.91 5 16 5 Z M 16 11.09 L 15.28 11.78 L 9.28 17.78 L 10.72 19.22 L 16 13.94 L 21.28 19.22 L 22.72 17.78 L 16.72 11.78 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
