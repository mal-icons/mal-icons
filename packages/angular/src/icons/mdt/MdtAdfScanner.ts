import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-adf-scanner",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtAdfScanner {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 6h8v6H8zm11 8H5c-0.55 0-1 0.45-1 1v3h16v-3c0-0.55-0.45-1-1-1zm-1 3c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z","opacity":".3"}],["path",{"d":"M19 12h-1V4H6v8H5c-1.66 0-3 1.34-3 3v5h20v-5c0-1.66-1.34-3-3-3zM8 6h8v6H8V6zm12 12H4v-3c0-0.550.45-1 1-1h14c0.55 0 1 0.45 1 1v3z"}],["circle",{"cx":"18","cy":"16","r":"1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtAdfScanner;
