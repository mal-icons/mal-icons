<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-40v-480h250v-400h220v400h250v480H120Zm60-60h105v-160h60v160h105v-160h60v160h105v-160h60v160h105v-360H180v360Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
