import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-trash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlTrash {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M896.8 159.02l-225.280V71.76c0-40.53-33.01-72.5-73.54-72.5H426c-40.53 0-73.52 31.97-73.52 72.5v87.26h-225.28c-17.66 0-32 14.34-32 32s14.34 32 32 32h44.02l74.24 739.92c3.1 34.62 32.61 61.78 67.14 61.78h398.8c34.53 0 64-27.15 67.09-61.47l74.3-740.24h44.02c17.68 0 32-14.34 32-32s-14.32-31.98-32-31.98zM416.48 71.76c0-5.23 4.27-9.51 9.52-9.51h171.98c5.25 0 9.54 4.27 9.54 9.51v87.26h-191.04zm298.29 885.44c-0.16 1.78-2.26 3.54-3.38 3.54h-398.8c-1.12 0-3.23-1.74-3.42-3.84l-73.63-733.86H788.45z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlTrash;
