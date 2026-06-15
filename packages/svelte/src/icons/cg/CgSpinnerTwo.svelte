<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"opacity":"0.2","fill-rule":"evenodd","clip-rule":"evenodd","d":"M12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5C8.13 5 5 8.13 5 12C5 15.87 8.13 19 12 19ZM12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z","fill":"currentColor"}],["path",{"d":"M12 22C17.52 22 22 17.52 22 12H19C19 15.87 15.87 19 12 19V22Z","fill":"currentColor"}],["path",{"d":"M2 12C2 6.48 6.48 2 12 2V5C8.13 5 5 8.13 5 12H2Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
