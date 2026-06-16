<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M820-480H140q-24.75 0-42.37-17.62T80-540v-280q0-24.75 17.63-42.37T140-880h680q24.75 0 42.38 17.63T880-820v280q0 24.75-17.62 42.38T820-480ZM170-201v-60q50 0 85-34.71 35-34.71 35-84.29h60q0 75-52.65 127T170-201Zm620 0q-75 0-127-52t-52-127h60q0 50 34.71 84.5Q740.42-261 790-261v60Zm-340 41v-220h60v220h-60Zm370-380H140h680Zm-570 0v-110q0-24.75 17.63-42.37T310-710h340q24.75 0 42.38 17.63T710-650v110h-60v-110H310v110h-60Zm-110 0h680v-280H140v280Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
