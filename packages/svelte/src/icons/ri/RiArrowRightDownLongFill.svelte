<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.64 4.22L4.22 5.64L13.83 15.24L10 19.07L19.07 19.07L19.07 10L15.24 13.83L5.64 4.22Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
