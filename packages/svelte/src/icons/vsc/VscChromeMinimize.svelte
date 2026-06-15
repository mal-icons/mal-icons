<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 7.5C3 7.22 3.22 7 3.5 7H12.5C12.78 7 13 7.22 13 7.5C13 7.78 12.78 8 12.5 8H3.5C3.22 8 3 7.78 3 7.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
