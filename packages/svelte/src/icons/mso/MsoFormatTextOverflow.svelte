<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M160-160v-640h60v640h-60Zm512-193-42-42 55-55H320v-60h365l-55-55 42-42 128 127-128 127ZM500-160v-190h60v190h-60Zm0-450v-190h60v190h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
