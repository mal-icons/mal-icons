<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-120v-720h720v400h-60v-340H180v600h340v60H120Zm460 0v-60h158L356-562l42-42 382 381v-157h60v260H580Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
