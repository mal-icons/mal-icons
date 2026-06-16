import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-single-bed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtSingleBed {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 12h12v3H6z","opacity":".3"}],["path",{"d":"M18 10V7c0-1.1-0.9-2-2-2H8c-1.1 0-2 0.9-2 2v3c-1.1 0-2 0.9-2 2v5h1.33L6 19h1l0.67-2h8.67l0.66 2h1l0.67-2H20v-5c0-1.1-0.9-2-2-2zm-5-3h3v3h-3V7zM8 7h3v3H8V7zm10 8H6v-3h12v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtSingleBed;
