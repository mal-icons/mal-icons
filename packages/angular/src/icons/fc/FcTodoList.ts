import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-todo-list",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcTodoList {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#3F51B5","points":"17.8,18.1 10.4,25.4 6.2,21.3 4,23.5 10.4,29.9 20,20.3"}],["polygon",{"fill":"#3F51B5","points":"17.8,5.1 10.4,12.4 6.2,8.3 4,10.5 10.4,16.9 20,7.3"}],["polygon",{"fill":"#3F51B5","points":"17.8,31.1 10.4,38.4 6.2,34.3 4,36.5 10.4,42.9 20,33.3"}],["rect",{"fill":"#90CAF9","x":"24","y":"22","width":"20","height":"4"}],["rect",{"fill":"#90CAF9","x":"24","y":"9","width":"20","height":"4"}],["rect",{"fill":"#90CAF9","x":"24","y":"35","width":"20","height":"4"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcTodoList;
