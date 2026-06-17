<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 6.25c0 0.69-0.45 1.25-1 1.25s-1-0.56-1-1.25S5.45 5 6 5s1 0.56 1 1.25m3 1.25c0.55 0 1-0.56 1-1.25S10.55 5 10 5s-1 0.56-1 1.250.45 1.25 1 1.25m2.98 3.25A1.5 1.5 0 0 1 11.5 12h-7a1.5 1.5 0 0 1-1.48-1.75v0A1.5 1.5 0 0 1 4.5 9h7a1.5 1.5 0 0 1 1.48 1.75zm-8.480.75h0.25v-0.75H3.53a1 1 0 0 0 0.970.75m7 0a1 1 0 0 0 0.97-0.75H11.25v0.75zm0.97-1.25a1 1 0 0 0-0.97-0.75h-0.25v0.75zM4.5 9.5a1 1 0 0 0-0.970.75H4.75V9.5zm1.75 2v-0.75h-1v0.75zm0.5 0h1v-0.75h-1zm1.5 0h1v-0.75h-1zm1.5 0h1v-0.75h-1zm1-2h-1v0.75h1zm-1.5 0h-1v0.75h1zm-1.5 0h-1v0.75h1zm-1.5 0h-1v0.75h1z"}],["path",{"d":"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
