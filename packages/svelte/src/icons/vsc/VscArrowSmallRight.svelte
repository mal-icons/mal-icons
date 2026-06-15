<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.85 9.85L10.85 7.85C11.05 7.66 11.05 7.34 10.85 7.15L8.85 5.15C8.66 4.95 8.34 4.95 8.15 5.15C7.95 5.34 7.95 5.66 8.15 5.85L9.29 7H4.5C4.22 7 4 7.22 4 7.5C4 7.78 4.22 8 4.5 8H9.29L8.15 9.15C8.05 9.24 8 9.37 8 9.5C8 9.63 8.05 9.76 8.15 9.85C8.34 10.05 8.66 10.05 8.85 9.85Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
