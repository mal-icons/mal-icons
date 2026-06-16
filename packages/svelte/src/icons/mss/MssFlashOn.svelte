<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m460-272 186-268H520l81-280H340v360h120v188ZM400-80v-320H280v-480h400l-80 280h160L400-80Zm60-380H340h120Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
