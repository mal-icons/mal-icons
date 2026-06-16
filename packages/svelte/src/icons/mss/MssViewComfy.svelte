<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-160v-640h800v640H80Zm740-350v-230H140v230h680ZM383-220h437v-230H383v230Zm-243 0h183v-230H140v230Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
