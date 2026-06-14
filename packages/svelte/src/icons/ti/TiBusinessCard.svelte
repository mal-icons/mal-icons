<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 20h-16c-1.65 0-3-1.35-3-3v-10c0-1.65 1.35-3 3-3h16c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3zm-16-14c-0.55 0-1 0.45-1 1v10c0 0.550.45 1 1 1h16c0.55 0 1-0.45 1-1v-10c0-0.55-0.45-1-1-1h-16zM10 15h-4c-0.55 0-1-0.45-1-1s0.45-1 1-1h4c0.55 0 1 0.45 1 1s-0.45 1-1 1zM10 11h-4c-0.55 0-1-0.45-1-1s0.45-1 1-1h4c0.55 0 1 0.45 1 1s-0.45 1-1 1z"}],["circle",{"cx":"16","cy":"10.5","r":"2"}],["path",{"d":"M16 13.36c-1.56 0-2.50.72-2.5 1.43 0 0.360.940.72 2.50.72 1.47 0 2.5-0.36 2.5-0.71 0-0.71-0.98-1.43-2.5-1.43z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
