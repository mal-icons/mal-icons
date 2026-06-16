import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-keyboard-double-arrow-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrKeyboardDoubleArrowRight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.7 6.71a11 0 0 0 0 1.41L9.58 12 5.7 15.88a11 0 1 0 1.41 1.41l4.59-4.59a11 0 0 0 0-1.41L7.12 6.71c-0.39-0.39-1.03-0.39-1.42 0z"}],["path",{"d":"M12.29 6.71a11 0 0 0 0 1.41L16.17 12l-3.88 3.88a11 0 1 0 1.41 1.41l4.59-4.59a11 0 0 0 0-1.41L13.7 6.7c-0.38-0.38-1.02-0.38-1.410.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrKeyboardDoubleArrowRight;
