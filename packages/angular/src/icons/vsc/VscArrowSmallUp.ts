import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-arrow-small-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscArrowSmallUp {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.85 6.15L7.85 4.15C7.66 3.95 7.34 3.95 7.15 4.15L5.15 6.15C4.95 6.34 4.95 6.66 5.15 6.85C5.34 7.05 5.66 7.05 5.85 6.85L7 5.71V10.5C7 10.78 7.22 11 7.5 11C7.78 11 8 10.78 8 10.5V5.71L9.15 6.85C9.24 6.95 9.37 7 9.5 7C9.63 7 9.76 6.95 9.85 6.85C10.05 6.66 10.05 6.34 9.85 6.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscArrowSmallUp;
