import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-keyboard-double-arrow-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrKeyboardDoubleArrowUp {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M261-499q-9-9-9-21t9-21l198-198q5-5 10-7t11-2q6 0 11 2t10 7l198 198q9 9 9 21t-9 21q-9 9-21 9t-21-9L480-676 303-499q-9 9-21 9t-21-9Zm0 253q-9-9-9-21t9-21l198-198q5-5 10-7t11-2q6 0 11 2t10 7l198 198q9 9 9 21t-9 21q-9 9-21 9t-21-9L480-423 303-246q-9 9-21 9t-21-9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrKeyboardDoubleArrowUp;
