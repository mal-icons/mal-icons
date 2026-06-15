<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 3C4 2.17 4.94 1.7 5.6 2.2L13.6 8.2C14.37 8.78 13.96 10 13 10H9.05C8.74 10 8.45 10.14 8.26 10.39L5.8 13.61C5.21 14.36 4 13.95 4 13V3ZM13 9L5 3V13L7.47 9.78C7.85 9.29 8.43 9 9.05 9L13 9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
