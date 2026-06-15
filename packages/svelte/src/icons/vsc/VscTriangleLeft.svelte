<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.43 11.84C10.09 12.3 11 11.83 11 11.02V4.98C11 4.17 10.09 3.7 9.43 4.16L5.64 6.78C4.79 7.37 4.79 8.63 5.64 9.22L9.43 11.84Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
