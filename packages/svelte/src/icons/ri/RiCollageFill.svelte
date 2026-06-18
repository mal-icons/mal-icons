<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.19 13.26L12.57 21.11L4 21.11C3.45 21.11 3 20.66 3 20.11L3 14.71L11.19 13.26ZM20 3.11C20.55 3.11 21 3.55 21 4.11V20.11C21 20.66 20.55 21.11 20 21.11L14.6 21.11L11.43 3.11L20 3.11ZM9.4 3.11L10.84 11.29L3 12.68L3 4.11C3 3.55 3.45 3.11 4 3.11L9.4 3.11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
