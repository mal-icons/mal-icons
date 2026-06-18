<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"7.5","cy":"11.5","r":"2.5"}],["path",{"d":"M17.2 7H12a1 1 0 0 0-1 1v7H4V6H2v14h2v-3h16v3h2v-8.2A4.8 4.8 0 0 0 17.2 7zM13 15V9h4.21A2.8 2.8 0 0 1 20 11.8V15h-7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
