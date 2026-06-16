import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-priority",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPriority {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M351-120q-97 0-164-67t-67-164v-258q0-97 67-164t164-67h258q97 0 164 67t67 164v258q0 97-67 164t-164 67H351Zm88-205 240-240-43-43-197 197-97-97-43 43 140 140Zm-88 145h258q71 0 121-50t50-121v-258q0-71-50-121t-121-50H351q-71 0-121 50t-50 121v258q0 71 50 121t121 50Zm129-300Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPriority;
