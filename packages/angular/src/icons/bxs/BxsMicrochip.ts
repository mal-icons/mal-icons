import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-microchip",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsMicrochip {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 22h8c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2h-8c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2zm-5-15h2V5h-2v0.5h-1v1h1zm18-2h-2v2h2v-0.5h1v-1h-1zm-18 6h2V9h-2v0.5h-1v1h1zm18-2h-2v2h2v-0.5h1v-1h-1zm-18 6h2v-2h-2v0.5h-1v1h1zm18-2h-2v2h2v-0.5h1v-1h-1zm-18 6h2v-2h-2v0.5h-1v1h1zm18-2h-2v2h2v-0.5h1v-1h-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsMicrochip;
