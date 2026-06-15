<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 0C2.69 0 0 2.69 0 6C0 9.31 2.69 12 6 12C9.31 12 12 9.31 12 6C12 2.69 9.31 0 6 0ZM1 6C1 3.24 3.24 1 6 1C7.2 1 8.3 1.42 9.16 2.13L2.13 9.16C1.43 8.3 1 7.2 1 6L1 6ZM6 11C4.8 11 3.7 10.58 2.84 9.87L9.87 2.84C10.58 3.7 11 4.8 11 6C11 8.76 8.76 11 6 11L6 11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 12 12" {nodes} {...props} />
