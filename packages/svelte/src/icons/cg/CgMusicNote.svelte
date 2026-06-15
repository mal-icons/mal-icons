<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12 8.95L17.64 7.83C19.01 7.55 20 6.35 20 4.94C20 3.09 18.3 1.69 16.48 2.06L12.41 2.87C11.01 3.15 10 4.38 10 5.81V13.89C9.41 13.55 8.73 13.35 8 13.35C5.79 13.35 4 15.15 4 17.35C4 19.56 5.79 21.35 8 21.35C10.21 21.35 12 19.56 12 17.35V8.95ZM16.87 4.02L12.8 4.83C12.34 4.93 12 5.34 12 5.81V6.91L17.24 5.87C17.68 5.78 18 5.39 18 4.94C18 4.35 17.46 3.9 16.87 4.02ZM10 17.35C10 16.25 9.1 15.35 8 15.35C6.9 15.35 6 16.25 6 17.35C6 18.46 6.9 19.35 8 19.35C9.1 19.35 10 18.46 10 17.35Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
