<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 13.5C12 13.78 11.78 14 11.5 14H3.5C3.22 14 3 13.78 3 13.5C3 13.22 3.22 13 3.5 13H11.5C11.78 13 12 13.22 12 13.5ZM7.15 11.85C7.34 12.05 7.66 12.05 7.85 11.85L11.85 7.85C12.05 7.66 12.05 7.34 11.85 7.15C11.66 6.95 11.34 6.95 11.15 7.15L8 10.29V1.5C8 1.22 7.78 1 7.5 1C7.22 1 7 1.22 7 1.5V10.29L3.85 7.15C3.66 6.95 3.34 6.95 3.15 7.15C2.95 7.34 2.95 7.66 3.15 7.85L7.15 11.85L7.15 11.85Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
