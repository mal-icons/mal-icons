import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-equal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrEqual {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M210-290q-20.83 0-35.42-14.62Q160-319.23 160-340.12 160-361 174.58-375.5 189.17-390 210-390h540q20.83 0 35.42 14.62Q800-360.76 800-339.88 800-319 785.42-304.5 770.83-290 750-290H210Zm0-280q-20.83 0-35.42-14.62Q160-599.23 160-620.12 160-641 174.58-655.5 189.17-670 210-670h540q20.83 0 35.42 14.62Q800-640.76 800-619.88 800-599 785.42-584.5 770.83-570 750-570H210Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrEqual;
