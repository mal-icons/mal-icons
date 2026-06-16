<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M813-61 279-595 166-482l197 197-43 43L80-482l156-156L61-813l43-43 752 752-43 43Zm-91-263-43-43 115-115-197-197 43-43 240 240-158 158Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
