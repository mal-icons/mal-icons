<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 8 5 C 6.35 5 5 6.35 5 8 L 5 13 C 5 14.65 6.35 16 8 16 L 11.24 16 L 11.87 21.01 C 10.28 21.08 9 22.39 9 24 L 9 27 L 26 27 L 26 24 C 26 22.43 24.79 21.16 23.25 21.03 L 26.96 5 L 14 5 L 9.87 5 L 8 5 z M 8 7 L 10.12 7 L 10.99 14 L 8 14 C 7.45 14 7 13.55 7 13 L 7 8 C 7 7.45 7.45 7 8 7 z M 12.13 7 L 14 7 L 24.44 7 L 23.98 9 L 19 9 L 19 11 L 23.52 11 L 23.05 13 L 19 13 L 19 15 L 22.59 15 L 22.13 17 L 19 17 L 19 19 L 21.67 19 L 21.21 21 L 13.88 21 L 12.13 7 z M 12 23 L 23 23 C 23.55 23 24 23.45 24 24 L 24 25 L 11 25 L 11 24 C 11 23.45 11.45 23 12 23 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
