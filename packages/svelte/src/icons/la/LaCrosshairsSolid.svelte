<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 15 3 L 15 5.06 C 9.73 5.54 5.54 9.73 5.06 15 L 3 15 L 3 17 L 5.06 17 C 5.54 22.27 9.73 26.46 15 26.94 L 15 29 L 17 29 L 17 26.94 C 22.27 26.46 26.46 22.27 26.94 17 L 29 17 L 29 15 L 26.94 15 C 26.46 9.73 22.27 5.54 17 5.06 L 17 3 Z M 15 7.03 L 15 9 L 17 9 L 17 7.03 C 21.19 7.48 24.52 10.81 24.97 15 L 23 15 L 23 17 L 24.97 17 C 24.52 21.19 21.19 24.52 17 24.97 L 17 23 L 15 23 L 15 24.97 C 10.81 24.52 7.48 21.19 7.03 17 L 9 17 L 9 15 L 7.03 15 C 7.48 10.81 10.81 7.48 15 7.03 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
