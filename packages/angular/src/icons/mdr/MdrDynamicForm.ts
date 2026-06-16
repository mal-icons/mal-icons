import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-dynamic-form",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDynamicForm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.68 9.71-3.72 8.19c-0.230.49-0.960.33-0.96-0.21V11h-1.5c-0.28 0-0.5-0.22-0.5-0.5v-6c0-0.280.22-0.50.5-0.5h5.76c0.35 0 0.60.360.460.69L20 9h1.22c0.37 0 0.610.380.460.71zM15 13v7H4c-1.1 0-2-0.9-2-2v-3c0-1.10.9-2 2-2h11zm-8.75 3.5c0-0.41-0.34-0.75-0.75-0.75s-0.750.34-0.750.750.340.750.750.750.75-0.340.75-0.75zM13 4v7H4c-1.1 0-2-0.9-2-2V6c0-1.10.9-2 2-2h9zM6.25 7.5c0-0.41-0.34-0.75-0.75-0.75s-0.750.34-0.750.750.340.750.750.750.75-0.340.75-0.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDynamicForm;
