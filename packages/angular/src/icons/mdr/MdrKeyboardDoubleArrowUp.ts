import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-keyboard-double-arrow-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrKeyboardDoubleArrowUp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.7 18.29c0.390.39 1.020.39 1.41 0L12 14.42l3.88 3.88a11 0 1 0 1.41-1.41L12.7 12.3a11 0 0 0-1.41 0L6.7 16.88a11 0 0 0 0 1.41z"}],["path",{"d":"M6.7 11.7c0.390.39 1.020.39 1.41 0L12 7.83l3.88 3.88a11 0 1 0 1.41-1.41L12.7 5.71a11 0 0 0-1.41 0L6.7 10.29a11 0 0 0 0 1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrKeyboardDoubleArrowUp;
