import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-arrow-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscArrowLeft {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.5 8H3.71L7.85 3.85C8.05 3.66 8.05 3.34 7.85 3.15C7.66 2.95 7.34 2.95 7.15 3.15L2.15 8.15C1.95 8.34 1.95 8.66 2.15 8.85L7.15 13.85C7.24 13.95 7.37 14 7.5 14C7.63 14 7.76 13.95 7.85 13.85C8.05 13.66 8.05 13.34 7.85 13.15L3.71 9H13.5C13.78 9 14 8.78 14 8.5C14 8.23 13.78 8 13.5 8L13.5 8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscArrowLeft;
