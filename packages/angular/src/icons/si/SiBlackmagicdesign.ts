import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-blackmagicdesign",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBlackmagicdesign {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.39 0c-1.15 0-2.080.93-2.08 2.08V5.31c0 1.150.93 2.08 2.08 2.08h3.23c1.15 0 2.08-0.93 2.08-2.08V2.08A2.07 2.07 0 0 0 13.62 0h-3.23zm0 0.92h3.23c0.64 0 1.160.51 1.16 1.15V5.31c0 0.64-0.52 1.15-1.15 1.15h-3.23A1.15 1.15 0 0 1 9.23 5.31V2.08c0-0.640.52-1.15 1.16-1.15zm0 7.39c-1.15 0-2.080.93-2.08 2.08v3.23c0 1.150.93 2.08 2.08 2.08h3.23c1.15 0 2.08-0.93 2.08-2.08v-3.23c0-1.15-0.93-2.08-2.08-2.08h-3.23zm0 0.92h3.23c0.64 0 1.160.52 1.16 1.16v3.23c0 0.64-0.52 1.16-1.15 1.16h-3.23a1.15 1.15 0 0 1-1.15-1.15v-3.23c0-0.640.52-1.15 1.16-1.15zm0 7.39c-1.15 0-2.080.93-2.08 2.08v3.23c0 1.150.93 2.08 2.08 2.08h3.23c1.15 0 2.08-0.93 2.08-2.08V18.69a2.08 2.08 0 0 0-2.08-2.08h-3.23zm0 0.92h3.23c0.64 0 1.160.51 1.16 1.15v3.23c0 0.64-0.52 1.15-1.15 1.15h-3.23a1.15 1.15 0 0 1-1.15-1.15V18.69c0-0.640.52-1.15 1.16-1.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBlackmagicdesign;
