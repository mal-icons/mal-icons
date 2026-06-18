<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m24 12.01-6 6V6L24 12.01zm-6-6.01H6.01l6 6.01 6-6.01zM0 12.01l6.01 6V6L0 12.01zm6.01 6h11.99l-6-6-6 6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
