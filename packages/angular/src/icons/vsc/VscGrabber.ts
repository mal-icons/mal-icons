import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-grabber",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscGrabber {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.5 9H13.5C13.78 9 14 9.22 14 9.5C14 9.75 13.82 9.95 13.59 9.99L13.5 10H2.5C2.22 10 2 9.78 2 9.5C2 9.25 2.18 9.05 2.41 9.01L2.5 9H13.5H2.5ZM2.5 6H13.5C13.78 6 14 6.22 14 6.5C14 6.75 13.82 6.95 13.59 6.99L13.5 7H2.5C2.22 7 2 6.78 2 6.5C2 6.25 2.18 6.05 2.41 6.01L2.5 6H13.5H2.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscGrabber;
