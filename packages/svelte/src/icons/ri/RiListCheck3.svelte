<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 6V9H5V6H8ZM3 4V11H10V4H3ZM13 4H21V6H13V4ZM13 11H21V13H13V11ZM13 18H21V20H13V18ZM10.71 16.21L9.29 14.79L6 18.09L4.21 16.29L2.79 17.71L6 20.91L10.71 16.21Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
