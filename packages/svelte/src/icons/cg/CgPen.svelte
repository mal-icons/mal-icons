<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M21.26 2.29C20.87 1.9 20.24 1.9 19.85 2.29L18.98 3.17C17.86 2.63 16.49 2.83 15.56 3.75L4.96 14.36L10.61 20.02L21.22 9.41C22.14 8.48 22.34 7.11 21.81 5.99L22.68 5.12C23.07 4.73 23.07 4.1 22.68 3.71L21.26 2.29ZM17 10.8L10.61 17.19L7.78 14.36L14.17 7.98L17 10.8ZM18.81 8.99L19.8 7.99C20.2 7.6 20.2 6.97 19.8 6.58L18.39 5.17C18 4.78 17.37 4.78 16.98 5.17L15.99 6.16L18.81 8.99Z","fill":"currentColor"}],["path",{"d":"M2 22.95L4.12 15.17L9.78 20.83L2 22.95Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
