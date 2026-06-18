<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 5L19 5L19 7L12 7L12 17.17L15.95 13.22L17.36 14.64L11 21L4.64 14.64L6.05 13.22L10 17.17L10 5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
