import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-tab-new-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssTabNewRight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-180v-600 600Zm-60 60v-720h720v458q-14.17-5-29.08-7.5Q796-392 780-393v-387H180v600h387q1 16 3.5 30.92Q573-134.17 578-120H120Zm654 80-42-42 73-74H624v-60h181l-73-74 42-42 146 146L774-40ZM450-280h60v-170h170v-60H510v-170h-60v170H280v60h170v170Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssTabNewRight;
