import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-checklist-rtl",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrChecklistRtl {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M110-610q-12.75 0-21.37-8.68Q80-627.35 80-640.17 80-653 88.63-661.5T110-670h300q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T410-610H110Zm0 320q-12.75 0-21.37-8.68Q80-307.35 80-320.17 80-333 88.63-341.5T110-350h300q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T410-290H110Zm528-265L538-655q-9-9-9-21t9-21q9-9 21-8.5t21 8.5l79 78 158-158q9-9 21-8.5t21.39 9.5Q868-767 868-755t-9 21L680-555q-9 9-21 9t-21-9Zm0 320L538-335q-9-9-9-21t9-21q9-9 21-8.5t21 8.5l79 78 158-158q9-9 21-8.5t21.39 9.5Q868-447 868-435t-9 21L680-235q-9 9-21 9t-21-9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrChecklistRtl;
