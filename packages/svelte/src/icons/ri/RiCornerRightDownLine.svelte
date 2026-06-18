<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 5L5 5L5 7L12 7L12 17.17L8.05 13.22L6.64 14.64L13 21L19.36 14.64L17.95 13.22L14 17.17L14 5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
