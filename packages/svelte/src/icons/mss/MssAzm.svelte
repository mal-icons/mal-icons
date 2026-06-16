<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M400-40v-360H40l400-400h360v360L400-40Zm230-314 110-110v-276H464L354-630h276v276ZM460-184l110-110v-276H294L184-460h276v276Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
