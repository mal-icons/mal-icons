import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-tab-close-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssTabCloseRight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m366-324 114-114 114 114 42-42-114-114 114-114-42-42-114 114-114-114-42 42 114 114-114 114 42 42ZM180-180v-600 600Zm-60 60v-720h720v458q-14-5-29-7.5t-31-3.5v-387H180v600h387q1 16 3.5 31t7.5 29H120Zm654 80-42-42 73-74H624v-60h181l-73-74 42-42 146 146L774-40Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssTabCloseRight;
