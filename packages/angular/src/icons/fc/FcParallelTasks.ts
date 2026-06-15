import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-parallel-tasks",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcParallelTasks {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#90CAF9","points":"36,13 36,9 22,9 22,22 13,22 13,26 22,26 22,39 36,39 36,35 26,35 26,26 36,26 36,22 26,22 26,13"}],["rect",{"x":"6","y":"17","fill":"#D81B60","width":"10","height":"14"}],["rect",{"x":"32","y":"6","fill":"#2196F3","width":"10","height":"10"}],["rect",{"x":"32","y":"32","fill":"#2196F3","width":"10","height":"10"}],["rect",{"x":"32","y":"19","fill":"#2196F3","width":"10","height":"10"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcParallelTasks;
