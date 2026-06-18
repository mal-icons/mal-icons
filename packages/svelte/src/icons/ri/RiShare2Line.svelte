<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2.59L18.21 8.79L16.79 10.21L13 6.41V16H11V6.41L7.21 10.21L5.79 8.79L12 2.59ZM3 18V14H5V18C5 18.55 5.45 19 6 19H18C18.55 19 19 18.55 19 18V14H21V18C21 19.66 19.66 21 18 21H6C4.34 21 3 19.66 3 18Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
