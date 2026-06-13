<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"data-name":"Text Align Right"}],["path",{"d":"M20.44,4.06H3.56a0.50.5,0,0,1,0-1H20.44a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M20.44,8.5h-9a0.50.5,0,1,1,0-1h9a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M20.44,16.5h-9a0.50.5,0,1,1,0-1h9a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M20.44,12.5H3.56a0.50.5,0,0,1,0-1H20.44a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M20.44,20.94H3.56a0.50.5,0,1,1,0-1H20.44a0.50.5,0,1,1,0,1Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
