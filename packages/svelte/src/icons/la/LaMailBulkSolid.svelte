<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 6 5 L 6 15 L 2 15 L 2 28 L 19 28 L 19 24 L 30 24 L 30 11 L 23 11 L 23 5 L 6 5 z M 8 7 L 21 7 L 21 11 L 12 11 L 12 15 L 8 15 L 8 7 z M 14 13 L 28 13 L 28 22 L 19 22 L 19 15 L 14 15 L 14 13 z M 23 15 L 23 17 L 26 17 L 26 15 L 23 15 z M 4 17 L 6 17 L 13 17 L 17 17 L 17 18.11 L 10.96 21.87 C 10.68 22.04 10.32 22.04 10.04 21.87 L 4 18.12 L 4 17 z M 17 20.47 L 17 26 L 4 26 L 4 20.47 L 8.98 23.57 C 9.45 23.86 9.98 24 10.5 24 C 11.02 24 11.55 23.86 12.02 23.56 L 17 20.47 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
