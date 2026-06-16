import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-edit-attributes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrEditAttributes {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M279-280q-81 0-140.5-59T79-480q0-82 59.5-141T279-680h400q81 0 140.5 59T879-480q0 82-59.5 141T679-280H279Zm0-60h400q59 0 99.5-40.5T819-480q0-59-40.5-99.5T679-620H279q-59 0-99.5 40.5T139-480q0 59 40.5 99.5T279-340Zm43-60q6 0 11-2t10-7l103-103q8-8 8-18.5t-8-18.5q-8-8-18-8t-18 8l-88 87-27-27q-8-8-18-7.5t-18 8.5q-8 8-8 18.5t8 18.5l42 42q5 5 10 7t11 2Zm158-80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrEditAttributes;
