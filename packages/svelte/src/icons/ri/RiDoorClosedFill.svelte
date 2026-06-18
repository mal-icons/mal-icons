<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 21V19H5V4C5 3.45 5.45 3 6 3H18C18.55 3 19 3.45 19 4V19H21V21H3ZM15 11H13V13H15V11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
