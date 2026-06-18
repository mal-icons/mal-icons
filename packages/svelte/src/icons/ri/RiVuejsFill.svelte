<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1 3H5L12 15L19 3H23L12 22L1 3ZM9.67 3L12 7L14.33 3H18.37L12 14L5.63 3H9.67Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
