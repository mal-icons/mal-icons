<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M726-451H510q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T510-511h216l-61-60q-9-8.25-9-20.62T665-613q9-9 21-9t21 9l111 111q9 9 9 21t-9 21L707-349q-8.25 8.25-20.62 8.63T665-349q-9-9-9-21t9-21l61-60ZM260-40q-24.75 0-42.37-17.62T200-100v-760q0-24.75 17.63-42.37T260-920h440q24.75 0 42.38 17.63T760-860v146h-60v-56H260v580h440v-56h60v146q0 24.75-17.62 42.38T700-40H260Zm0-90v30h440v-30H260Zm0-700h440v-30H260v30Zm0 0v-30 30Zm0 700v30-30Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
