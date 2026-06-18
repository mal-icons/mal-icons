<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 2H14.5C17.81 2 20.5 4.69 20.5 8C20.5 10.2 19.32 12.12 17.55 13.17C19.04 14.26 20 16.02 20 18V21H18V18C18 15.79 16.21 14 14 14H4V12H14.5C16.71 12 18.5 10.21 18.5 8C18.5 5.79 16.71 4 14.5 4H4V2ZM11 21H4V19H11V21Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
