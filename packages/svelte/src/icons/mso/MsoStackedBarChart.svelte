<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M160-160v-440h140v440H160Zm0-500v-140h140v140H160Zm250 500v-320h140v320H410Zm0-380v-140h140v140H410Zm250 380v-200h140v200H660Zm0-260v-140h140v140H660Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
