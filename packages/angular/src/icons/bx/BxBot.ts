import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-bot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxBot {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.93 11.61c-0.2-0.49-0.63-0.6-0.93-0.63V8c0-1.1-0.9-2-2-2h-6V4.61c0.31-0.270.5-0.670.5-1.11a1.5 1.5 0 0 0-3 0c0 0.440.20.840.5 1.11V6H5c-1.1 0-2 0.9-2 2v3l-0.080.01A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2v-5a1 1 0 0 0 1-1v-1.94a1.01 1.01 0 0 0-0.07-0.45zM5 20V8h14l0 4L19 12v2l00.010 6H5z"}],["ellipse",{"cx":"8.5","cy":"12","rx":"1.5","ry":"2"}],["ellipse",{"cx":"15.5","cy":"12","rx":"1.5","ry":"2"}],["path",{"d":"M8 16h8v2H8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxBot;
