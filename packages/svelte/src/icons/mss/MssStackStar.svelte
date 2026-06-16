<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m516-243 84-50 84 50-22-95 73-64-97-8-38-90-38 90-97 8 73 64-22 95ZM260-380v60H80v-560h560v180h-60v-120H140v440h120Zm60 300v-560h560v560H320Zm60-60h440v-440H380v440Zm220-220Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
