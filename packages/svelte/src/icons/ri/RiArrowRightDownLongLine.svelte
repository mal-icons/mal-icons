<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.22 5.64L5.64 4.22L17.07 15.66V10.07H19.07L19.07 19.07L10.07 19.07L10.07 17.07L15.66 17.07L4.22 5.64Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
