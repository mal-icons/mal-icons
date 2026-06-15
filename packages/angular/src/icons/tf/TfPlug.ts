import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-plug",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfPlug {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 4v5.01c0 2.75 2.47 4.99 5.5 4.99s5.5-2.24 5.5-4.99v-5.01h-11zM13 9.01c0 2.2-2.02 3.99-4.5 3.99s-4.5-1.79-4.5-3.99v-4.01h9v4.01zM7.02 3h-1v-3h1v3zM10.98 3h-1v-3h1v3zM8 14h1v3h-1v-3zM11 8h-5v-1h5v1zM11 10h-5v-1h5v1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfPlug;
