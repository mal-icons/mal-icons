<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-120v-720h720v150h-60v-90H180v600h600v-90h60v150H120Zm573-174-42-42 113-114H383v-60h381L651-624l42-42 186 186-186 186Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
