<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M575-160v-60h123L524-395l42-42 174 174v-122h60v225H575ZM160-448v-60h306l232-232H575v-60h225v225h-60v-122L491-448H160Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
