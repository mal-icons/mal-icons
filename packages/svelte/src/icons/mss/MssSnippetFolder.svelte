<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-160v-640h341l60 60h399v580H80Zm60-60h680v-460H456l-60-60H140v520Zm0 0v-520 520Zm420-120v-220h75l65 65v155H560Zm-60 60h260v-240L660-620H500v340Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
