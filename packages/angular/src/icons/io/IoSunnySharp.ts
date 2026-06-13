import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-sunny-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoSunnySharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"x":"234","y":"26","width":"44","height":"92"}],["rect",{"x":"234","y":"394","width":"44","height":"92"}],["rect",{"x":"340.11","y":"103.89","width":"92","height":"44","transform":"translate(24.07 309.89) rotate(-45)"}],["rect",{"x":"79.89","y":"364.11","width":"92","height":"44","transform":"translate(-236.14 202.1) rotate(-45)"}],["rect",{"x":"394","y":"234","width":"92","height":"44"}],["rect",{"x":"26","y":"234","width":"92","height":"44"}],["rect",{"x":"364.11","y":"340.11","width":"44","height":"92","transform":"translate(-159.93 386.11) rotate(-45)"}],["rect",{"x":"103.89","y":"79.89","width":"44","height":"92","transform":"translate(-52.15 125.89) rotate(-45)"}],["path",{"d":"M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoSunnySharp;
