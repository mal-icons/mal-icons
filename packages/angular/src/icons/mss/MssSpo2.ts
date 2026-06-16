import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-spo2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSpo2 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M452-166v-228h168v228H452Zm48-48h72v-132h-72v132ZM680-80v-144h132v-48H680v-48h180v144H728v48h132v48H680Zm-300-1q-131-8-215.5-100.5T80-408q0-100 79.5-217.5T400-880q134 114 214.5 220T714-466h-62q-19-71-84-157.5T400-800Q273-688 206.5-587.5T140-408q0 109 67.5 184T380-141v60Zm16-327Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSpo2;
