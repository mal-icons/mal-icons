<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.5 2L3.5 12L6.59 15.08L19.67 2H13.5ZM13.5 11.2L8.12 16.62L13.5 22H19.68L14.3 16.6L19.69 11.2L13.5 11.2Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
