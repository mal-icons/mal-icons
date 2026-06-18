<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.59 5H14V3H21V10H19V6.41L14.71 10.71L13.29 9.29L17.59 5ZM3 14H5V17.59L9.29 13.29L10.71 14.71L6.41 19H10V21H3V14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
