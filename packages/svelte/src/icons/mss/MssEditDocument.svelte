<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M160-80v-800h400l240 240v156h-60v-116H520v-220H220v680h300v60H160Zm60-60v-680 680Zm536-223 28 28-164 164v51h51l164-164 28 28L687-80H580v-107l176-176Zm107 107L756-363l82-82 107 107-82 82Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
