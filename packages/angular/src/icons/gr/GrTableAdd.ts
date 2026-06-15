import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-table-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrTableAdd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M8,5 L8,23 M16,5 L16,11 M1,11 L17,11 M1,5 L23,5 M1,17 L11,17 M17,23 L1,23 L1,1 L23,1 L23,17 M17,23 C20.31,23 23,20.31 23,17 C23,13.69 20.31,11 17,11 C13.69,11 11,13.69 11,17 C11,20.31 13.69,23 17,23 Z M17,14 L17,20 M17,14 L17,20 M14,17 L20,17"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrTableAdd;
