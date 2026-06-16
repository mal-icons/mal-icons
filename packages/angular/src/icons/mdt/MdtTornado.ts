import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-tornado",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtTornado {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.1 13h5.8l1.74-3H7.36zm2.9 5.01L13.74 15h-3.48zM4.47 5l1.74 3h11.58l1.74-3z","opacity":".3"}],["path",{"d":"m1 3 11 19L23 3H1zm11 15.01L10.26 15h3.48L12 18.01zM14.9 13H9.1l-1.74-3h9.27l-1.73 3zM6.21 8 4.47 5h15.06l-1.74 3H6.21z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtTornado;
