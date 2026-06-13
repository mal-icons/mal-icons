<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"data-name":"Circle Plus"}],["path",{"d":"M15,12.5H12.5V15a0.50.5,0,0,1-1,0V12.5H9a0.50.5,0,0,1,0-1h2.5V9a0.50.5,0,0,1,1,0v2.5H15A0.50.5,0,0,1,15,12.5Z"}],["path",{"d":"M12,21.93A9.93,9.93,0,1,1,21.93,12,9.94,9.94,0,0,1,12,21.93ZM12,3.07A8.93,8.93,0,1,0,20.93,12,8.94,8.94,0,0,0,12,3.07Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
