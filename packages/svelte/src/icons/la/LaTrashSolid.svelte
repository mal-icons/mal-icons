<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 14 4 C 13.48 4 12.94 4.18 12.56 4.56 C 12.18 4.94 12 5.48 12 6 L 12 7 L 5 7 L 5 9 L 6.09 9 L 8 27.09 L 8.09 28 L 23.91 28 L 24 27.09 L 25.91 9 L 27 9 L 27 7 L 20 7 L 20 6 C 20 5.48 19.82 4.94 19.44 4.56 C 19.06 4.18 18.52 4 18 4 Z M 14 6 L 18 6 L 18 7 L 14 7 Z M 8.13 9 L 23.88 9 L 22.09 26 L 9.91 26 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 15 12 L 15 23 L 17 23 L 17 12 Z M 18 12 L 18 23 L 20 23 L 20 12 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
