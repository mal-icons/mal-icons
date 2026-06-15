<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.39 10.44L14.81 9.02C14.1 8.38 13.17 8 12.15 8C9.94 8 8.15 9.79 8.15 12C8.15 14.21 9.94 16 12.15 16C13.26 16 14.26 15.55 14.99 14.82L13.67 13.5L13.46 13.5C13.11 13.81 12.65 14 12.15 14C11.04 14 10.15 13.1 10.15 12C10.15 10.9 11.04 10 12.15 10C12.62 10 13.05 10.16 13.39 10.44Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12 3C16.97 3 21 7.03 21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3ZM12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
