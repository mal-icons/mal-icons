import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-tab-new-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTabNewRight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-180v-600 600-7 7Zm0 60q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v398q-14.17-5-29.08-7.5Q796-392 780-393v-387H180v600h387q1 16 3.5 30.92Q573-134.17 578-120H180Zm625-36H654q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T654-216h151l-52-53q-8-9-8.5-21t8.5-21q9-9 21-9t21 9l104 104q9 9 9 21t-9 21L795-61q-9 9-21 9t-21-9q-9-9-8.5-21t8.5-21l52-53ZM450-450v140q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63 12.83 0 21.33-8.62T510-310v-140h140q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T650-510H510v-140q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62-12.82 0-21.32 8.63T450-650v140H310q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T310-450h140Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTabNewRight;
