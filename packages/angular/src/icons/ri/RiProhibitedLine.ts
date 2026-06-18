import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-prohibited-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiProhibitedLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.09 5.68L18.32 16.91C19.37 15.55 20 13.85 20 12C20 7.58 16.42 4 12 4C10.15 4 8.45 4.63 7.09 5.68ZM16.91 18.32L5.68 7.09C4.63 8.45 4 10.15 4 12C4 16.42 7.58 20 12 20C13.85 20 15.55 19.37 16.91 18.32ZM4.93 4.93C6.74 3.12 9.24 2 12 2C17.52 2 22 6.48 22 12C22 14.76 20.88 17.26 19.07 19.07C17.26 20.88 14.76 22 12 22C6.48 22 2 17.52 2 12C2 9.24 3.12 6.74 4.93 4.93Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiProhibitedLine;
