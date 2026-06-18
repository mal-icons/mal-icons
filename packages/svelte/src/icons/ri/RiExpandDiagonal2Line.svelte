<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.41 5H10V3H3V10H5V6.41L9.29 10.71L10.71 9.29L6.41 5ZM21 14H19V17.59L14.71 13.29L13.29 14.71L17.59 19H14V21H21V14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
