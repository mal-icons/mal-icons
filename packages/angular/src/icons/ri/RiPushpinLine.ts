import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-pushpin-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPushpinLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.83 1.69L22.31 10.18L20.9 11.59L20.19 10.88L15.95 15.13L15.24 18.66L13.83 20.07L9.58 15.83L4.63 20.78L3.22 19.37L8.17 14.42L3.93 10.18L5.34 8.76L8.88 8.05L13.12 3.81L12.41 3.1L13.83 1.69ZM14.53 5.23L9.86 9.9L7.04 10.46L13.54 16.96L14.11 14.14L18.78 9.47L14.53 5.23Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPushpinLine;
