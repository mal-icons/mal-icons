import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-googledocs",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGoogledocs {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.73 6.73H14V0H4.91c-0.9 0-1.640.73-1.64 1.64v20.73c0 0.90.73 1.64 1.64 1.64h14.18c0.9 0 1.64-0.73 1.64-1.64V6.73h-6zm-0.55 10.46H7.09v-1.36h7.09v1.36zm2.73-3.27H7.09v-1.36h9.82v1.36zm0-3.27H7.09V9.27h9.82v1.36zM14.73 6h6l-6-6v6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGoogledocs;
