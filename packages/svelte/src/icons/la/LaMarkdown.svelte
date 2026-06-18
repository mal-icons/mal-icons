<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 2.88 6 C 1.32 6 0 7.25 0 8.81 L 0 23.19 C 0 24.75 1.32 26 2.88 26 L 29.13 26 C 30.68 26 32 24.75 32 23.19 L 32 8.81 C 32 7.25 30.68 6 29.13 6 Z M 2.88 8 L 29.13 8 C 29.64 8 30 8.38 30 8.81 L 30 23.19 C 30 23.62 29.64 24 29.13 24 L 2.88 24 C 2.36 24 2 23.62 2 23.19 L 2 8.81 C 2 8.38 2.36 8 2.88 8 Z M 5 11 L 5 21 L 8 21 L 8 14.34 L 11 18.31 L 14 14.34 L 14 21 L 17 21 L 17 11 L 14 11 L 11 15 L 8 11 Z M 22 11 L 22 16 L 19 16 L 23.5 21 L 28 16 L 25 16 L 25 11 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
