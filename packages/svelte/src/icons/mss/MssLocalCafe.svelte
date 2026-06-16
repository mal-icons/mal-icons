<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M160-120v-60h639v60H160Zm0-120v-600h660q24.75 0 42.38 17.63T880-780v160q0 24.75-17.62 42.38T820-560h-96v320H160Zm60-60h444v-480H220v480Zm504-320h96v-160h-96v160Zm-282 80Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
