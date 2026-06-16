<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M383-528h60v-157h-60v157Zm119 0h60v-157h-60v157Zm119 0h60v-157h-60v157ZM160-80v-561l239-239h401v800H160Zm60-60h520v-680H426L220-613.87V-140Zm0 0h520-520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
