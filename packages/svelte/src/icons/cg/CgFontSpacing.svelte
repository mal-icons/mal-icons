<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 21H21V3H19L19 21Z","fill":"currentColor"}],["path",{"d":"M5 21H3V3H5L5 21Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M9.46 16.05L9.95 15H14.05L14.54 16.05C14.77 16.55 15.36 16.76 15.86 16.53C16.37 16.3 16.58 15.7 16.35 15.2L12.97 7.95C12.79 7.57 12.4 7.35 12 7.38C11.6 7.35 11.21 7.57 11.03 7.95L7.65 15.2C7.42 15.7 7.63 16.3 8.14 16.53C8.64 16.76 9.23 16.55 9.46 16.05ZM12 10.61L10.89 13H13.11L12 10.61Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
