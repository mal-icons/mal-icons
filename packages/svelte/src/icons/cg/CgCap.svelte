<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 18V20H16V18H8Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.99 3.22C14 3.15 14 3.07 14 3C14 1.9 13.1 1 12 1C10.9 1 10 1.9 10 3C10 3.07 10 3.15 10.01 3.22C6 4.13 3 7.71 3 12C3 12.39 3.02 12.77 3.07 13.15C1.87 13.54 1 14.67 1 16V20C1 21.66 2.34 23 4 23H20C21.66 23 23 21.66 23 20V16C23 14.67 22.13 13.54 20.93 13.15C20.98 12.77 21 12.39 21 12C21 7.71 18 4.13 13.99 3.22ZM12 5C8.13 5 5 8.13 5 12C5 12.34 5.02 12.67 5.07 13H18.93C18.98 12.67 19 12.34 19 12C19 8.13 15.87 5 12 5ZM3 16C3 15.45 3.45 15 4 15H20C20.55 15 21 15.45 21 16V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V16Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
