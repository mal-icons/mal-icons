<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M15 16C15 17.66 13.66 19 12 19C10.34 19 9 17.66 9 16C9 14.34 10.34 13 12 13C13.66 13 15 14.34 15 16ZM13 16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16C11 15.45 11.45 15 12 15C12.55 15 13 15.45 13 16Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M15 1H9V3H11V5H7C4.79 5 3 6.79 3 9V19C3 21.21 4.79 23 7 23H17C19.21 23 21 21.21 21 19V9C21 6.79 19.21 5 17 5H13V3H15V1ZM17 7H7C5.9 7 5 7.9 5 9H19C19 7.9 18.1 7 17 7ZM19 11H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V11Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
