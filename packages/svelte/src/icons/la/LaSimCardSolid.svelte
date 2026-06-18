<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 9 4 C 8.48 4 7.94 4.18 7.56 4.56 C 7.18 4.94 7 5.48 7 6 L 7 26 C 7 26.52 7.18 27.06 7.56 27.44 C 7.94 27.82 8.48 28 9 28 L 23 28 C 23.52 28 24.06 27.82 24.44 27.44 C 24.82 27.06 25 26.52 25 26 L 25 11.41 C 25 10.88 24.72 10.32 24.41 10 L 19 4.59 C 18.68 4.28 18.12 4 17.59 4 Z M 9 6 L 17.59 6 L 23 11.41 L 23 26 L 9 26 Z M 11 15 L 11 24 L 21 24 L 21 15 Z M 13 17 L 19 17 L 19 22 L 13 22 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
