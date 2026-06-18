<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 3.11C20.55 3.11 21 3.55 21 4.11V20.11C21 20.66 20.55 21.11 20 21.11H4C3.45 21.11 3 20.66 3 20.11V4.11C3 3.55 3.45 3.11 4 3.11H20ZM11.19 13.27L5 14.36V19.11H12.22L11.19 13.27ZM19 5.11H11.78L14.25 19.11H19V5.11ZM9.75 5.11H5V12.32L10.84 11.3L9.75 5.11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
