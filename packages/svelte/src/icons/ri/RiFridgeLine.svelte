<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 1C19.55 1 20 1.45 20 2V22C20 22.55 19.55 23 19 23H5C4.45 23 4 22.55 4 22V2C4 1.45 4.45 1 5 1H19ZM18 12H6V21H18V12ZM10 14V18H8V14H10ZM18 3H6V10H18V3ZM10 5V8H8V5H10Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
