import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-brush-3-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBrush3Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 11V8H14V4H10V8H4V11H20ZM21 13V21C21 21.55 20.55 22 20 22H10V16H8V22H4C3.45 22 3 21.55 3 21V13H2V7C2 6.44 2.45 6 3 6H8V3C8 2.44 8.45 2 9 2H15C15.55 2 16 2.44 16 3V6H21C21.55 6 22 6.44 22 7V13H21Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBrush3Fill;
