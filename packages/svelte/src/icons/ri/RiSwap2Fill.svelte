<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.21 2.29L15.79 3.71L18.09 6H13V8H18.09L15.79 10.29L17.21 11.71L21.91 7L17.21 2.29ZM7 11.5C9.49 11.5 11.5 9.49 11.5 7C11.5 4.51 9.49 2.5 7 2.5C4.51 2.5 2.5 4.51 2.5 7C2.5 9.49 4.51 11.5 7 11.5ZM5.91 18L8.21 20.29L6.79 21.71L2.09 17L6.79 12.29L8.21 13.71L5.91 16H11V18H5.91ZM14 13C13.45 13 13 13.45 13 14V20C13 20.55 13.45 21 14 21H20C20.55 21 21 20.55 21 20V14C21 13.45 20.55 13 20 13H14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
