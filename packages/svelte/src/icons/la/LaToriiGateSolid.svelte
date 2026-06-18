<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 2.94 4.97 L 2.94 6.78 L 3.25 7.09 L 7.25 10.75 L 7.56 11 L 9 11 L 9 14 L 7 14 L 7 16 L 9 16 L 9 27 L 11 27 L 11 16 L 21 16 L 21 27 L 23 27 L 23 16 L 25 16 L 25 14 L 23 14 L 23 11 L 24.38 11 L 24.69 10.75 L 28.69 7.09 L 29 6.78 L 29 4.97 L 27.78 5.25 C 27.75 5.26 23.53 6 16 6 C 8.47 6 4.19 5.26 4.16 5.25 Z M 6.78 7.56 C 8.89 7.77 11.91 8 16 8 C 20.05 8 23.06 7.77 25.16 7.56 L 23.59 9 L 8.34 9 Z M 11 11 L 14 11 L 14 14 L 11 14 Z M 18 11 L 21 11 L 21 14 L 18 14 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
