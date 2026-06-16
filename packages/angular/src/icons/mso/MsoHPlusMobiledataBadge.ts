import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-h-plus-mobiledata-badge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoHPlusMobiledataBadge {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M100-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h760q24 0 42 18t18 42v600q0 24-18 42t-42 18H100Zm0-60h760v-600H100v600Zm0 0v-600 600Zm80-100h60v-170h200v170h60v-400h-60v170H240v-170h-60v400Zm455-85h60v-85h85v-60h-85v-85h-60v85h-85v60h85v85Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoHPlusMobiledataBadge;
