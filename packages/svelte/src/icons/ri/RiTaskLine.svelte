<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 4H5V20H19V4ZM3 2.99C3 2.44 3.45 2 4 2H20C20.55 2 21 2.45 21 3L21 20.99C21 21.55 20.56 22 20.01 22H3.99C3.44 22 3 21.54 3 21.01V2.99ZM11.29 13.12L15.54 8.88L16.95 10.29L11.29 15.95L7.4 12.06L8.82 10.65L11.29 13.12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
