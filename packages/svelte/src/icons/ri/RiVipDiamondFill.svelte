<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.88 3H19.13C19.45 3 19.75 3.16 19.94 3.41L23.76 8.67C23.9 8.86 23.89 9.13 23.73 9.3L12.37 21.6C12.18 21.81 11.87 21.82 11.67 21.63C11.66 21.62 11.65 21.61 11.64 21.6L0.28 9.3C0.12 9.13 0.11 8.86 0.25 8.67L4.07 3.41C4.26 3.16 4.56 3 4.88 3Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
