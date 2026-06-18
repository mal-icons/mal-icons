<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 7.54L15 21.54L18.66 13H23V11H17.34L15 16.46L9 2.46L5.34 11H1V13H6.66L9 7.54Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
