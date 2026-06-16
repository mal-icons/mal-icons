import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-keyboard-tab",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrKeyboardTab {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.29 8.12 15.17 11H2c-0.55 0-1 0.45-1 1s0.45 1 1 1h13.17l-2.88 2.88a11 0 1 0 1.41 1.41l4.59-4.59a11 0 0 0 0-1.41L13.7 6.7a11 0 0 0-1.41 0c-0.380.39-0.39 1.03 0 1.42zM20 7v10c0 0.550.45 1 1 1s1-0.45 1-1V7c0-0.55-0.45-1-1-1s-1 0.45-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrKeyboardTab;
