<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 19H21V21H3V19ZM13 13.17L19.07 7.1L20.49 8.51L12 17L3.51 8.51L4.93 7.1L11 13.17V2H13V13.17Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
