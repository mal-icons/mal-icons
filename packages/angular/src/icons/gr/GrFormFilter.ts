import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-form-filter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrFormFilter {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"none","stroke":"currentColor","stroke-width":"2","points":"6 8 11.67 12.67 11.67 18 12.33 18 12.33 12.67 18 8 18 6 6 6"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrFormFilter;
