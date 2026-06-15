<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.98 12L4.73 7.76L3.32 9.17L6.15 12L3.32 14.83L4.73 16.24L8.98 12Z","fill":"currentColor"}],["path",{"d":"M12 19C11.45 19 11 18.55 11 18V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V18C13 18.55 12.55 19 12 19Z","fill":"currentColor"}],["path",{"d":"M15.02 12L19.27 16.24L20.68 14.83L17.85 12L20.68 9.17L19.27 7.76L15.02 12Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
