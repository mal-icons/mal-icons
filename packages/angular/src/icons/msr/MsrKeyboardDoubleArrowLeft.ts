import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-keyboard-double-arrow-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrKeyboardDoubleArrowLeft {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M685-262 487-459q-5-5-7-10t-2-11q0-6 2-11.5t7-10.5l198-198q9-9 21-8.5t21 9.5q9 9 9 21t-9 21L550-480l177 177q9 9 9 20.5t-9 20.5q-9 9-21 9t-21-9Zm-253 0L234-459q-5-5-7-10t-2-11q0-6 2-11.5t7-10.5l198-198q9-9 21-8.5t21 9.5q9 9 9 21t-9 21L297-480l177 177q9 9 9 20.5t-9 20.5q-9 9-21 9t-21-9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrKeyboardDoubleArrowLeft;
