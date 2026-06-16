<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M160-80v-800h400l240 240v270h-60v-230H520v-220H220v680h410v60H160Zm718 1L750-207v125h-60v-228h228v60H792l128 128-42 43Zm-658-61v-680 680Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
