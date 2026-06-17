<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M105 105v302h151c148 0 148-302 0-302H105zm-89 46v18h71v-18H16zm368.8 96c0.2 6 0.2 12 0 18H496v-18H384.8zM16 343v18h71v-18H16z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
