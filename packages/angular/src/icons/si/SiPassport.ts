import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-passport",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPassport {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.88 0A9.6 9.6 0 0 0 2.4 9.48h4.8A4.81 4.81 0 0 1 11.88 4.8zm0.25 0v4.8A4.81 4.81 0 0 1 16.8 9.48h4.8A9.6 9.6 0 0 0 12.13 0zM2.4 9.73V24H12v-4.8H7.2V9.72zm9.6 9.47a9.6 9.6 0 0 0 9.6-9.47h-4.8A4.81 4.81 0 0 1 12 14.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPassport;
