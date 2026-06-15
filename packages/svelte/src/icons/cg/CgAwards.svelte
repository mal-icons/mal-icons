<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M19 9C19 11.38 17.81 13.48 16 14.75V22H13.41L12 20.59L10.59 22H8V14.75C6.19 13.48 5 11.38 5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9ZM17 9C17 11.76 14.76 14 12 14C9.24 14 7 11.76 7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9ZM10 19.76L12 17.76L14 19.76V15.71C13.37 15.9 12.7 16 12 16C11.31 16 10.63 15.9 10 15.71V19.76Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
