import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-tent-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTentLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.1 19L12.87 3C12.78 2.85 12.65 2.72 12.5 2.63C12.02 2.36 11.41 2.52 11.13 3L1.9 19H1V21C8.33 21 15.67 21 23 21V19H22.1ZM7.6 19H4.21L12 5.5L19.79 19H16.4L12 11L7.6 19ZM12 15.15L14.12 19H9.88L12 15.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTentLine;
