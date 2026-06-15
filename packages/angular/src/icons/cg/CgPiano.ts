import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-piano",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgPiano {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M22 21C23.1 21 24 20.1 24 19V5C24 3.9 23.1 3 22 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H22ZM11 5H8.98V13H7.99V19H12V13H11V5ZM18.02 19H22V5H19.02V13H18.02V19ZM17.02 13H16.02V5H14V13H13V19H17.02V13ZM6.99 19V13H5.98V5H3L3 19H6.99Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgPiano;
