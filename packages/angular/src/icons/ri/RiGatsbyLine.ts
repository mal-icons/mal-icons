import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-gatsby-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGatsbyLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.75 22C6.53 21.87 2.3 17.74 2.02 12.56L2 12.25L11.75 22ZM12 2C15.39 2 18.39 3.69 20.19 6.26L18.56 7.41C17.11 5.35 14.71 4 12 4C8.6 4 5.69 6.12 4.53 9.12L14.88 19.47C17.27 18.54 19.1 16.51 19.75 14L15.5 14V12H22C22 16.73 18.72 20.69 14.32 21.73L2.27 9.69C3.31 5.28 7.27 2 12 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGatsbyLine;
