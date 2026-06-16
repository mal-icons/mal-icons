import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-edit-attributes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtEditAttributes {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.63 9H6.37C5.09 9 4 10.37 4 12s1.09 3 2.37 3h11.26c1.28 0 2.37-1.37 2.37-3s-1.09-3-2.37-3zM7.24 14.46l-2.57-2.570.7-0.7 1.87 1.87 3.52-3.520.70.7-4.22 4.22z","opacity":".3"}],["path",{"d":"M17.63 7H6.37C3.96 7 2 9.24 2 12s1.96 5 4.37 5h11.26c2.41 0 4.37-2.24 4.37-5s-1.96-5-4.37-5zm0 8H6.37C5.09 15 4 13.63 4 12s1.09-3 2.37-3h11.26C18.91 9 20 10.37 20 12s-1.09 3-2.37 3zM7.24 13.06l-1.87-1.87-0.70.7 2.57 2.57 4.22-4.22-0.7-0.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtEditAttributes;
