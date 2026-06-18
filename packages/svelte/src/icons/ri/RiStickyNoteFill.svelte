<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 14L14.88 14.01C14.42 14.06 14.06 14.42 14.01 14.88L14 15V21H4C3.45 21 3 20.56 3 20.01V3.99C3 3.44 3.44 3 3.99 3H20.01C20.56 3 21 3.45 21 4V14H15ZM21 16L16 21V16H21Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
