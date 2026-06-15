import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-unlink",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrUnlink {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M17,11 L21.59,15.59 C22.37,16.37 22.37,17.63 21.59,18.41 L18.41,21.59 C17.63,22.37 16.37,22.37 15.59,21.59 L11,17 M17,8 L21,8 M16,7 L16,3 M8,21 L8,17 M3,16 L7,16 M7,13 L2.41,8.41 C1.63,7.63 1.63,6.37 2.41,5.59 L5.59,2.41 C6.37,1.63 7.63,1.63 8.41,2.41 L13,7"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrUnlink;
