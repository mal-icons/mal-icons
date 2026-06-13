import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-apps-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoAppsSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"x":"48","y":"48","width":"112","height":"112","rx":"8","ry":"8"}],["rect",{"x":"200","y":"48","width":"112","height":"112","rx":"8","ry":"8"}],["rect",{"x":"352","y":"48","width":"112","height":"112","rx":"8","ry":"8"}],["rect",{"x":"48","y":"200","width":"112","height":"112","rx":"8","ry":"8"}],["rect",{"x":"200","y":"200","width":"112","height":"112","rx":"8","ry":"8"}],["rect",{"x":"352","y":"200","width":"112","height":"112","rx":"8","ry":"8"}],["rect",{"x":"48","y":"352","width":"112","height":"112","rx":"8","ry":"8"}],["rect",{"x":"200","y":"352","width":"112","height":"112","rx":"8","ry":"8"}],["rect",{"x":"352","y":"352","width":"112","height":"112","rx":"8","ry":"8"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoAppsSharp;
