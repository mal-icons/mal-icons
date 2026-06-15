import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-layout-grid2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfLayoutGrid2 {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 7h7v-7h-7v7zM1 1h5v5h-5v-5z","fill":"currentColor"}],["path",{"d":"M9 0v7h7v-7h-7zM15 6h-5v-5h5v5z","fill":"currentColor"}],["path",{"d":"M0 16h7v-7h-7v7zM1 10h5v5h-5v-5z","fill":"currentColor"}],["path",{"d":"M9 16h7v-7h-7v7zM10 10h5v5h-5v-5z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfLayoutGrid2;
