<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 16V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V16H22ZM21 3C21.55 3 22 3.45 22 4V14H2V4C2 3.45 2.45 3 3 3H21Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
