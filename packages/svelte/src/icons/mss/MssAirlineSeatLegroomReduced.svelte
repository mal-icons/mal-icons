<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M577-120v-109l46-181H250v-430h220v250h220q29 0 49 20t21 49l-86 301h126v100H577ZM120-280v-560h60v500h300v60H120Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
