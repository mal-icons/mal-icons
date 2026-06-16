<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M450-400h60v-130h130v-60H510v-130h-60v130H320v60h130v130ZM80-80v-800h800v640H240L80-80Zm60-220h680v-520H140v520Zm0 0v-520 520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
