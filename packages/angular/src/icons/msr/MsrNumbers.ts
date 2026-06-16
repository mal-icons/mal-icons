import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-numbers",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNumbers {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m338-319-34 138q-2 10-10 16t-18 6q-14 0-23-11t-5-25l31-124H157q-14 0-23.5-11.5T128-356q2-10 10-16.5t19-6.5h137l51-202H223q-14 0-23.5-11.5T194-618q2-10 10-16.5t19-6.5h137l34-138q2-10 10-16t18-6q14 0 23 11t5 25l-31 124h203l34-138q2-10 10-16t18-6q14 0 23 11t5 25l-31 124h122q14 0 23.5 11.5T832-604q-2 10-10 16.5t-19 6.5H666l-51 202h122q14 0 23.5 11.5T766-342q-2 10-10 16.5t-19 6.5H600l-34 138q-2 10-10 16t-18 6q-14 0-23-11t-5-25l31-124H338Zm15-60h203l51-202H404l-51 202Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNumbers;
