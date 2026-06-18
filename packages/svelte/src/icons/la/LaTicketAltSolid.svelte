<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 2 7 L 2 14 L 3 14 C 4.19 14 5 14.81 5 16 C 5 17.19 4.19 18 3 18 L 2 18 L 2 25 L 30 25 L 30 18 L 29 18 C 27.81 18 27 17.19 27 16 C 27 14.81 27.81 14 29 14 L 30 14 L 30 7 Z M 4 9 L 28 9 L 28 12.19 C 26.29 12.64 25 14.14 25 16 C 25 17.86 26.29 19.36 28 19.81 L 28 23 L 4 23 L 4 19.81 C 5.71 19.36 7 17.86 7 16 C 7 14.14 5.71 12.64 4 12.19 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
