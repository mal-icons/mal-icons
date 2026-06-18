<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 16 2 C 14.74 2 13.85 2.89 13.41 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59 4 C 18.15 2.89 17.26 2 16 2 Z M 16 4 C 16.55 4 17 4.45 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.45 15.45 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28 13.28 L 15 19.56 L 11.72 16.28 L 10.28 17.72 L 14.28 21.72 L 15 22.41 L 15.72 21.72 L 22.72 14.72 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
