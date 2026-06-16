<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M740-40v-120H620v-60h120v-120h60v120h120v60H800v120h-60Zm0-399v-361h60v361h-60ZM160-160v-640h60v640h-60Zm290-493v-147h60v147h-60Zm0 246v-147h60v147h-60Zm0 247v-148h60v148h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
