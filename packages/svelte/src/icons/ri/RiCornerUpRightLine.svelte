<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 10L5 19L7 19L7 12L17.17 12L13.22 15.95L14.64 17.36L21 11L14.64 4.64L13.22 6.05L17.17 10L5 10Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
