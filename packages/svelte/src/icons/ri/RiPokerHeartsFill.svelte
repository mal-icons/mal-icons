<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 8.5C2 5.46 4.46 3 7.5 3C9.36 3 11 3.92 12 5.34C13 3.92 14.64 3 16.5 3C19.54 3 22 5.46 22 8.5C22 16 12 21.49 12 21.49C12 21.49 2 16 2 8.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
