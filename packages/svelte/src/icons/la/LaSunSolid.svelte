<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 15 3 L 15 8 L 17 8 L 17 3 Z M 7.5 6.09 L 6.09 7.5 L 9.63 11.06 L 11.06 9.63 Z M 24.5 6.09 L 20.94 9.63 L 22.38 11.06 L 25.91 7.5 Z M 16 9 C 12.14 9 9 12.14 9 16 C 9 19.86 12.14 23 16 23 C 19.86 23 23 19.86 23 16 C 23 12.14 19.86 9 16 9 Z M 16 11 C 18.77 11 21 13.23 21 16 C 21 18.77 18.77 21 16 21 C 13.23 21 11 18.77 11 16 C 11 13.23 13.23 11 16 11 Z M 3 15 L 3 17 L 8 17 L 8 15 Z M 24 15 L 24 17 L 29 17 L 29 15 Z M 9.63 20.94 L 6.09 24.5 L 7.5 25.91 L 11.06 22.38 Z M 22.38 20.94 L 20.94 22.38 L 24.5 25.91 L 25.91 24.5 Z M 15 24 L 15 29 L 17 29 L 17 24 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
