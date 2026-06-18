<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 3.72 2.28 L 2.28 3.72 L 28.28 29.72 L 29.72 28.28 L 23.44 22 C 24.4 20.94 25 19.54 25 18 L 25 14 L 23 14 L 23 18 C 23 18.99 22.64 19.9 22.03 20.59 L 20.63 19.19 C 20.86 18.86 21 18.44 21 18 L 21 6 C 21 4.9 20.1 4 19 4 L 13 4 C 11.9 4 11 4.9 11 6 L 11 9.56 Z M 13 6 L 19 6 L 19 17.56 L 13 11.56 Z M 7 14 L 7 18 C 7 21.31 9.69 24 13 24 L 15 24 L 15 26 L 11 26 L 11 28 L 21 28 L 21 26 L 17 26 L 17 24 L 19 24 C 19.25 24 19.5 23.97 19.75 23.94 L 17.81 22 L 13 22 C 10.79 22 9 20.21 9 18 L 9 14 Z M 11 15.19 L 11 18 C 11 19.1 11.9 20 13 20 L 15.81 20 L 13.81 18 L 13 18 L 13 17.19 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
