<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 0.9-2 2v7c0 0.550.22 1.050.59 1.42l9 9c0.360.360.860.58 1.410.58s1.05-0.22 1.41-0.59l7-7c0.37-0.360.59-0.860.59-1.41s-0.23-1.06-0.59-1.42zM13 20.01 4 11V4h7v-0.01l9 9-7 7.02z"}],["circle",{"cx":"6.5","cy":"6.5","r":"1.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
