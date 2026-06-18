<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M229.66,101.66a8,8,0,0,1-11.32,0L184,67.31V192a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H168V67.31l-34.34,34.35a8,8,0,0,1-11.32-11.32l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,229.66,101.66Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 256 256" {nodes} {...props} />
