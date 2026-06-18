<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.85 3 3 8.85 3 16 C 3 23.15 8.85 29 16 29 C 23.15 29 29 23.15 29 16 C 29 8.85 23.15 3 16 3 z M 16 5 C 22.05 5 27 9.95 27 16 C 27 22.05 22.05 27 16 27 C 9.95 27 5 22.05 5 16 C 5 9.95 9.95 5 16 5 z M 16 8 C 14.9 8 14 8.9 14 10 C 14 11.1 14.9 12 16 12 C 17.1 12 18 11.1 18 10 C 18 8.9 17.1 8 16 8 z M 16 13 C 14.3 13 13 14.3 13 16 L 13 19 L 14 20 L 14 24 L 18 24 L 18 20 L 19 19 L 19 16 C 19 14.3 17.7 13 16 13 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
