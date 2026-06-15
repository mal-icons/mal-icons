<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.75 8H2.25C1.01 8 0 6.99 0 5.75C0 4.58 0.9 3.62 2.04 3.51C2.27 2.09 3.51 1 5 1C6.49 1 7.73 2.09 7.96 3.51C9.1 3.62 10 4.58 10 5.75C10 6.99 8.99 8 7.75 8ZM2.25 4.5C1.56 4.5 1 5.06 1 5.75C1 6.44 1.56 7 2.25 7H7.75C8.44 7 9 6.44 9 5.75C9 5.06 8.44 4.5 7.75 4.5H7.5C7.22 4.5 7 4.28 7 4C7 2.9 6.1 2 5 2C3.9 2 3 2.9 3 4C3 4.28 2.78 4.5 2.5 4.5H2.25Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 10 10" {nodes} {...props} />
