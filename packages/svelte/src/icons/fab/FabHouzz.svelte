<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 448 512" {nodes} {...props} />
