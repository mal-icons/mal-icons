import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-keypad-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoKeypadSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"x":"80","y":"16","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"208","y":"16","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"336","y":"16","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"80","y":"144","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"208","y":"144","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"336","y":"144","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"80","y":"272","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"208","y":"272","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"208","y":"400","width":"96","height":"96","rx":"8","ry":"8"}],["rect",{"x":"336","y":"272","width":"96","height":"96","rx":"8","ry":"8"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoKeypadSharp;
