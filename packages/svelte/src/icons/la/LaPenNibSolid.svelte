<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 22 3.59 L 17.48 8.11 L 10.74 10.04 C 9.42 10.39 8.37 11.38 7.94 12.69 L 3.86 25.27 L 5.29 26.71 L 6.73 28.14 L 19.32 24.06 C 20.62 23.63 21.61 22.58 21.96 21.27 L 23.89 14.53 L 28.41 10 L 22 3.59 z M 22 6.41 L 25.59 10 L 23 12.59 L 19.41 9 L 22 6.41 z M 17.71 10.13 L 21.88 14.29 L 20.03 20.74 C 19.85 21.41 19.35 21.94 18.7 22.16 L 7.69 25.72 L 13.48 19.93 A 2 2 0 0 0 14 20 A 2 2 0 0 0 14 16 A 2 2 0 0 0 12.07 18.52 L 6.28 24.31 L 9.84 13.31 C 10.06 12.65 10.59 12.15 11.28 11.96 L 17.71 10.13 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
