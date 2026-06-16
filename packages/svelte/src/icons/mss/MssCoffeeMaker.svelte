<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M160-80v-800h640v60H693v100H329v-100H220v680h188q-38-26-58.5-63T329-293v-193h364v193q0 53-21 90t-59 63h187v60H160Zm350.5-86q51.5 0 87-37.04Q633-240.08 633-293v-133H389v133q0 52.92 35 89.96Q459-166 510.5-166Zm-0.5-394q16.58 0 27.79-11.21Q549-582.42 549-599t-11.21-27.79Q526.58-638 510-638t-27.79 11.21Q471-615.58 471-599t11.21 27.79Q493.43-560 510-560Zm1 134Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
