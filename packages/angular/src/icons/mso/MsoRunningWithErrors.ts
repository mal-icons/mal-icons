import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-running-with-errors",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoRunningWithErrors {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M478-80q-83 0-156-31.5T195-197q-54-54-85.5-127T78-480q0-83 31.5-156T195-763q54-54 127-85.5T478-880q88 0 166.5 36T780-742L478-440v-380q-142 0-241 98.81Q138-622.37 138-480t98.81 241.19Q335.63-140 478-140q81 0 153.5-36.5T757-276v83q-57 54-129 83.5T478-80Zm339-147v-327h60v327h-60Zm33.02 140Q836-87 826.5-96.48q-9.5-9.48-9.5-23.5 0-14.02 9.48-23.52 9.48-9.5 23.5-9.5 14.02 0 23.52 9.48 9.5 9.48 9.5 23.5Q883-106 873.52-96.5q-9.48 9.5-23.5 9.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoRunningWithErrors;
