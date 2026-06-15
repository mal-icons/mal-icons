<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.98 9C10.98 9.55 10.53 10 9.98 10C9.42 10 8.98 9.55 8.98 9C8.98 8.45 9.42 8 9.98 8C10.53 8 10.98 8.45 10.98 9Z","fill":"currentColor"}],["path",{"d":"M13.97 10C14.52 10 14.97 9.55 14.97 9C14.97 8.45 14.52 8 13.97 8C13.42 8 12.97 8.45 12.97 9C12.97 9.55 13.42 10 13.97 10Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M19 21V10C19 6.13 15.87 3 12 3C8.13 3 5 6.13 5 10V21L7.83 21L9.24 19.59L10.66 21L13.34 21L14.76 19.59L16.17 21L19 21ZM17 10C17 7.24 14.76 5 12 5C9.24 5 7 7.24 7 10V19L9.24 16.76L12 19.51L14.76 16.76L17 19V10Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
