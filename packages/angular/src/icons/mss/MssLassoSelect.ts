import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-lasso-select",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLassoSelect {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m141-518-60-6q5-46 20-90t40-82l51 33q-19 34-32 70.5T141-518Zm55 317q-32-31-56.5-69T101-353l58-19q13 37 33 69t47 59l-43 43Zm102-568-33-51q40-25 82.5-39.5T438-880l6 60q-41 5-75.5 17.5T298-769ZM488-82q-38 0-74-6t-68-17l22-58q27 10 59 15t61 6v60Zm232-635q-29-29-62-50.5T587-802l21-57q47 16 85.5 41.5T763-760l-43 43Zm93 600L682-248v130h-60v-232h232v60H724l131 131-42 42Zm6-367q-1-29-5.5-59T797-600l58-18q12 32 18 65.5t6 68.5h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLassoSelect;
