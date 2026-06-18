<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 Z M 16 5 C 22.09 5 27 9.91 27 16 C 27 18.73 26.01 21.21 24.38 23.13 L 9.03 7.47 C 10.93 5.92 13.35 5 16 5 Z M 7.63 8.88 L 22.97 24.53 C 21.07 26.08 18.65 27 16 27 C 9.91 27 5 22.09 5 16 C 5 13.27 5.99 10.79 7.63 8.88 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
