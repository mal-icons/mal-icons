<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M340-497 140-697v177H80v-280h280v60H182l201 200-43 43ZM80-160v-290h60v230h340v60H80Zm740-280v-300H430v-60h450v360h-60Zm60 60v220H540v-220h340Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
