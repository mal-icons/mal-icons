<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-240v-480h800v480h-60v-100H630v100h-60v-420H140v420H80Zm550-320h190v-100H630v100Zm0 160h190v-100H630v100Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
