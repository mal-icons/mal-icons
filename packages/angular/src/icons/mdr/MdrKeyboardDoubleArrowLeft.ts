import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-keyboard-double-arrow-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrKeyboardDoubleArrowLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.29 17.29a11 0 0 0 0-1.41L14.42 12l3.88-3.88a11 0 1 0-1.41-1.41L12.3 11.3a11 0 0 0 0 1.41l4.59 4.59c0.380.38 1.010.38 1.4-0.01z"}],["path",{"d":"M11.7 17.29a11 0 0 0 0-1.41L7.83 12l3.88-3.88a11 0 1 0-1.41-1.41L5.71 11.3a11 0 0 0 0 1.41l4.59 4.59c0.380.38 1.010.38 1.4-0.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrKeyboardDoubleArrowLeft;
