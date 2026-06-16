<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-120v-720h720v720H120Zm60-500h600v-160H180v160Zm0 220h600v-160H180v160Zm0 220h600v-160H180v160Zm63-490v-60h60v60h-60Zm0 220v-60h60v60h-60Zm0 220v-60h60v60h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
