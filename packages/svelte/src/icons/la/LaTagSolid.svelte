<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 16 5 L 15.69 5.28 L 4.28 16.81 L 3.59 17.5 L 4.28 18.22 L 13.78 27.72 L 14.5 28.41 L 15.19 27.72 L 26.72 16.31 L 27 16 L 27 5 Z M 16.84 7 L 25 7 L 25 15.16 L 14.5 25.59 L 6.41 17.5 Z M 22 9 C 21.45 9 21 9.45 21 10 C 21 10.55 21.45 11 22 11 C 22.55 11 23 10.55 23 10 C 23 9.45 22.55 9 22 9 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
