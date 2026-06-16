import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-keyboard-double-arrow-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrKeyboardDoubleArrowDown {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-465q-6 0-11-2t-10-7L261-672q-9-9-9-21t9-21q9-9 21-9t21 9l177 177 177-177q9-9 21-9t21 9q9 9 9 21t-9 21L501-474q-5 5-10 7t-11 2Zm0 253q-6 0-11-2t-10-7L261-419q-9-9-9-21t9-21q9-9 21-9t21 9l177 177 177-177q9-9 21-9t21 9q9 9 9 21t-9 21L501-221q-5 5-10 7t-11 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrKeyboardDoubleArrowDown;
