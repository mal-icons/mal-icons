<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 z M 16 5 C 22.07 5 27 9.94 27 16 C 27 22.07 22.07 27 16 27 C 9.94 27 5 22.07 5 16 C 5 9.94 9.94 5 16 5 z M 14.5 9 L 11 10.33 L 11 13.95 L 11.06 13.98 L 11 14 L 8 15.14 L 8 18.52 L 11 20 L 14 18.59 L 14 18.59 L 20.5 21.01 L 24 19.68 L 24 16.05 L 21 14.94 L 21 11.42 L 14.5 9 z M 19.71 15.53 L 22.08 16.41 L 20.5 17.01 L 18.13 16.13 L 19.71 15.53 z M 15 16.03 L 20 17.89 L 20 19.75 L 15 17.9 L 15 16.03 z M 23 17.13 L 23 18.99 L 21 19.75 L 21 17.89 L 23 17.13 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
